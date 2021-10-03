import React from 'react';
import s from './MovieDetails.module.css';

export default function MovieDetails({ movie }) {
  return (
    <div className={s.card}>
      <img
        className={s.img}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.name ?? movie.title}
      />

      <div className={s.info}>
        <h2>
          {movie.title ?? movie.name} ({movie.release_date.slice(0, 4)})
        </h2>
        <p>User score : {movie.popularity}</p>
        <b>Overview</b>
        <p>{movie.overview}</p>
        <b>Genres:</b>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
