import { howIBuild } from '@/data/profile';
import styles from './HowIBuild.module.css';

export default function HowIBuild() {
  return (
    <section className={`card ${styles.how}`} aria-labelledby="how-title">
      <p className="eyebrow">How I build</p>
      <h2 id="how-title" className={styles.title}>
        {howIBuild.title}
      </h2>
      <p className={styles.intro}>{howIBuild.intro}</p>
      <ol className={styles.steps}>
        {howIBuild.steps.map((step) => (
          <li key={step.what} data-who={step.who === 'Me' ? 'me' : 'agent'}>
            <span className={styles.who}>{step.who}</span>
            <span>{step.what}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
