import { useParams } from 'react-router-dom';
import Title2 from '../Title2';

export default function Reviews({ reviews }) {
  return (
    <>
      <Title2 text="Reviews" />
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </>
  );
}
