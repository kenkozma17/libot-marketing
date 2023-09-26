export default function Features(props) {
  return (
    <div className={`${props.className}`}>
      <ul className="space-y-5">{props.children}</ul>
    </div>
  );
}
