import * as React from "react";

function SvgSmile(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={9} cy={9} r={5.679} stroke="currentColor" strokeWidth={1.5} />
      <ellipse
        cx={6.754}
        cy={7.077}
        rx={0.801}
        ry={1.122}
        fill="currentColor"
      />
      <ellipse
        cx={11.244}
        cy={7.077}
        rx={0.801}
        ry={1.122}
        fill="currentColor"
      />
      <path
        d="M11.222 9.801H6.773c-.276 0-.5.225-.455.497.175 1.077.903 2.709 2.68 2.709 1.777 0 2.504-1.632 2.68-2.709.045-.272-.18-.497-.456-.497z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSmile;
