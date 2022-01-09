import moment from "moment";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useMeasure from "react-use-measure";
import { ApiDataType } from "../constants/types";
import { calculateHeight } from "../helpers/methods";
import Heart from "./Heart";
import { useSpring, animated } from "@react-spring/web";

const MOBILEDEVICE = window.matchMedia("(max-width: 767px)");
export default function ImageCard({
  url,
  explanation,
  title,
  copyright,
  date,
  liked,
  onClick,
}: ApiDataType & { liked: boolean; onClick: () => void }) {
  const [ref, bounds] = useMeasure();
  const [tRef, tBounds] = useMeasure();
  const [isOverFlow, setIsOverflow] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const location = useLocation();
  const _ref = useRef<HTMLParagraphElement | null>(null);
  const OFFSET = tBounds.height + 90;
  // const _ref = createRef<HTMLParagraphElement>();
  const heightStyle = useSpring({
    maxHeight:
      readMore && MOBILEDEVICE.matches
        ? _ref.current?.scrollHeight
        : calculateHeight(bounds.height - OFFSET, 24),
  });
  const handleOnReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="m-5 sm:mx-8 flex justify-center flex-col items-center  md:flex-row">
      <img
        ref={ref}
        src={url}
        alt={title}
        className="object-cover w-full sm:w-11/12 h-96 md:w-96 rounded-t-md md:rounded-none md:rounded-l-md shadow"
      />
      <section
        className="p-5 w-full sm:w-11/12 md:w-1/2 bg-light-cream rounded-b-md md:rounded-none md:rounded-r-md shadow"
        style={{
          height: MOBILEDEVICE.matches ? "auto" : bounds.height,
        }}
      >
        <h2 ref={tRef} className="py-2 font-bold text-md text-light-brown">
          {title}
        </h2>

        <animated.p
          className=" overflow-hidden text-slate-700"
          style={{
            maxHeight: heightStyle.maxHeight,
            lineHeight: "24px",
          }}
          ref={(el) => {
            _ref.current = el;
            if (el && el?.scrollHeight > bounds.height - OFFSET) {
              setIsOverflow(true);
            } else {
              setIsOverflow(false);
            }
          }}
        >
          {explanation}
        </animated.p>
        {isOverFlow && !MOBILEDEVICE.matches && (
          <Link
            to={`/read-more/${date}`}
            state={{ backgroundLocation: location }}
            aria-hidden
            className="text-sm text-slate-500"
          >
            Read More
          </Link>
        )}
        {isOverFlow && MOBILEDEVICE.matches && (
          <button
            onClick={handleOnReadMore}
            className="text-sm text-slate-500"
            aria-hidden
          >
            {!readMore ? "Read More" : "Show Less"}
          </button>
        )}
        <ul className="flex justify-between items-center">
          <li>
            <Heart isLiked={liked} onClick={onClick} />
          </li>
          <li>
            <time className="text-sm text-slate-500 py-2">
              {moment(date).format("MMMM Do YYYY")}
            </time>
          </li>
        </ul>
      </section>
    </article>
  );
}
