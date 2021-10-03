import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/movies-api';
import MoviesList from '../MoviesList';

export default function TrendMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return <MoviesList movies={movies} />;
}
