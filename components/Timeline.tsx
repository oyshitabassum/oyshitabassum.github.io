import type { CSSProperties } from 'react';
import { timeline, type Month } from '@/data/profile';
import styles from './Timeline.module.css';

// Rendered at build time, so "now" is the date of the last deploy.
function toYears(month: Month | 'now', today: Date) {
  if (month === 'now') return today.getFullYear() + today.getMonth() / 12;
  const [year, m] = month.split('-').map(Number);
  return year + (m - 1) / 12;
}

export default function Timeline() {
  const today = new Date();
  const span = timeline.to - timeline.from;
  const pct = (years: number) => ((years - timeline.from) / span) * 100;
  const years = Array.from({ length: span + 1 }, (_, i) => timeline.from + i);
  const gridStyle = { '--years': span } as CSSProperties;

  return (
    <section className={`card ${styles.timeline}`} id="work" aria-labelledby="work-title">
      <div className={styles.head}>
        <div>
          <p className="eyebrow">Work and study, to scale</p>
          <h2 id="work-title" className={styles.title}>
            Four years of models, one new degree
          </h2>
        </div>
        <ul className={styles.legend}>
          <li data-kind="work">Work</li>
          <li data-kind="study">Study</li>
          <li data-kind="mark">Paper</li>
        </ul>
      </div>

      <ol className={styles.rows}>
        {timeline.spans.map((item) => {
          const start = pct(toYears(item.from, today));
          const end = pct(toYears(item.to, today));
          return (
            <li key={item.role} className={styles.row}>
              <div className={styles.who}>
                <h3>{item.org}</h3>
                <p>{item.role}</p>
                <p className={styles.when}>
                  {item.when}, {item.place}
                </p>
              </div>
              <div className={styles.lane}>
                <div className={styles.track} style={gridStyle}>
                  <span
                    className={styles.bar}
                    data-kind={item.kind}
                    data-ongoing={item.to === 'now' || undefined}
                    style={{ left: `${start}%`, width: `${Math.max(end - start, 1.5)}%` }}
                  />
                </div>
                {item.notes.length > 0 && (
                  <ul className={styles.notes}>
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className={styles.axisRow} aria-hidden="true">
        <span />
        <div className={styles.axis}>
          {timeline.marks.map((mark) => (
            <span
              key={mark.label}
              className={styles.mark}
              style={{ left: `${pct(toYears(mark.at, today))}%` }}
            >
              {mark.label}
            </span>
          ))}
          {years.map((year, i) => (
            <span
              key={year}
              className={styles.year}
              data-edge={i === 0 ? 'start' : i === span ? 'end' : undefined}
              data-odd={i % 2 === 1 || undefined}
              style={{ left: `${pct(year)}%` }}
            >
              {year}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
