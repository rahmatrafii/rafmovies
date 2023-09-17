import Link from "next/link";
import React from "react";
import SlideMovies from "./SlideMovies";
import { getPopular } from "@/utils";
const PopularMovies = async () => {
  const res = await getPopular();
  const movies = res.results;
  const topFive = movies
    .filter((movie: any) => movie.backdrop_path !== null)
    .slice(5, 10);
  return (
    <section className=" ">
      <div className=" mx-auto px-4">
        <div>
          <div className="sm:text-xl md:text-2xl border-l-2 border-white pl-3  text-base  my-4 whitespace-nowrap text-white flex items-center justify-between">
            Popular Movies
            <Link href={"/movies/popular"} className="text-xs text-color3 ">
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
export default PopularMovies;
