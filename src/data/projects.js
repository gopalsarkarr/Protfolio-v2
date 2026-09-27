/**
 * Projects Data
 * 
 * To add a new project, simply copy an object below and append it to this array.
 * The UI will automatically render it using the reusable ProjectCard component!
 */
export const projectsData = [
  {
    id: 'offline-upi-mesh',
    title: 'Offline UPI Mesh Protocol',
    subtitle: 'Internet-Independent Digital Payments',
    year: '2026',
    featured: true,
    highlight: true,
    tagline: 'Zero-connectivity P2P payment protocol via Bluetooth Low Energy (BLE) gossip and deferred settlement',
    technologies: [
      'Node.js',
      'Express',
      'React',
      'Tailwind CSS',
      'PostgreSQL (Supabase)',
      'RSA-2048',
      'AES-256-GCM',
      'BLE Mesh',
      'Git',
      'Vercel',
      'Render'
    ],
    description: [
      'Architected an offline P2P payment protocol enabling zero-connectivity UPI transactions across cellular dead zones (subways, basements) via Bluetooth Low Energy (BLE) gossip and deferred settlement.',
      'Engineered a Zero-Trust Hybrid Cryptography engine combining RSA-2048 OAEP and AES-256-GCM with 16-byte authenticated tags, guaranteeing tamper-proof transit across untrusted intermediary mobile nodes.',
      'Eliminated Double-Spending & Duplicate-Storm risks under concurrent multi-bridge uploads by designing an Atomic SHA-256 Idempotency Cache (similar to Redis SET NX EX 86400), safely dropping 100% of redundant packets.',
      'Built an ACID-compliant transactional settlement ledger with optimistic concurrency versioning, ensuring accurate account debits/credits with automated persistence to Cloud PostgreSQL (Supabase).',
      'Developed a responsive fintech UI in React & Tailwind CSS featuring an interactive 2D topology visualizer, step-by-step mesh injection workflows, real-time node telemetry, and react-toastify transaction alerts.'
    ],
    liveUrl: 'https://ni-upi.vercel.app/',
    githubUrl: 'https://github.com/gopalsarkarr/NI-UPI',
    deployment: 'Vercel + Render',
    inResume: true
  },
  {
    id: 'study-tracker-app',
    title: 'Study Tracker App',
    year: '2026',
    featured: false,
    highlight: false,
    tagline: 'A responsive study productivity platform with daily scheduling and analytics',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Recharts'],
    description: [
      'Architected and built a responsive study productivity platform featuring daily task scheduling, real-time focus metrics, and progress visualization.',
      'Implemented user authentication and database management utilizing Supabase, supporting persistent user accounts and a guest demo session.',
      'Integrated dynamic analytics with Recharts for velocity charts and heatmaps; deployed with CI/CD on Vercel for high responsiveness.'
    ],
    liveUrl: 'https://study-tracker-app-ruddy.vercel.app/',
    githubUrl: 'https://github.com/gopalsarkarr',
    deployment: 'Vercel',
    inResume: false
  }
];
