export default function Pill(props) {
  return (
    <span
      className={`${props.className} uppercase border rounded-full px-1.5 py-1/2 text-sm font-semibold`}
    >
      {props.children}
    </span>
  );
}
