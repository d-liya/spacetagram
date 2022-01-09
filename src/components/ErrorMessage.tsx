import { useTransition, animated } from "@react-spring/web";
import { BiErrorCircle } from "react-icons/bi";

export default function ErrorMessage({
  title,
  message,
  isError,
}: {
  title: string;
  message: string;
  isError: boolean;
}) {
  const transition = useTransition(isError, {
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50px,0)" },
    exitBeforeEnter: true,
  });
  return transition((style, item) =>
    item ? (
      <animated.div
        style={style}
        className="border-2 border-red-500 flex flex-col items-center py-2 px-10 md:px-20 rounded mx-2 sm:w-full sm:max-w-md text-red-500"
      >
        <BiErrorCircle size={30} />
        <h2 className="font-bold text-red-500 py-1">{title}</h2>
        <p className=" text-red-500 pb-1">{message}</p>
      </animated.div>
    ) : null
  );
}
