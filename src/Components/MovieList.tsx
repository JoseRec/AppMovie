import { useMovieStore } from "../store";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const movies = useMovieStore((state) => state.movies);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
