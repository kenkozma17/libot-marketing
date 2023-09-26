export default function Check(props) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0C2.685 0 0 2.685 0 6C0 9.315 2.685 12 6 12C9.315 12 12 9.315 12 6C12 2.685 9.315 0 6 0ZM9 2.67L10.08 3.75L5.25 8.58L2.67 6L3.75 4.92L5.25 6.42L9 2.67Z"
        fill={props.fill}
      />
    </svg>
  );
}
