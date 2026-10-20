import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const sans = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const description =
  'Oyshi Tabassum Aditi trains machine learning and NLP models and explains how they decide. MEng in Software Engineering at Memorial University of Newfoundland. Co-author of a 2024 paper on explainable seizure prediction from EEG.';
const title = 'Oyshi Tabassum Aditi · Machine learning engineer';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://oyshitabassum.github.io'),
  alternates: { canonical: '/' },
  authors: [{ name: 'Oyshi Tabassum Aditi', url: 'https://oyshitabassum.github.io/' }],
  openGraph: {
    title,
    description,
    url: 'https://oyshitabassum.github.io/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f5f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0f15' },
  ],
};

const themeInit = `(function(){try{var t=null;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oyshi Tabassum Aditi',
  alternateName: 'Oyshi Tabassum',
  email: 'mailto:oyshitabassum113@gmail.com',
  url: 'https://oyshitabassum.github.io/',
  jobTitle: 'Machine learning engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'TechAByte Solutions',
  },
  sameAs: ['https://github.com/oyshitabassum', 'https://www.linkedin.com/in/oyshitabassum-aditi'],
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'Memorial University of Newfoundland',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Daffodil International University',
  },
  knowsAbout: [
    'Machine learning',
    'Deep learning',
    'Natural language processing',
    'Computer vision',
    'Explainable AI',
    'Python',
    'C++',
    'Java',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
