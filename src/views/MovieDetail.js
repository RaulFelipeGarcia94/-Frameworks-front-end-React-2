import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

export function MovieDetail() {
  const { id } = useParams();
  const movie = useMovieDetail(id);
  console.log("movie :", movie);
  return (
    <section>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
      </div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </section>
  );
}
