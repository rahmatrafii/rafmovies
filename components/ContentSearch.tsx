/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, SyntheticEvent } from "react";
import { getMovies, getPopular } from "@/utils";
import MovieCard from "@/components/MovieCard";
import { useSearchParams, useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const ContentSearch = () => {
  const searchParams = useSearchParams();
  const searchParamsValue = searchParams.get("search");
  const search: string = searchParamsValue !== null ? searchParamsValue : "";
  const [movies, setMovies] = useState([]);
  const [moviesExist, setMoviesExist] = useState("wait");

  useEffect(() => {
    if (search !== "") {
      getSearchParams();
    } else {
      getPopularMovies();
    }
  }, [search]);

  async function getSearchParams() {
    const res = await getMovies(search);
    if (res.results.length > 0) {
      setMovies(res.results);
      setMoviesExist("true");
    } else {
      setMoviesExist("false");
    }
  }

  async function getPopularMovies() {
    const res = await getPopular();
    setMovies(res.results);
    setMoviesExist("true");
  }

  return (
    <div className="min-h-[70vh]">
      <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
        {moviesExist === "true" &&
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

        {moviesExist === "wait" && <Loading />}

        {moviesExist === "false" && (
          <div>
            <h1 className="text-color3 md:text-lg text-sm text-center font-semibold mt-10">
              Oops.. , It seems the video you&apos;re looking for isn&apos;t
              here
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default ContentSearch;
