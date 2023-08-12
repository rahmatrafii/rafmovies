import { navigationList } from "@/constants";
import Link from "next/link";
import FooterIcon from "./FooterIcon";
const Footer = () => {
  return (
    <footer className="md:ml-[180px]  mb-[70px] md:mb-4">
      <div className="container mx-auto px-5 ">
        <div className="pt-10 border-t-2 border-slate-500 md:flex md:justify-between md:flex-1 md:items-start">
          <div className="mb-5  pr-8 py-2  w-[50%]">
            <h3 className="text-2xl text-slate-100 mb-2">RafMovies</h3>
            <p className="text-xs md:text-sm text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              deserunt voluptas officiis laboriosam, delectus dicta autem
              doloribus beatae vel suscipit ad ex tempore deleniti labore nulla
              nobis expedita libero. Eos exercitationem magnam excepturi quo
              aperiam adipisci, sunt assumenda odio nihil.
            </p>
          </div>
          <div className="mb-5  p-2  w-[20%]">
            <h3 className="text-xl text-slate-100 mb-2">Link</h3>
            <ul className="text-slate-400 text-xs md:text-sm">
              {navigationList.map((item, index) => (
                <li key={index} className="mb-1">
                  <Link
                    href={item.url}
                    className="hover:text-color3 font-normal transition w-full"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-[30%]">
            <h3 className="text-xl text-slate-100 mb-2">Follow Me</h3>
            <div className="flex gap-x-4 mt-7">
              <FooterIcon title="facebook" />
              <FooterIcon title="instagram" />
              <FooterIcon title="pinterest" />
              <FooterIcon title="youtube" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-300 text-center md:py-3 pt-4">
        Copyright 2004 - 2023{" "}
        <Link
          href={"https://rahmatrafiindrayani.vercel.app"}
          className="hover:text-color3 transition duration-300"
        >
          rahmatrafiindrayani
        </Link>
      </p>
    </footer>
  );
};
export default Footer;
