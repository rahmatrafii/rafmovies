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

  return (
    <Link
      href={href}
      className={`${
        path === `${href}` ? "text-color2" : "text-slate-300"
      }  md:hover:bg-color3 transition duration-300 py-3 px-3 rounded-sm hover:bg-opacity-60 flex  items-center `}
    >
      {icon}
      <span className="navTitle">{title}</span>
    </Link>
  );
};
export default NavLink;
