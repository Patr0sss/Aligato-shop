function Hamburer({ width }: { width?: string }) {
  return (
    <svg
      width={width || "60px"}
      height={width || "60px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20 7L4 7"
          stroke="#ffffff"
          strokeWidth="1.5"
          stroke-linecap="round"
        ></path>{" "}
        <path
          d="M20 12L4 12"
          stroke="#ffffff"
          strokeWidth="1.5"
          stroke-linecap="round"
        ></path>{" "}
        <path
          d="M20 17L4 17"
          stroke="#ffffff"
          strokeWidth="1.5"
          stroke-linecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export default Hamburer;
