const Dot = ({ color, size }: { color: string; size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 8 9"
    fill="none"
  >
    <circle cx="4" cy="4.68848" r="4" fill={color} />
  </svg>
);

export default Dot;
