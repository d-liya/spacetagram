import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useTransition, animated, useSpring } from "@react-spring/web";

export default function Heart({
  isLiked,
  onClick,
}: {
  isLiked: boolean;
  onClick: () => void;
}) {
  const transition = useTransition(isLiked, {
    from: { opacity: 0, transform: "scale(2)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(2)" },
  });
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-light-green relative"
      aria-label="like"
      aria-pressed={isLiked}
    >
      <AiOutlineHeart size={25} />
      {transition(
        (styles, item) =>
          item && (
            <animated.div style={styles} className="absolute top-0">
              <AiFillHeart size={25} />
            </animated.div>
          )
      )}
    </button>
  );
}
