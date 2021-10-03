import { useState, useEffect } from 'react';
import PageHeading from '../components/PageHeading/PageHeading';
import Form from '../components/Form';
import MoviesList from '../components/MoviesList';
import { fetchSearch } from '../services/movies-api';

export default function MoviesView() {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchSearch(filter)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [filter]);
  const onSearchBtn = query => {
    setFilter(query);
  };
  return (
    <>
      <PageHeading text="Search movies" />
      <Form onSubmit={onSearchBtn} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
