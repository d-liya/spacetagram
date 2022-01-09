import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NASA_APOD_CACHE_KEY, NASA_APOD_URL } from "../constants";
import { getDateWithPage } from "../helpers/methods";
import { useAppDispatch } from "../hooks";
import {
  handleDataChange,
  handleError,
  handleLikedImages,
  handleStatus,
  incrementPage,
  useStore,
} from "../redux";
import ImageCard from "./ImageCard";
import {
  useTransition,
  useChain,
  animated,
  useSpringRef,
} from "@react-spring/web";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useLocalStorage from "../hooks/useLocalStorage";
import { ApiDataType } from "../constants/types";
import { useLocation, useNavigate } from "react-router-dom";

export default function Main() {
  const state = useStore();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const springApi = useSpringRef();
  const { set, get } = useLocalStorage();
  const transApi = useSpringRef();
  const fecth = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const data: Array<ApiDataType & { liked: boolean }> = useMemo(() => {
    if (state.likedImages.length > 0) {
      return state.data.map((item) => {
        const liked = state.likedImages.includes(item.url);
        return { ...item, liked };
      });
    } else {
      return state.data.map((item) => ({ ...item, liked: false }));
    }
  }, [state.data, state.likedImages]);

  // styles
  const transition = useTransition(open ? data : [], {
    keys: (item) => item.date,
    ref: transApi,
    trail: 60,
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  // handle scroll on path change
  useEffect(() => {
    document.body.style.overflow =
      location.pathname === "/" ? "auto" : "hidden";
  }, [location.pathname]);

  const fetchAsync = useCallback(async (page: number) => {
    dispatch(handleStatus("loading"));
    try {
      const { start_date, end_date } = getDateWithPage(page);
      const _url = `${NASA_APOD_URL}&start_date=${start_date}&end_date=${end_date}`;
      const response = await fetch(_url);

      if (response.ok) {
        const _data = await response.json();
        dispatch(handleDataChange(_data.reverse()));
        const localCash = get(NASA_APOD_CACHE_KEY);
        if (localCash) {
          dispatch(handleLikedImages(localCash.liked));
        }
        dispatch(handleStatus("success"));
        setOpen(true);
      } else {
        if (response.status === 500) {
          dispatch(
            handleError(
              "Server error! Might have reached the limit of requests. Try again later."
            )
          );
        }
        dispatch(handleError("Opps! Something went wrong"));
      }
    } catch (error) {
      dispatch(handleError("Opps! Something went wrong"));
    } finally {
      fecth.current = false;
    }
  }, []);

  // handle fetch on render
  useEffect(() => {
    let didCancel = false;
    !didCancel && fetchAsync(state.page);
    navigate("/", { replace: true });
    return () => {
      didCancel = true;
    };
  }, [state.page]);

  const handleOnHeartClick = (url: string, liked: boolean) => {
    const _likedImages = [...state.likedImages];
    if (!liked) {
      _likedImages.push(url);
    } else {
      _likedImages.splice(_likedImages.indexOf(url), 1);
    }
    dispatch(handleLikedImages(_likedImages));
    set(NASA_APOD_CACHE_KEY, { liked: _likedImages });
  };

  // handle infinite scroll
  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight * 0.8
      ) {
        if (fecth.current) return;
        fecth.current = true;
        dispatch(incrementPage());
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <main className="flex flex-1 bg-dark-green">
      <ul className="flex flex-1 flex-col pt-10 justify-center items-center">
        {transition(
          (style, item) =>
            item.media_type === "image" && (
              <animated.li
                style={{
                  willChange: "transform, opacity",
                  ...style,
                }}
              >
                <ImageCard
                  {...item}
                  key={item.date}
                  liked={item.liked}
                  onClick={() => handleOnHeartClick(item.url, item.liked)}
                />
              </animated.li>
            )
        )}
        <li>
          <Loader
            text="Please wait, we are loading data from the Nasa Api."
            isLoading={state.status === "loading"}
          />
          <ErrorMessage
            title={state.errorMessage!}
            message="Please try again later."
            isError={state.status === "error"}
          />
        </li>
      </ul>
    </main>
  );
}
