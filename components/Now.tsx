import { now, profile } from '@/data/profile';
import styles from './Now.module.css';

export default function Now() {
  return (
    <aside className={`card ${styles.now}`} aria-labelledby="now-title">
      <p className="eyebrow">Now</p>
      <h2 id="now-title" className={styles.title}>
        {now.title}
      </h2>
      <p className={styles.body}>{now.body}</p>
      <div className={styles.learning}>
        <p className="eyebrow">Learning</p>
        <p>{now.learning}</p>
      </div>
      <p className={styles.place}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        {profile.location}
      </p>
    </aside>
  );
}
