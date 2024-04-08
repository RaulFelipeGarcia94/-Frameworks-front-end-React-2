import { moviesApi } from "../config/http";

export function getPopularMovies() {
  return moviesApi.get("movie/popular");
}

export function getMovieDetail(movieId) {
  return moviesApi.get(`movie/${movieId}`);
}
