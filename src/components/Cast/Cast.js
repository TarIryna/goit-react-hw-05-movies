import React from 'react';
import Title2 from '../../components/Title2';
// import s from './Cast.module.css';

export default function Cast({ cast }) {
  return (
    <>
      <Title2 text="Cast" />
      {cast.map(c => (
        <li key={c.cast_id}>
          <img alt="" src={`https://image.tmdb.org/t/p/w200${c.profile_path}`} />
          <p>{c.name}</p>
          <p>Character: {c.character}</p>
        </li>
      ))}
    </>
  );
}
