"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavType {
  href: string;
  title: string;
  icon: React.ReactNode;
}

const NavLink = ({ href, title, icon }: NavType) => {
  const path = usePathname();
  let pathName: string = "";
  if (path === "/") {
    pathName = "/";
  } else {
    pathName = `/${path.split("/")[1]}`;
  }
  return (
    <Link
      href={href}
      className={`${
        pathName === `${href}` ? "text-color2" : "text-slate-300"
      } bg-red-500 md:hover:bg-color3 transition duration-300 py-3 px-3 rounded-sm hover:bg-opacity-60 flex  items-center justify-center`}
    >
      {icon}
      <span className="navTitle">{title}</span>
    </Link>
  );
};
export default NavLink;
