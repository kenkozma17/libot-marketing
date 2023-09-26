import Link from "next/link";
import NavItem from "./NavItem";
export default function NavBar(props) {
  return (
    <nav
      className={`${props.navBarClasses} navbar grid grid-cols-2 max-w-[1240px] 
        mx-auto md:px-10 px-6 md:py-10 py-6 items-center h-32`}
    >
      <div>
        <Link href="/" className="font-bold text-[2.5rem]">
          libot
        </Link>
      </div>
      <div className="links flex space-x-8 justify-end">
        <NavItem href="/pricing">Pricing</NavItem>
        {/* <NavItem href="/about">About</NavItem>
        <NavItem href="/features">Features</NavItem> */}
        {/* <Link className="font-semibold uppercase" href="#">
          FAQ
        </Link> */}
      </div>
    </nav>
  );
}
