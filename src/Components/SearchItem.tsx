import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useMovieStore } from "../store";

export default function SearchItem() {
  const fetchMovies = useMovieStore((state) => state.fetchMovies);

  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") {
      return
    } else {
      fetchMovies(search);
    }
  };
  return (
    <form className="max-w-5xl mx-auto mt-8" onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        className="block mb-2.5 text-sm font-medium text-heading sr-only "
      >
        Search
      </label>
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

        <input
          type="search"
          id="search"
          placeholder="Buscar película..."
          className="w-full rounded-lg bg-neutral-800 border border-gray-600 py-3 pl-10 pr-24 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={search}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
