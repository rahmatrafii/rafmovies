"use client";
import { ImHome } from "react-icons/im";
import { BiSolidCameraMovie } from "react-icons/bi";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavLink from "./NavLink";
import { FaSearch } from "react-icons/fa";

const DesktopNavigation = () => {
  return (
    <header className="z-[9999] group Navbackground fixed md:top-0 md:left-0  md:h-screen  md:pt-10 bottom-0 left-0  h-[60px] w-full md:w-[70px] md:hover:w-[190px] transition-all duration-300 overflow-hidden  mr-20">
      <div className=" mx-auto px-4">
        <div className="flex md:flex-col md:gap-y-5 justify-evenly items-start">
          <NavLink
            icon={<ImHome className="navIcon" />}
            href="/"
            title="Home"
          />

          <NavLink
            icon={<FaSearch className="navIcon" />}
            href="/search"
            title="Search"
          />
          <NavLink
            icon={<BiSolidCameraMovie className="navIcon" />}
            href="/movies"
            title="Movies"
          />
          <NavLink
            icon={<PlaylistPlayIcon className="navIcon" />}
            href="/watchlist"
            title="WatchList"
          />
          <NavLink
            icon={<FavoriteIcon className="navIcon" />}
            href="/favorite"
            title="Favorite"
          />
        </div>
      </div>
    </header>
  );
};
export default DesktopNavigation;
