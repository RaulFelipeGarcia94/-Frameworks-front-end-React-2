import { useEffect, useState } from "react";
import { getMovieDetail } from "../services/movies.service";

export function useMovieDetail(id) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetail(id).then(({ data }) => setMovie(data));
  }, [id]);

  return movie;
}
