import * as React from "react";

function SvgLock(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 8.357h-9c-.71 0-1.286.576-1.286 1.286v4.5c0 .71.576 1.286 1.286 1.286h9c.71 0 1.286-.576 1.286-1.286v-4.5c0-.71-.576-1.286-1.286-1.286zM5.786 8.357V5.786a3.214 3.214 0 016.428 0v2.571"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLock;
