export default function NormalWrapper(props) {
  return (
    <section
      className={`${props.className} max-w-[1240px] mx-auto lg:px-20 md:px-10 px-6`}
    >
      {props.children}
    </section>
  );
}
