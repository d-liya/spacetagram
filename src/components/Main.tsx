import { useEffect, useMemo, useState } from "react";
import { NASA_APOD_CACHE_KEY, NASA_APOD_URL } from "../constants";
import { createDateObject, formatDate } from "../helpers/methods";
import { useAppDispatch } from "../hooks";
import {
  handleDataChange,
  handleError,
  handleLikedImages,
  handleStatus,
  useStore,
} from "../redux";
import ImageCard from "./ImageCard";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useLocalStorage from "../hooks/useLocalStorage";
import { ApiDataType } from "../constants/types";

export default function Main() {
  const state = useStore();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const springApi = useSpringRef();
  const { set, get } = useLocalStorage();
  const transApi = useSpringRef();

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

  const transition = useTransition(open ? data : [], {
    keys: (item) => item.url,
    ref: transApi,
    trail: 60,
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    // leave: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  const fetchAsync = async () => {
    try {
      dispatch(handleStatus("loading"));
      const { start_date, end_date } = createDateObject(state.page);
      const _url = `${NASA_APOD_URL}&start_date=${formatDate(
        start_date
      )}&end_date=${formatDate(end_date)}`;
      const response = await fetch(_url);
      if (response.ok) {
        const _data = await response.json();
        dispatch(handleDataChange(_data));
        const localCash = get(NASA_APOD_CACHE_KEY);
        if (localCash) {
          dispatch(handleLikedImages(localCash.liked));
        }
        dispatch(handleStatus("success"));
        setOpen(true);
      } else {
        dispatch(handleError("Opps! Something went wrong"));
      }
    } catch (error) {
      dispatch(handleError("Opps! Something went wrong"));
    }
  };

  useEffect(() => {
    fetchAsync();
  }, []);
  console.log(data);
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
  return (
    <main className="flex flex-1 bg-light-cream">
      <div className="flex flex-1 flex-col items-center pt-10 justify-center">
        {transition(
          (style, item) =>
            item.media_type === "image" && (
              <animated.div
                style={{
                  willChange: "transform, opacity",
                  ...style,
                }}
              >
                <ImageCard
                  {...item}
                  key={item.url}
                  liked={item.liked}
                  onClick={() => handleOnHeartClick(item.url, item.liked)}
                />
              </animated.div>
            )
        )}
        <Loader
          text="Give us a second we are loading data from the Nasa Api's"
          isLoading={state.status === "loading"}
        />
        <ErrorMessage
          title={state.errorMessage!}
          message="Please try again later."
          isError={state.status === "error"}
        />
      </div>
    </main>
  );
}
