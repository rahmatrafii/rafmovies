import ActionsMovies from "@/components/ActionMovies";
import AdventureMovies from "@/components/AdventureMovies";
import ComedyMovies from "@/components/ComedyMovies";
import DramaMovies from "@/components/DramaMovies";
import HorrorMovies from "@/components/HorrorMovies";
import NavSearch from "@/components/NavSearch";
import RomanceMovies from "@/components/RomanceMovies";

const Movie = async () => {
  return (
    <section className="md:ml-[195px] pb-20">
      <div className="container px-4 mx-auto">
        <div>
          <NavSearch />
        </div>
        <ActionsMovies />
        <RomanceMovies />
        <AdventureMovies />
        <ComedyMovies />
        <DramaMovies />
        <HorrorMovies />
      </div>
    </section>
  );
};
export default Movie;
