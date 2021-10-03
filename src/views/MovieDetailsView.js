import { Route, useParams, useRouteMatch, NavLink, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails, fetchMovieCast, fetchMovieReviews } from '../services/movies-api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieDetails from '../components/MovieDetails';
import s from './Views.module.css';

export default function MovieDetailsView() {
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  const { movieId } = params;
  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
    fetchMovieCast(movieId)
      .then(setCast)
      .catch(error => console.log(error));
    fetchMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetails movie={movie} />}
      <nav>
        <NavLink className={s.link} to={`${url}/cast`}>
          Cast
        </NavLink>
        <NavLink className={s.link} to={`${url}/reviews`}>
          Reviews
        </NavLink>
      </nav>
      <hr />
      <Switch>
        <Route path={`${path}/cast`}>{cast && <Cast cast={cast} />}</Route>
        <Route path={`${path}/reviews`}>{reviews && <Reviews reviews={reviews} />}</Route>
      </Switch>
    </>
  );
}
