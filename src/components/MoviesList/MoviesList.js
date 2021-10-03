import s from './MoviesList.module.css';
import MovieItem from '../MovieItem';

export default function MoviesList({ movies }) {
  return (
    <>
      <ul className={s.moviesList}>
        {movies.map(({ id, name, original_title }) => (
          <MovieItem key={id} id={id} name={name ?? original_title} />
        ))}
      </ul>
    </>
  );
}
