import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ListMoviesDrama } from "@/constants/index";
import SlideMovies from "./SlideMovies";

const DramaMovies = () => {
  const topFive = ListMoviesDrama.filter(
    (movie) => movie.backdrop_path !== null
  ).slice(0, 5);
  return (
    <section className="pt-10 ">
      <div className="container mx-auto px-4">
        <div>
          <div className="sm:text-xl md:text-2xl border-l-2 border-white pl-3 text-base  my-4 whitespace-nowrap text-white flex items-center justify-between">
            Drama
            <Link href={"/movies/drama"} className="text-xs text-color3 ">
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
export default DramaMovies;
