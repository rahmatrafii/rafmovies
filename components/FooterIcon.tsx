import Link from "next/link";

const FooterIcon = ({ title }: any) => {
  return (
    <Link href={"/"} className="relative group p-1">
      <p className="absolute text-xs p-1 Navbackground text-white left-1/2 -translate-x-1/2 -top-3 scale-0 opacity-0 rounded-md group-hover:-top-7 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
        {title}
      </p>
      <img src={`/logo/${title}.svg`} alt="" className="w-[25px]" />
    </Link>
  );
};

export default FooterIcon;
