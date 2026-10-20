import { profile } from '@/data/profile';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.band} id="contact" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title" className={styles.title}>
          Working on a model that has to explain itself? Let&apos;s talk.
        </h2>
        <p className={styles.note}>Email is fastest. I&apos;m in {profile.location}.</p>
      </div>
      <div className={styles.actions}>
        <a className={styles.email} href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className={styles.link} href={profile.linkedin} rel="me">
          LinkedIn
        </a>
        <a className={styles.link} href={profile.github} rel="me">
          GitHub
        </a>
      </div>
    </section>
  );
}
