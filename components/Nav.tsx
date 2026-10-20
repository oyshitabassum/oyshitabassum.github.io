import { profile } from '@/data/profile';
import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

const links = [
  { href: '#research', label: 'Research' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className={styles.bar}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.brand} href="#top">
          {profile.shortName}
        </a>
        <nav className={styles.links} aria-label="Sections">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle className={styles.toggle} />
          <a className="btn" href={profile.linkedin} rel="me">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
