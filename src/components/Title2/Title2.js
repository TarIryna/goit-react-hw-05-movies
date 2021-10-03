import s from './Title2.module.css';

export default function Title2({ text }) {
  return <h2 className={s.title}>{text}</h2>;
}
