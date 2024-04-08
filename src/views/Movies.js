import { Link } from "react-router-dom";
import { usePopularMovies } from "../hooks/usePopularMovies";

export function Movies() {
  const movies = usePopularMovies();

  return (
    <>
      <h1>Movies Page</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt=""
              />
            </div>
            <Link to={`/movies/${movie.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
