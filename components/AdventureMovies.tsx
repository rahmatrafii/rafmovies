import Link from "next/link";
import React from "react";
import { ListMoviesAdventure } from "@/constants/index";
import SlideMovies from "./SlideMovies";

const AdventureMovies = () => {
  const topFive = ListMoviesAdventure.filter(
    (movie) => movie.backdrop_path !== null
  ).slice(0, 5);
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div>
          <div className="sm:text-xl md:text-2xl border-l-2 border-white pl-3 text-base  my-4 whitespace-nowrap text-white flex items-center justify-between">
            Adventure
            <Link href={"/movies/adventure"} className="text-xs text-color3 ">
              Show All
            </Link>
          </div>
        </div>
        <div>
          <SlideMovies movies={topFive} />
        </div>
      </div>
    </section>
  );
};
export default AdventureMovies;
