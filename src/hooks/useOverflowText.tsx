import { useState } from "react";

export default function useOverflowText(ref: React.RefObject<HTMLElement>) {
  const [isOverflow, set] = useState(false);
  return [
    isOverflow,
    () => {
      if (ref.current) {
        const isOverflow =
          ref.current.offsetHeight < ref.current.scrollHeight ||
          ref.current.offsetWidth < ref.current.scrollWidth;
        set(isOverflow);
      }
    },
  ];
}
