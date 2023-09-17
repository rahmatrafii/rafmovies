import ActionsMovies from "@/components/ActionMovies";
import ComedyMovies from "@/components/ComedyMovies";
import Hero from "@/components/Hero";
import PopularMovies from "@/components/PopularMovies";
import { getPopular } from "@/utils";

export default async function Home() {
  const resPopular = await getPopular();
  const moviesPopular = resPopular.results;
  return (
    <div className="w-full pb-10">
      <Hero movies={moviesPopular} />
      <PopularMovies />
      <ActionsMovies />
      <ComedyMovies />
    </div>
  );
}
