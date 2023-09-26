import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavItem(props) {
  const pathName = usePathname();

  const activeClasses = pathName === props.href ? "border-b" : "";
  const activeColorClasses =
    pathName === "/features" || pathName === "/" ? "border-black" : "";
  return (
    <>
      <Link
        className={`${activeClasses} ${activeColorClasses} 
        font-semibold uppercase hover:border-b transition-all`}
        href={props.href}
      >
        {props.children}
      </Link>
    </>
  );
}
