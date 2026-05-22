<div align="center">
  <img src="public/favicon.svg" width="64" height="64" alt="DN Logo" />
  <h1 align="center">Dhruv Negi — Portfolio</h1>
  <p align="center">
    Personal portfolio website built with React + Tailwind CSS
    <br />
    <a href="https://dhruvvnegii.github.io/Portfolio-Website" target="_blank"><strong>View Live »</strong></a>
  </p>
</div>
<br/>
## ✨ Features
- **Typing Effect** — Cycles through "Software Developer", "React Specialist", "UI/UX Craftsman" with a blinking cursor
- **Scroll Animations** — Custom `IntersectionObserver`-based reveal hook with staggered delays
- **Project Filtering** — Category-based filter system (All / React & Appwrite / HTML & CSS)
- **Contact Form** — Functional form with EmailJS integration, floating labels, and toast notifications
- **Interactive Navbar** — Scroll-aware glassmorphism, active section tracking, scroll progress bar, mobile drawer
- **Glassmorphism Design** — Consistent translucent card UI with backdrop blur and gradient accents
- **Responsive** — Mobile-first layouts using Tailwind responsive prefixes
- **Dark Theme** — Cosmic dark palette (`#030712`) with indigo/purple/teal gradients
<br/>
## 🛠️ Tech Stack
<div align="center">
| Frontend | Build | Styling | Integration |
|---|---|---|---|
| React 18 | Vite 5 | Tailwind CSS 3 | EmailJS |
| react-icons | ESBuild | PostCSS | Google Fonts |
</div>
<br/>
## 📁 Project Structure
```
src/
├── assets/             # Images, resume PDF, favicon
├── components/
│   ├── Navbar.jsx      # Fixed nav with scroll tracking & progress bar
│   ├── Hero.jsx        # Landing section with typing effect
│   ├── About.jsx       # Bio, photo, and technical skills dashboard
│   ├── Projects.jsx    # Filterable project cards
│   ├── Contact.jsx     # EmailJS contact form with floating labels
│   └── Footer.jsx      # Social links, copyright, back-to-top
├── hooks/
│   └── useScrollReveal.js  # IntersectionObserver + MutationObserver
├── App.jsx             # Root component
├── index.css           # Tailwind directives + all custom styles
└── main.jsx            # React entry point
```
<br/>
## 🚀 Getting Started
```bash
# Install dependencies
npm install
# Start dev server
npm run dev
# Build for production
npm run build
# Preview production build
npm run preview
```
<br/>
## 📬 Contact
Built by **Dhruv Negi** — [honey.dhruv55@gmail.com](mailto:honey.dhruv55@gmail.com)
<div align="center">
  <a href="https://github.com/dhruvvnegii">GitHub</a> ·
  <a href="https://linkedin.com/in/dhruv-negi-b74371207">LinkedIn</a> ·
  <a href="https://x.com/dhruvnegii">X (Twitter)</a>
</div>
