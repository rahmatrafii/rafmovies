export const getPopular = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=ede6829518609ae3c2510ae6957453ff`
  );
  const data = res.json();
  return data;
};

export const getDetailMovie = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=ede6829518609ae3c2510ae6957453ff`
  );
  const data = res.json();
  return data;
};

export const getMovies = async (search: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ede6829518609ae3c2510ae6957453ff&language=en`
  );
  const data = await res.json();
  return data.results;
};
