'use client';

import { useState } from 'react';
import { forces } from '@/data/profile';
import styles from './ForcePlot.module.css';

export default function ForcePlot() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : forces.items[active];

  return (
    <figure className={styles.plot}>
      <div className={styles.scale}>
        <span>
          <span className={styles.key}>base value</span> {forces.base}
        </span>
        <span>
          <span className={styles.key}>f(x)</span> <b>{forces.output}</b>
        </span>
      </div>
      <div className={styles.track} onMouseLeave={() => setActive(null)}>
        {forces.items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            className={styles.force}
            style={{ flexGrow: item.weight, animationDelay: `${i * 90}ms` }}
            data-active={active === i || undefined}
            aria-describedby="force-detail"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            onClick={() => setActive(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <figcaption id="force-detail" className={styles.detail} aria-live="polite">
        {current ? (
          <>
            <b>{current.label}.</b> {current.detail}
          </>
        ) : (
          <>
            Read it like a SHAP force plot: each segment pushes the prediction toward{' '}
            <b>{forces.output}</b>. Hover or tap one to see what it adds.
          </>
        )}
      </figcaption>
    </figure>
  );
}
