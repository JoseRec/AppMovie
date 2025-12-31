import { create } from "zustand";
import axios from "axios";
import { z } from "zod";
import { devtools } from "zustand/middleware";

export const MovieSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  Poster: z.string(),
});

export const MoviesResponseSchema = z.object({
  Search: z.array(MovieSchema),
  totalResults: z.string(),
  Response: z.string(),
});

export const MovieDetailsSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  Released: z.string(),
  Runtime: z.string(),
  Genre: z.string(),
  Director: z.string(),
  Actors: z.string(),
  Plot: z.string(),
  Awards: z.string(),
  Poster: z.string(),
  imdbRating: z.string(),
});

export type Movie = z.infer<typeof MovieSchema>;
export type MoviesResponse = z.infer<typeof MoviesResponseSchema>;
export type MovieDetail = z.infer<typeof MovieDetailsSchema>;

type MovieState = {
  movies: Movie[];
  totalResults: string;
  loading: boolean;
  error: string | null;
  fetchMovies: (search: string) => Promise<void>;
  reset: () => void;
  movieSelected: MovieDetail | null;
  viewDetail: (imdbID: String) => Promise<void>;
};

export const useMovieStore = create<MovieState>()(
  devtools((set) => ({
    movies: [],
    totalResults: "0",
    loading: false,
    error: null,
    movieSelected: null,
    fetchMovies: async (search: string) => {
      set(() => ({
        loading: true,
        error: null,
        movies: [],
        movieSelected: null
      }));

      try {
        const ApiId = import.meta.env.VITE_API_KEY;
        const omdbURL = `https://www.omdbapi.com/?apikey=${ApiId}&s=${search}`;
        const { data } = await axios(omdbURL);
        const result = MoviesResponseSchema.safeParse(data);

        if (!result.success) {
          set(() => ({
            error: "No se encontraron peliculas",
            movies: [],
          }));
          return;
        }
        set(() => ({
          movies: result.data?.Search,
          totalResults: result.data?.totalResults,
        }));
      } catch (error) {
        set(() => ({
          error: "Error",
        }));
      } finally {
        set(() => ({
          loading: false,
        }));
      }
    },
    viewDetail: async (imdbID: string) => {
      set(() => ({
        loading: true,
        error: null,
        movieSelected: null,
      }));
      try {
        const ApiId = import.meta.env.VITE_API_KEY;
        const omdbURL = `https://www.omdbapi.com/?apikey=${ApiId}&i=${imdbID}`;
        const { data } = await axios(omdbURL);
        const result = MovieDetailsSchema.safeParse(data);

        if (!result.success) {
          set(() => ({
            error: "No se encontro la pelicula",
            movies: [],
          }));
          return;
        }
        set(() => ({
          movieSelected: result.data,
          movies: []
        }));
      } catch (error) {
        set(() => ({
          error: "Error",
        }));
      } finally {
        set(() => ({
          loading: false,
        }));
      }
    },
    reset: () => {
      set({
        movies: [],
        error: null,
        loading: false,
        totalResults: "0",
        movieSelected: null
      });
    },
  }))
);
