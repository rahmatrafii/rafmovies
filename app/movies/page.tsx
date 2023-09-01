import ActionsMovies from "@/components/ActionMovies";
import AdventureMovies from "@/components/AdventureMovies";
import ComedyMovies from "@/components/ComedyMovies";
import DramaMovies from "@/components/DramaMovies";
import HorrorMovies from "@/components/HorrorMovies";
import NavSearch from "@/components/NavSearch";
import PopularMovies from "@/components/PopularMovies";
import RomanceMovies from "@/components/RomanceMovies";
export const metadata = {
  title: "Movies",
};
const Movie = async () => {
  return (
    <section className="pb-20 md:ml-[70px] pt-8">
      <div className="container px-4 mx-auto">
        <PopularMovies />
        <RomanceMovies />
        <ActionsMovies />
        <AdventureMovies />
        <ComedyMovies />
        <DramaMovies />
        <HorrorMovies />
      </div>
    </section>
  );
};
export default Movie;
