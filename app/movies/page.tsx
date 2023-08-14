import MovieCard from "@/components/MovieCard";
import NavSearch from "@/components/NavSearch";
import { getPopular } from "@/utils";

const Movie = async () => {
  const res = await getPopular();
  const movies = res.results;
  return (
    <section className="md:ml-[195px] pb-20">
      <div className="container px-4 mx-auto">
        <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
          {movies.map((movie: any, index: number) => (
            <MovieCard
              movie={movie}
              key={index}
              styles=" w-[140px] sm:w-[170px] md:-[140px] lg:w-[200px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Movie;
