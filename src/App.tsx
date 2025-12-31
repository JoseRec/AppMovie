import MovieList from "./Components/MovieList";
import SearchItem from "./Components/SearchItem";
import { useMovieStore } from "./store";
import Spinner from "./Components/Spinner/Spinner";
import Error from "./Components/Error";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import MovieDetail from "./Components/MovieDetail";

export default function App() {
  const movies = useMovieStore((state) => state.movies);
  const loading = useMovieStore((state) => state.loading);
  const error = useMovieStore((state) => state.error);
  const reset = useMovieStore((state) => state.reset);
  const movieSelected = useMovieStore((state) => state.movieSelected);

  const hasMovies = movies.length > 0;
  const hasDetail = !!movieSelected;
  const showIntro = !hasMovies && !hasDetail;
  const showBackButton = hasMovies || hasDetail;

  return (
    <div className="bg-linear-to-b from-neutral-950 to-indigo-950 min-h-screen overflow-hidden relative space-y-5">
      <header className="relative z-10 shadow-md">
        <div className="max-w-7xl mx-auto pt-6 pb-4 flex flex-col border-b border-gray-500 pl-6">
          <h1 className="text-3xl font-black text-white">
            Encuentra tus pelis favoritas!
          </h1>

          <p className="text-gray-300 text-sm mt-1">
            Busca películas por nombre y descubre sus detalles
          </p>
        </div>
      </header>

      <section className="max-w-7xl mb-10 mx-auto px-4">
        {showBackButton && (
          <button
            onClick={reset}
            className="mb-4 text-sm text-indigo-300 hover:text-indigo-400 transition"
          >
            ← Volver al inicio
          </button>
        )}
        <SearchItem />
        {movieSelected && <MovieDetail movie={movieSelected} />}
        {loading && (
          <>
            <div className="grow flex items-center justify-center py-20">
              <Spinner />
            </div>
          </>
        )}
        {error && (
          <>
            <Error>{error}</Error>
          </>
        )}
        {hasMovies && <MovieList />}
        {showIntro && (
          <div className="flex flex-col items-center justify-center py-16 px-4 space-y-4">
            <VideoCameraIcon className="h-10 w-10 text-white" />
            <h3 className="text-2xl font-bold text-white">
              Encuentra las mejores películas
            </h3>
          </div>
          
        )}
      </section>
    </div>
  );
}
