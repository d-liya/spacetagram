import { useTransition, animated } from "@react-spring/web";

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
    delay: 800,
  });
  return transition((style, item) =>
    item ? (
      <animated.div
        style={style}
        className="bg-red-100 text-center py-2 px-10 mx-2 sm:w-full sm:max-w-md "
      >
        <h2 className="font-bold text-red-500 pb-1">{title}</h2>
        <p className=" text-red-500 pb-1">{message}</p>
      </animated.div>
    ) : null
  );
}
