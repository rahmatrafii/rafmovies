export const getPopular = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = res.json();
  return data;
};

export const getDetailMovie = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = res.json();
  return data;
};

export const getMovies = async (search: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.TMDB_API_KEY}&language=en`
  );
  const data = res.json();
  return data;
};
