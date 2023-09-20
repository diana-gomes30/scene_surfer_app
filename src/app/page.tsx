import { Movie, ResultMovies } from '@/interfaces/movies';
import MovieCard from '@components/MovieCard';
import { getTrendingMovies } from '@fetchers/movies';

export default async function Home() {
  const trendingMovies: ResultMovies = await getTrendingMovies();

  return (
    <main className="flex flex-col min-h-screen text-white">
      {trendingMovies.results.map((trendingMovie: Movie) => (
        <MovieCard key={trendingMovie.id} movie={trendingMovie} />
      ))}
    </main>
  );
}
