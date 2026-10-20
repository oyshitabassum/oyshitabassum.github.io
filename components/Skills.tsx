import { skills } from '@/data/profile';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={`card ${styles.skills}`} id="skills" aria-labelledby="skills-title">
      <p className="eyebrow">Skills, with evidence</p>
      <h2 id="skills-title" className={styles.title}>
        What I use, and where it shows
      </h2>
      <div className={styles.groups}>
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className={styles.group}>{group.group}</h3>
            <ul className={styles.items}>
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.evidence}>{skill.evidence}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
