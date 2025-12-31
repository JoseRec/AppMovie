import type { MovieDetail } from "../store";

type MovieDetailProps = {
  movie: MovieDetail;
};

export default function MovieDetail({ movie }: MovieDetailProps) {
  return (
    <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl mt-10 shadow-xl overflow-hidden grid md:grid-cols-[300px_1fr]">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
        }
        alt={movie.Title}
        className="w-full h-full object-cover"
      />
      <div className="p-6 text-white space-y-4">
        <div>
          <h2 className="text-3xl font-black">{movie.Title}</h2>
          <p className="text-gray-300 text-sm">
            {movie.Year} • {movie.Runtime}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <p>
            <span className="font-semibold text-indigo-300">Género:</span>{" "}
            {movie.Genre}
          </p>
          <p>
            <span className="font-semibold text-indigo-300">Director:</span>{" "}
            {movie.Director}
          </p>
          <p>
            <span className="font-semibold text-indigo-300">Actores:</span>{" "}
            {movie.Actors}
          </p>
          <p>
            <span className="font-semibold text-indigo-300">IMDB:</span>{" "}
            {movie.imdbRating}
          </p>
        </div>

        <p className="text-gray-200 leading-relaxed">
          {movie.Plot}
        </p>

        <div className="border-t border-white/20 pt-4 text-sm text-gray-300">
          <p>
            <span className="font-semibold">Estreno:</span> {movie.Released}
          </p>
          <p>
            <span className="font-semibold">Premios:</span> {movie.Awards}
          </p>
        </div>
      </div>
    </div>
  );
}
