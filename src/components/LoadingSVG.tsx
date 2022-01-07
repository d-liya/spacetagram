export default function LoadingSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        display: "block",
        shapeRendering: "auto",
      }}
      width="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="#008060">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.25510204081632654s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        />
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#008060;#008060;#008060;#008060;#008060"
          begin="0s"
        />
      </circle>
      <circle cx="16" cy="50" r="10" fill="#008060">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        />
      </circle>
      <circle cx="50" cy="50" r="10" fill="#008060">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.25510204081632654s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.25510204081632654s"
        />
      </circle>
      <circle cx="84" cy="50" r="10" fill="#008060">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5102040816326531s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5102040816326531s"
        />
      </circle>
      <circle cx="16" cy="50" r="10" fill="#008060">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7653061224489796s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7653061224489796s"
        />
      </circle>
    </svg>
  );
}
