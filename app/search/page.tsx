"use client";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, SyntheticEvent } from "react";
import { getMovies, getPopular } from "@/utils";
import MovieCard from "@/components/MovieCard";
export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  async function getPopularMovies() {
    const res = await getPopular();
    setMovies(res.results);
  }
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const res = await getMovies(query);
    setMovies(res);
    setQuery("");
  }
  return (
    <section className="md:ml-[195px] pb-20">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-[40px] my-5 font-semibold sm:text-[25px] text-[20px] text-color3 text-center">
          RafMovies
        </h1>
        <form
          className="py-2 px-2 flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search your Movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="Navbackground sm:w-[300px] lg:w-[400px] xl:w-[600px] sm:px-5 px-3 py-4 h-[36px] md:h-[40px] border-none bg-slate-100 rounded-sm focus:outline-none focus:border-none shadow-lg active:outline-none active:border-none hover:shadow-color3 transition-all mr-4 text-slate-100 text-[16px]"
          />
          <button
            type="submit"
            className="Navbackground h-[36px] text-slate-100 p-4 flex justify-center items-center rounded hover:shadow-md transition duration-300 hover:shadow-color3"
          >
            <FaSearch />
          </button>
        </form>
        <div className="min-h-[70vh]">
          <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
            {Object.keys(movies).length > 0 &&
              movies.map(
                (movie: any, index: number) =>
                  movie.backdrop_path !== null && (
                    <MovieCard
                      movie={movie}
                      key={index}
                      styles="w-[140px] sm:w-[170px] md:-[140px] lg:w-[200px]"
                    />
                  )
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
