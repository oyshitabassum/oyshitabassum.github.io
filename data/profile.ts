// Every fact on the page lives here. Components only lay it out.

export type Month = `${number}-${number}`; // "YYYY-MM"

export interface Force {
  label: string;
  detail: string;
  weight: number; // relative width in the force plot
}

export interface Span {
  org: string;
  role: string;
  kind: 'work' | 'study';
  from: Month;
  to: Month | 'now';
  when: string;
  place: string;
  notes: string[];
}

export interface Skill {
  name: string;
  evidence: string;
}

export const profile = {
  name: 'Oyshi Tabassum Aditi',
  shortName: 'Oyshi Tabassum',
  role: 'Machine learning engineer',
  hook: 'I train models, then show why they decide what they decide.',
  lede: 'Four years training and testing NLP models at TechAByte Solutions, including Parrot GPT. Co-author of a 2024 paper that explains seizure prediction from EEG with SHAP and LIME. Now doing a Master of Engineering in Software Engineering at Memorial University of Newfoundland.',
  email: 'oyshitabassum113@gmail.com',
  linkedin: 'https://www.linkedin.com/in/oyshitabassum-aditi',
  github: 'https://github.com/oyshitabassum',
  location: "St. John's, Newfoundland",
};

export const forces = {
  base: 'CS student',
  output: 'ML engineer',
  items: [
    {
      label: 'BEng CSE, Daffodil',
      detail:
        'Bachelor of Engineering in Computer Science and Engineering, Daffodil International University, Dhaka. 2018 to 2022.',
      weight: 1.15,
    },
    {
      label: 'NLP intern',
      detail:
        'Software engineer intern at TechAByte Solutions, March to July 2022: natural language processing, database design, and R&D.',
      weight: 0.9,
    },
    {
      label: 'Parrot GPT',
      detail:
        'Junior Executive at TechAByte since August 2022. Trains machine learning and NLP models and measures their accuracy, and improves, tests, and debugs Parrot GPT.',
      weight: 1.7,
    },
    {
      label: 'XAI paper, 2024',
      detail:
        'Co-author at ACIT 2024. Five tree models compared on EEG; the best, extra trees, reached 99.51% accuracy and is explained with SHAP and LIME.',
      weight: 1.3,
    },
    {
      label: 'MEng, Memorial',
      detail:
        "Master of Engineering in Software Engineering at Memorial University of Newfoundland, St. John's. Started September 2026.",
      weight: 1.05,
    },
  ] satisfies Force[],
};

export const paper = {
  venue: 'ACIT 2024',
  publisher: 'IEEE',
  kind: 'Conference paper',
  title: 'Explainable AI for Epileptic Seizure Prediction: A SHAPE and LIME Approach',
  url: 'https://doi.org/10.1109/ACIT62805.2024.10877071',
  authors: [
    'Md. Simul Hasan Talukder',
    'Sohag Kumar Mondal',
    'Oyshi Tabassum Aditi',
    'Mohammad Aljaidi',
    'Rejwan Bin Sulaiman',
    'Ahmad Al-Qerem',
  ],
  problem:
    'Catching a seizure early in EEG helps people manage epilepsy, but a prediction nobody can explain is hard for a clinician to act on.',
  approach:
    'We trained five models on preprocessed EEG recordings and compared them: gradient boosting, decision trees, random forests, CatBoost, and extra trees.',
  explained:
    'SHAP and LIME show which inputs pushed the extra-trees model toward each classification.',
  result: { value: '99.51%', label: 'accuracy for extra trees, the best of the five' },
  models: ['Gradient boosting', 'Decision tree', 'Random forest', 'CatBoost', 'Extra trees'],
  best: 'Extra trees',
};

export const timeline = {
  from: 2018,
  to: 2027,
  spans: [
    {
      org: 'Memorial University of Newfoundland',
      role: 'MEng, Computer Software Engineering',
      kind: 'study',
      from: '2026-09',
      to: 'now',
      when: 'Sep 2026 – now',
      place: "St. John's",
      notes: ['Software engineering coursework and team projects.'],
    },
    {
      org: 'TechAByte Solutions',
      role: 'Junior Executive',
      kind: 'work',
      from: '2022-08',
      to: 'now',
      when: 'Aug 2022 – now',
      place: 'Dhaka',
      notes: [
        'Train machine learning and NLP models, and measure their accuracy.',
        'Improve, test, debug, and tune the performance of Parrot GPT.',
        'Design and train models for the problems the team is solving.',
      ],
    },
    {
      org: 'TechAByte Solutions',
      role: 'Software Engineer Intern',
      kind: 'work',
      from: '2022-03',
      to: '2022-07',
      when: 'Mar – Jul 2022',
      place: 'Dhaka',
      notes: ['Natural language processing, database design, and R&D.'],
    },
    {
      org: 'Daffodil International University',
      role: 'BEng, Computer Science and Engineering',
      kind: 'study',
      from: '2018-01',
      to: '2022-01',
      when: '2018 – Jan 2022',
      place: 'Dhaka',
      notes: [],
    },
  ] satisfies Span[],
  marks: [{ at: '2024-06' as Month, label: 'ACIT 2024 paper' }],
};

export const skills: { group: string; items: Skill[] }[] = [
  {
    group: 'Machine learning',
    items: [
      {
        name: 'scikit-learn, pandas, NumPy',
        evidence: 'The five-model EEG comparison in the 2024 paper',
      },
      { name: 'Training and evaluation', evidence: 'Accuracy work on TechAByte models since 2022' },
    ],
  },
  {
    group: 'Deep learning',
    items: [
      {
        name: 'TensorFlow, Keras',
        evidence: 'Image classification and disease-identification research',
      },
      { name: 'CNNs, RNNs', evidence: 'Computer vision and sequence models' },
    ],
  },
  {
    group: 'Language and explanation',
    items: [
      { name: 'NLP', evidence: 'Parrot GPT at TechAByte' },
      { name: 'SHAP, LIME', evidence: 'Explaining extra trees on EEG, ACIT 2024' },
    ],
  },
  {
    group: 'Software',
    items: [
      { name: 'Python, C++, Java', evidence: 'Python for every model on this page' },
      {
        name: 'UML, database design, Git',
        evidence: 'TechAByte internship and MEng team projects',
      },
    ],
  },
];

export const now = {
  title: 'First term at Memorial',
  body: 'Master of Engineering in Computer Software Engineering at Memorial University of Newfoundland, since September 2026.',
  learning:
    'Taking a model from a notebook into a complete application: deploying it, designing the system around it, and building it with a team on GitHub.',
};

export const howIBuild = {
  title: 'An agent drafts. I decide what stays.',
  intro:
    'I use agentic development: a coding agent works on the change with me, and I own the result.',
  steps: [
    { who: 'Agent', what: 'Helps plan the change' },
    { who: 'Agent', what: 'Drafts the implementation' },
    { who: 'Agent', what: 'Reviews the result' },
    { who: 'Me', what: 'Read the code, decide what stays, and own what gets merged' },
  ],
};
