const TMDB_API_KEY = "d1ae30f2081c3d2e4044924db00b6dfb";

const requests = {
  netflixOriginalsMovies: `discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  trendingMovies: `trending/all/week?api_key=${TMDB_API_KEY}`,
  topRatedMovies: `movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  actionMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  comedyMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  horrorMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  romanceMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  documentariesMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
};

export default requests;
