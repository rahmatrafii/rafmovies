import MovieCard from "@/components/MovieCard";
import NavSearch from "@/components/NavSearch";
import { ListMoviesActions } from "@/constants";

const ActionsPage = () => {
  return (
    <section className="md:ml-[195px] pb-20">
      <div className="container mx-auto px-4">
        <NavSearch />
        <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
          {ListMoviesActions.map(
            (movie: any, index: number) =>
              movie.backdrop_path !== null && (
                <MovieCard
                  movie={movie}
                  key={index}
                  styles=" w-[140px] sm:w-[170px] md:-[140px] lg:w-[200px]"
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};
export default ActionsPage;
