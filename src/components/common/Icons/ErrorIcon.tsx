import React from "react";

const ErrorIcon = () => {
  return (
    <div className="w-[65px] h-[65px] relative">
      <div data-svg-wrapper className="left-[23px] top-[23px] absolute">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L21 21"
            stroke="#E81010"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div data-svg-wrapper className="left-[23px] top-[42px] absolute">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 21L21 2"
            stroke="#E81010"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-[65px] h-[65px] left-0 top-0 absolute rounded-full border-4 border-[#e81010]" />
    </div>
  );
};

export default ErrorIcon;
