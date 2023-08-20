"use client";
import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/redux/store";
import { getDetailMovie } from "@/utils";
import { useState, useEffect } from "react";
const ContentWatchList = () => {
  const [movie, setMovie] = useState<any[]>();
  const watchList = useAppSelector((state) => state.watchList.id);

  async function fetchData() {
    const data = await Promise.all(
      watchList.map(async (item) => {
        const res = await getDetailMovie(`${item}`);
        return res;
      })
    );
    setMovie(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
      {movie !== undefined &&
        movie.map(
          (movie: any, index: number) =>
            movie.backdrop_path !== null && (
              <MovieCard
                movie={movie}
                key={index}
                styles=" w-[140px] sm:w-[170px] md:-[140px] lg:w-[200px]"
              />
            )
        )}

      {movie?.length === 0 && (
        <h1 className="text-color3 md:text-lg text-sm text-center font-semibold mt-10">
          oops watch list is empty, let's find your favorite movie
        </h1>
      )}
    </div>
  );
};
export default ContentWatchList;
