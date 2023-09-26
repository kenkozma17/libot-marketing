export default function PriceHolder(props) {
  return (
    <div className={`${props.className} flex items-center justify-between`}>
      {props.children}
    </div>
  );
}
