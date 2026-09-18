/**
 * Projects Data
 * 
 * To add a new project, simply copy an object below and append it to this array.
 * The UI will automatically render it using the reusable ProjectCard component!
 */
export const projectsData = [
  {
    id: 'study-tracker-app',
    title: 'Study Tracker App',
    year: '2026',
    featured: true,
    tagline: 'A responsive study productivity platform with daily scheduling and analytics',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Recharts'],
    description: [
      'Architected and built a responsive study productivity platform featuring daily task scheduling, real-time focus metrics, and progress visualization.',
      'Implemented user authentication and database management utilizing Supabase, supporting persistent user accounts and a guest demo session.',
      'Integrated dynamic analytics with Recharts for velocity charts and heatmaps; deployed with CI/CD on Vercel for high responsiveness.'
    ],
    liveUrl: 'https://study-tracker-app-ruddy.vercel.app/',
    githubUrl: 'https://github.com/gopalsarkarr',
    deployment: 'Vercel'
  }
];
