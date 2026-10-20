import { paper, profile } from '@/data/profile';
import styles from './Research.module.css';

export default function Research() {
  return (
    <article className={`card ${styles.research}`} id="research" aria-labelledby="paper-title">
      <div className={styles.head}>
        <p className="eyebrow">Research, {paper.venue}</p>
        <p className={styles.kind}>
          {paper.kind}, {paper.publisher}
        </p>
      </div>
      <h2 id="paper-title" className={styles.title}>
        {paper.title}
      </h2>
      <p className={styles.authors}>
        {paper.authors.map((author, i) => (
          <span key={author}>
            {author === profile.name ? <b>{author}</b> : author}
            {i < paper.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>

      <div className={styles.result}>
        <p className={styles.value}>{paper.result.value}</p>
        <div>
          <p className={styles.label}>{paper.result.label}</p>
          <ul className={styles.models} aria-label="Models compared">
            {paper.models.map((model) => (
              <li key={model} data-best={model === paper.best || undefined}>
                {model}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dl className={styles.case}>
        <div>
          <dt>Problem</dt>
          <dd>{paper.problem}</dd>
        </div>
        <div>
          <dt>What we did</dt>
          <dd>{paper.approach}</dd>
        </div>
        <div>
          <dt>How it explains itself</dt>
          <dd>{paper.explained}</dd>
        </div>
      </dl>

      <a className="btn btn-primary" href={paper.url}>
        Read the paper
      </a>
    </article>
  );
}
