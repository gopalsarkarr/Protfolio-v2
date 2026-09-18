# Gopal Sarkar — Personal Developer Portfolio

A modern, clean, minimal developer portfolio built with **React.js**, **Tailwind CSS**, **React Router DOM**, and **Vite**.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
Protfolio/
├── public/
│   ├── Gopal_Sarkar_Resume.pdf  # Downloadable authentic resume PDF
│   └── profile.jpg              # Profile image asset
├── src/
│   ├── assets/
│   │   └── profile.jpg          # Profile photo
│   ├── components/
│   │   ├── EducationCard.jsx    # Card & timeline entry for education
│   │   ├── Footer.jsx           # Developer footer with status & links
│   │   ├── Icons.jsx            # Clean vector SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx           # Responsive navbar with mobile drawer
│   │   ├── ProjectCard.jsx      # Reusable project showcase card
│   │   ├── ScrollToTop.jsx      # Auto-scrolls to top on page navigation
│   │   ├── SectionTitle.jsx     # Reusable coder-styled section header
│   │   ├── SkillCard.jsx        # Categorized skill badges
│   │   └── SocialLinks.jsx      # Social & contact links
│   ├── data/
│   │   ├── education.js         # Exact academic history data
│   │   ├── profile.js           # Profile metadata, bio, languages & contacts
│   │   ├── projects.js          # Project showcase data array
│   │   └── skills.js            # Technical skills categorized
│   ├── pages/
│   │   ├── Home.jsx             # Hero intro, photo, CTAs & highlights
│   │   ├── About.jsx            # Background, objective, LeetCode & languages
│   │   ├── Education.jsx        # Timeline: B.Tech (CSE), 12th & 10th
│   │   ├── Skills.jsx           # Categorized tech stack & DSA focus
│   │   ├── Projects.jsx         # Study Tracker App & modular project grid
│   │   ├── Resume.jsx           # In-browser CV preview & direct download
│   │   └── Contact.jsx          # Contact channels & interactive form
│   ├── App.jsx                  # Main router layout
│   ├── index.css                # Pure Tailwind CSS directives (no custom CSS)
│   └── main.jsx                 # Entry point with BrowserRouter
├── index.html                   # HTML template with Google Fonts (Inter & Fira Code)
├── package.json
├── tailwind.config.js           # Tailwind configuration
└── vite.config.js               # Vite configuration
```

---

## ➕ How to Add a New Project

Adding a new project is effortless. Open `src/data/projects.js` and add a new object to the `projectsData` array:

```javascript
{
  id: 'your-project-id',
  title: 'Project Name',
  year: '2026',
  featured: false,
  tagline: 'Short one-line summary',
  technologies: ['React', 'Node.js', 'Tailwind CSS'],
  description: [
    'Key architecture point or feature description.',
    'Database or authentication implementation details.',
    'Deployment and performance metrics.'
  ],
  liveUrl: 'https://your-live-demo.vercel.app/',
  githubUrl: 'https://github.com/gopalsarkarr/your-repo',
  deployment: 'Vercel'
}
```

The `ProjectCard` component will automatically format and render your new project on the **Projects** page.

---

## 🎨 Tech Stack & Styling Principles
- **React 19 / 18** + **Vite**
- **Tailwind CSS** (100% utility classes, zero custom CSS rules)
- **React Router DOM** (Multi-page SPA routing)
- **Lucide React** + Custom SVG vector icons
- **Color Palette**: Dark charcoal / navy background (`#0b0f19`), crisp slate text (`#cbd5e1`), and blue accent (`#3b82f6`).
