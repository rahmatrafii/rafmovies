import { getMovies } from "@/utils";
import MovieCard from "./MovieCard";

const MovieSearchContainer = (data: any) => {
  return (
    <div>
      <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
        {Object.keys(data).length > 0 &&
          data.map((movie: any, index: number) => (
            <MovieCard
              movie={movie}
              key={index}
              styles="w-[140px] sm:w-[170px] md:-[140px] lg:w-[200px]"
            />
          ))}
      </div>
    </div>
  );
};
export default MovieSearchContainer;
