import axios from 'axios';

const API_KEY = '3f1bec62b0dc550283dc0277aaebd473';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  adult: false,
  language: 'en-US',
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day`);
  return data.results;
};

export async function fetchMovieDetails(id) {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
}
export async function fetchMovieCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`);
  console.log(data.cast);
  return data.cast;
}
export async function fetchMovieReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  console.log(data.results);
  return data.results;
}
export async function fetchSearch(query) {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data.results;
}
