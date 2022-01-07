import moment from "moment";
import useMeasure from "react-use-measure";
import { ApiDataType } from "../constants/types";
import { calculateHeight } from "../helpers/methods";
import Heart from "./Heart";

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

  return (
    <section className="m-5 mx-8 flex justify-center max-w-5xl flex-col  md:flex-row ">
      <div className=" max-w-xl md:w-1/2 bg-dark-green flex items-center ">
        <img ref={ref} src={url} alt={title} />
      </div>
      <div
        className="p-5 max-w-xl md:w-1/2 bg-white"
        style={{
          height: bounds.height,
        }}
      >
        <h2 className="py-2 font-bold text-md text-light-green">{title}</h2>

        <p
          className="text-ellipsis overflow-hidden"
          style={{
            maxHeight: calculateHeight(bounds.height - 120, 24),
            lineHeight: "24px",
          }}
        >
          {explanation}
        </p>
        <div className="flex justify-between items-center">
          <Heart isLiked={liked} onClick={onClick} />
          <p className="text-sm text-slate-500 py-2">
            {moment(date).format("MMMM Do YYYY")}
          </p>
        </div>
      </div>
    </section>
  );
}
