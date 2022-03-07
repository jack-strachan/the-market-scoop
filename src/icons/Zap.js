import * as React from "react";

function SvgZap(props) {
  return (
    <svg
      width={props.width || "1em"}
      height={props.height || "1em"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.643 2.571l-6.429 7.715H9l-.643 5.143 6.429-7.715H9l.643-5.143z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgZap;
