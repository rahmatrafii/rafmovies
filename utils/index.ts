export const getPopular = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ca38b7f68b961d1bb2f1a064e3655b6d`,
      {
        cache: "no-store",
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailMovie = async (movieId: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ca38b7f68b961d1bb2f1a064e3655b6d`,
      {
        cache: "no-store",
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = async (search: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ca38b7f68b961d1bb2f1a064e3655b6d&language=en`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// import { adventurePopular } from "@/constants/index";
// async function fetchMovies(adventurePopular: any[]) {
//   const results = [];

//   for (const title of adventurePopular) {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=ede6829518609ae3c2510ae6957453ff&language=en`
//       );
//       const data = await response.json();
//       results.push(data);
//     } catch (error) {
//       console.error(`Error fetching movie ${title}:`, error);
//     }
//   }

//   return results;
// }
// (async () => {
//   const moviesData: any = await fetchMovies(adventurePopular);
//   const movies = moviesData.results;
//   console.log("Movies Data:", moviesData);
// })();
