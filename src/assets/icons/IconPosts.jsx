import React from "react";

function IconPosts({ size = 24, className, color = "#ffffffff" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 18"
       style={{ color }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2222 18H1.77778C1.28889 18 0.870518 17.8043 0.522667 17.413C0.174815 17.0217 0.000592593 16.5507 0 16V2C0 1.45 0.174222 0.979333 0.522667 0.588C0.871111 0.196667 1.28948 0.000666667 1.77778 0H14.2222C14.7111 0 15.1298 0.196 15.4782 0.588C15.8267 0.98 16.0006 1.45067 16 2V16C16 16.55 15.8261 17.021 15.4782 17.413C15.1304 17.805 14.7117 18.0007 14.2222 18ZM2.66667 11H13.3333V9H2.66667V11ZM2.66667 14H13.3333V12.5H2.66667V14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconPosts;
