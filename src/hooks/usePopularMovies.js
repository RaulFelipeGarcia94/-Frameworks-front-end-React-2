import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.service";

export function usePopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return movies;
}
