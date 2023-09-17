import MovieCard from "@/components/MovieCard";
import { getMovies, getPopular } from "@/utils";
export const metadata = {
  title: "Search",
};
export default async function Search({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  let movies;
  if (!searchParams.q) {
    const res = await getPopular();
    movies = res.results;
  } else {
    const res = await getMovies(searchParams.q);
    if (res.results.length == 0) {
      movies = "no movies";
    }
    movies = res.results;
  }
  return (
    <section className="pb-20">
      <div className="w-full mx-auto px-4">
        <div className="min-h-[70vh]">
          <div className="w-full flex flex-wrap justify-evenly items-center gap-2 pt-5">
            {movies.length > 0 &&
              movies?.map(
                (movie: any, index: number) =>
                  movie.backdrop_path !== null && (
                    <MovieCard
                      movie={movie}
                      key={index}
                      styles="w-[140px] sm:w-[170px] md:-[140px] lg:w-[200px]"
                    />
                  )
              )}

            {movies[0] === "no movies" && (
              <div>
                <h1 className="text-color3 md:text-lg text-sm text-center font-semibold mt-10">
                  Oops.. , It seems the video you&apos;re looking for isn&apos;t
                  here
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
