import Image from "next/image";
export default function HeroContent(props) {
  return (
    <div
      className={`${props.className} grid md:grid-cols-2 grid-cols-1 md:space-y-0 space-y-10`}
    >
      <div>
        <h1>{props.heading}</h1>
        <p className="md:mt-10 mt-8 md:text-[1.75rem]">{props.blurb}</p>
        <div className="md:mt-14 mt-10">
          <a
            className="bg-libot-blue transition-all hover:bg-libot-green
             rounded-full inline-block font-semibold text-center md:w-auto w-full
              text-white md:py-[.85rem] py-[.6rem] md:px-[2rem] px-[1rem]"
            href="#"
          >
            {props.ctaBtnTxt}
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          alt="A 3d model of a small bedroom."
          src="/images/mini-room.png"
          width={500}
          height={500}
          className="md:block hidden"
        />
      </div>
    </div>
  );
}
