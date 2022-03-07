import * as React from "react";

function SvgTarget(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 20.571A8.571 8.571 0 1012 3.43a8.571 8.571 0 000 17.142z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.143a5.143 5.143 0 100-10.286 5.143 5.143 0 000 10.286z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.714a1.714 1.714 0 100-3.428 1.714 1.714 0 000 3.428z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTarget;
