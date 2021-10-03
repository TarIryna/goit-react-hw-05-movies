import PageHeading from '../components/PageHeading/PageHeading';
import TrendMovies from '../components/TrendMovies';

export default function HomeView() {
  return (
    <>
      <PageHeading text="Trending movies" />
      <TrendMovies />
    </>
  );
}
