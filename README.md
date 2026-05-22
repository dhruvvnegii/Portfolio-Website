 Dhruv Negi — Portfolio
Personal portfolio website built with React + Tailwind CSS.
---
## Features
- **Typing Effect** — Cycles through "Software Developer", "React Specialist", "UI/UX Craftsman" with a blinking cursor
- **Scroll Animations** — Custom `IntersectionObserver`-based reveal hook with staggered delays
- **Project Filtering** — Category-based filter system (All / React & Appwrite / HTML & CSS)
- **Contact Form** — Functional form with EmailJS integration, floating labels, and toast notifications
- **Interactive Navbar** — Scroll-aware glassmorphism, active section tracking, scroll progress bar, mobile drawer
- **Glassmorphism Design** — Consistent translucent card UI with backdrop blur and gradient accents
- **Responsive** — Mobile-first layouts using Tailwind responsive prefixes
- **Dark Theme** — Cosmic dark palette (`#030712`) with indigo/purple/teal gradients
## Tech Stack
| Frontend | Build | Styling | Integration |
|---|---|---|---|
| React 18 | Vite 5 | Tailwind CSS 3 | EmailJS |
| react-icons | ESBuild | PostCSS | Google Fonts |
## Project Structure
```
src/
├── assets/               # Images, resume PDF
├── components/
│   ├── Navbar.jsx        # Fixed nav with scroll tracking & progress bar
│   ├── Hero.jsx          # Landing section with typing effect
│   ├── About.jsx         # Bio, photo, and technical skills dashboard
│   ├── Projects.jsx      # Filterable project cards
│   ├── Contact.jsx       # EmailJS contact form with floating labels
│   └── Footer.jsx        # Social links, copyright, back-to-top
├── hooks/
│   └── useScrollReveal.js    # IntersectionObserver + MutationObserver
├── App.jsx               # Root component
├── index.css             # Tailwind directives + custom styles
└── main.jsx              # React entry point
```
## Getting Started
```bash
npm install
npm run dev
npm run build
npm run preview
```
## Contact
Built by **Dhruv Negi** — [honey.dhruv55@gmail.com](mailto:honey.dhruv55@gmail.com)
[GitHub](https://github.com/dhruvvnegii) · [LinkedIn](https://linkedin.com/in/dhruv-negi-b74371207) · [X (Twitter)](https://x.com/dhruvnegii)
