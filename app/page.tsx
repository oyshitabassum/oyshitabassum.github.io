import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import HowIBuild from '@/components/HowIBuild';
import Nav from '@/components/Nav';
import Now from '@/components/Now';
import Research from '@/components/Research';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import { profile } from '@/data/profile';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className={`wrap ${styles.grid}`}>
        <div className={styles.full}>
          <Hero />
        </div>
        <div className={styles.wide}>
          <Research />
        </div>
        <div className={styles.narrow}>
          <Now />
        </div>
        <div className={styles.full}>
          <Timeline />
        </div>
        <div className={styles.wideish}>
          <Skills />
        </div>
        <div className={styles.narrowish}>
          <HowIBuild />
        </div>
        <div className={styles.full}>
          <Contact />
        </div>
      </main>
      <footer className={`wrap ${styles.footer}`}>
        <p>
          For agents: <a href="/llms.txt">llms.txt</a>
        </p>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
