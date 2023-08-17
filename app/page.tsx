import ActionsMovies from "@/components/ActionMovies";
import ComedyMovies from "@/components/ComedyMovies";
import Hero from "@/components/Hero";
import NavSearch from "@/components/NavSearch";
import PopularMovies from "@/components/PopularMovies";
import { getPopular } from "@/utils";

export default async function Home() {
  const resPopular = await getPopular();
  const moviesPopular = resPopular.results;
  return (
    <div className="md:ml-[195px] pb-10">
      <NavSearch />
      <Hero movies={moviesPopular} />
      <PopularMovies />
      <ActionsMovies />
      <ComedyMovies />
    </div>
  );
}
