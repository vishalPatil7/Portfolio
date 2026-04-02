export default function BackgroundLines() {
  return (
    <>
      {/* Diagonal SVG lines background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="diagonal-lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="white"
              strokeWidth="1"
              opacity="0.04"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
      </svg>
    </>
  );
}
