import React from "react";

type PlusIconProps = {
  className?: string;
};
const PlusIcon = ({ className }: PlusIconProps) => {
  return (
    <div data-svg-wrapper className="flex items-center justify-center">
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M34.176 17.1626C34.176 26.1942 26.8758 33.5126 17.8744 33.5126C8.87306 33.5126 1.57285 26.1942 1.57285 17.1626C1.57285 8.13099 8.87306 0.812598 17.8744 0.812598C26.8758 0.812598 34.176 8.13099 34.176 17.1626Z"
          stroke="#0AEB8C"
          strokeWidth="1.3"
        />
        <path
          d="M17.6255 10.1626V24.6626"
          stroke="#0AEB8C"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M24.8545 17.1626L10.3958 17.1626"
          stroke="#0AEB8C"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PlusIcon;
