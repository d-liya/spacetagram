import LoadingSVG from "./LoadingSVG";
import { useTransition, animated } from "@react-spring/web";
export default function Loader({
  text,
  isLoading,
}: {
  text: string;
  isLoading: boolean;
}) {
  const transition = useTransition(isLoading, {
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50px,0)" },
  });

  return transition((style, item) =>
    item ? (
      <animated.div style={style} className="text-center p-5 mx-5">
        <LoadingSVG />
        <p className="font-medium text-green-100 -mt-4">{text}</p>
      </animated.div>
    ) : null
  );
}
