"use client";
import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/redux/store";
import { getDetailMovie } from "@/utils";
import { useState, useEffect } from "react";
const ContentFavorite = () => {
  const [movie, setMovie] = useState<any[]>();
  const FavoriteList = useAppSelector((state) => state.FavoriteList.id);

  async function fetchData() {
    const data = await Promise.all(
      FavoriteList.map(async (item) => {
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
          Oops, there are no films that you like here
        </h1>
      )}
    </div>
  );
};
export default ContentFavorite;
