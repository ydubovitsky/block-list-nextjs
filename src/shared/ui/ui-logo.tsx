type UILogoProps = {
  className?: string;
};

export function UILogo({ className }: UILogoProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 48 48"
    >
      <g fill="none" stroke-linejoin="round" stroke-width="4">
        <path
          fill="#2F88FF"
          stroke="#000"
          d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z"
        />
        <path stroke="#fff" stroke-linecap="round" d="M15 23L22 30L34 18" />
      </g>
    </svg>
  );
}
