import { profile } from '@/data/profile';
import ForcePlot from './ForcePlot';
import styles from './Hero.module.css';

export default function Hero() {
  const words = profile.name.split(' ');
  const last = words.pop();

  return (
    <section className={`card ${styles.hero}`} id="top" aria-labelledby="hero-name">
      <p className="eyebrow">
        {profile.role}, {profile.location}
      </p>
      <h1 id="hero-name" className={styles.name}>
        {words.join(' ')} <span>{last}</span>
      </h1>
      <div className={styles.intro}>
        <p className={styles.hook}>{profile.hook}</p>
        <div>
          <p className={styles.lede}>{profile.lede}</p>
          <div className={styles.ctas}>
            <a className="btn btn-primary" href="#research">
              See the research
            </a>
            <a className="btn" href={profile.github} rel="me">
              GitHub
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
      <ForcePlot />
    </section>
  );
}
