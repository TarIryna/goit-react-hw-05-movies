import { Link } from 'react-router-dom';
import s from './MovieItem.module.css';

export default function MovieItem({ id, name }) {
  return (
    <>
      <li key={id} className={s.movieItem}>
        <Link to={`/movies/${id}`}>{name}</Link>
      </li>
    </>
  );
}
