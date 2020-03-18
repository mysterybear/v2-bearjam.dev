import React from "react";

function SvgLogo(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <circle
        cx="50"
        cy="50"
        r="45"
        strokeWidth={5}
      />
    </svg>
  );
}

export default SvgLogo;

