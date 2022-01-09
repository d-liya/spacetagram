import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../redux";
import { animated, useSpring } from "@react-spring/web";
import { AiOutlineClose } from "react-icons/ai";
import moment from "moment";

export default function ReadMore() {
  const { date } = useParams();
  const state = useStore();
  const data = useMemo(() => {
    return state.data.find((item) => item.date === date);
  }, [date]);

  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  return data ? (
    <animated.div className="w-full min-h-screen z-100 top-0 fixed bg-dark-green">
      <animated.div className="flex justify-center items-center min-h-screen overflow-auto">
        <div
          className="w-4/5 bg-dark-green shadow-2xl shadow-light-green rounded flex flex-col items-center justify-center  p-10 relative"
          style={{ minHeight: "90vh" }}
        >
          <Link
            to="/"
            className="absolute top-10 right-10 text-green-100 bg-light-green rounded-full p-2 hover:scale-110 hover:opacity-50 transition ease-in-out duration-300"
          >
            <AiOutlineClose size={18} />
          </Link>
          <animated.h1 style={style} className="text-green-100 font-bold">
            {data.title}
          </animated.h1>
          {!!data.copyright && (
            <animated.h3 style={style} className="text-sm text-green-100 ">
              By {data.copyright}
            </animated.h3>
          )}
          <animated.time style={style} className="text-sm text-green-100 pb-2">
            {moment(data.date).format("MMMM Do YYYY")}
          </animated.time>
          <animated.p style={style} className="p-2 text-green-100 text-center">
            {data.explanation}
          </animated.p>
        </div>
      </animated.div>
    </animated.div>
  ) : (
    <div></div>
  );
}
