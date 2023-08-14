import MovieCard from "@/components/MovieCard";
import NavSearch from "@/components/NavSearch";
import { ListMoviesComedy } from "@/constants";
import { getMovies } from "@/utils";

const ComedyPage = () => {
  return (
    <section className="md:ml-[195px] pb-20">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
          {ListMoviesComedy.map((movie: any, index: number) => (
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
export default ComedyPage;
