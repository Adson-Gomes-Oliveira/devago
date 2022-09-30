import AboutMe from '../components/articles/AboutMe';
import Header from '../components/articles/Header';
import './style.articles.css';

export default function Articles(): JSX.Element {
  return (
    <section className="articles">
      <AboutMe />
    </section>
  );
}