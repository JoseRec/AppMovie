import { useMovieStore, type Movie } from "../store";

type MovieItemProps = {
  movie: Movie;
};

export default function MovieItem({ movie }: MovieItemProps) {
  const viewDetail = useMovieStore((state) => state.viewDetail);

  return (
    <button
      className="bg-white/10 backdrop-blur rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
      onClick={() => viewDetail(movie.imdbID)}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
        }
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4 text-white text-center">
        <h2 className="font-bold text-xl">{movie.Title}</h2>

        <p className="text-sm text-gray-300 mt-1 uppercase">
          {movie.Type} · {movie.Year}
        </p>
      </div>
    </button>
  );
}
