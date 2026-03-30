<div align="center">

# Sudharsan R V — Portfolio

**Aspiring Data Analyst · Python Enthusiast · ML Explorer**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://project1-e7cl6c0l1-sudharsansus8-7724s-projects.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

A premium, cinematic portfolio website inspired by [sav1n.com](https://sav1n.com), built with React 19 and Vite 8. Features a 3D hero background, floating pill navbar, full-height project showcase cards, scroll animations, custom cursor, marquee ticker, live clock footer, and large pill contact buttons.

</div>

---

## 📸 Preview

| Section | Description |
|---|---|
| **Hero** | 3D cyborg background · slide-up headline · typing role · availability badge |
| **Projects** | Full-height dark cards with mockup + project info side by side |
| **About** | 2-column grid: bio + stat boxes on left, skill rows on right |
| **Experience** | Period/role timeline rows |
| **Contact** | Large pill buttons for Email, GitHub, LinkedIn |
| **Footer** | Dark bar with live local clock |

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI framework |
| [Vite](https://vitejs.dev) | 8 | Build tool & dev server |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Icon library |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animation library |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Primary font (Google Fonts) |

---

## 📁 Project Structure

```
project1/
├── public/
│   ├── hero-bg.png          # 3D hero background image
│   └── hero-video.mp4       # (optional) background video
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Floating pill navbar
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── Projects.jsx     # Full-height project showcase cards
│   │   ├── About.jsx        # Bio, stats, skill rows
│   │   ├── Experience.jsx   # Career timeline
│   │   ├── Contact.jsx      # Pill contact buttons
│   │   ├── Footer.jsx       # Dark footer with live clock
│   │   ├── Cursor.jsx       # Custom cursor (dot + lagging ring)
│   │   ├── OrbitalBackground.jsx  # Canvas orbital animation
│   │   └── ScrollCube.jsx   # Scroll-based 3D cube animation
│   ├── App.jsx              # Root component, reveal-on-scroll observer
│   ├── App.css              # All component styles
│   ├── index.css            # Global styles, design tokens, cursor
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sudharsan2006/portfolio.git
cd portfolio/project1

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173/** in your browser.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server (hot reload) |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#ebebeb` | Page background (light gray) |
| `--bg-dark` | `#111111` | Footer, dark sections |
| `--text` | `#111111` | Primary text |
| `--text-muted` | `#888888` | Labels, secondary text |
| `--pill-bg` | `rgba(20,20,20,0.92)` | Floating navbar background |
| `--border` | `rgba(0,0,0,0.1)` | Dividers and card borders |

### Typography

- **Font**: [Inter](https://fonts.google.com/specimen/Inter) — weights 300, 400, 500, 700, 800, 900
- **Display headings**: `clamp()` fluid sizing, weight 800, letter-spacing `-3px` to `-4px`
- **Italic accent**: weight 300 italic for "Real outcomes." style emphasis

### Key UI Patterns

- **Pill Navbar** — `border-radius: 60px`, dark frosted glass, centered fixed position
- **Reveal Animation** — `.reveal` class + `IntersectionObserver` → adds `.visible` on scroll
- **Custom Cursor** — dot (8px) + lagging ring (32px) that follows with lerp
- **Marquee Strip** — infinite scrolling ticker between Hero and Projects
- **Contact Pills** — full-width `border-radius: 80px` link buttons that invert on hover
- **Live Clock** — `setInterval` updating every second in the Footer

---

## 🧩 Component Guide

### `<Navbar />`
Floating dark pill navbar, centered at top using `left: 50%; transform: translateX(-50%)`. Contains logo, nav links, and "Let's Talk" CTA. Smooth scrolls to sections on click.

### `<Hero />`
Full-viewport section with a fixed 3D background image (`/hero-bg.png`). Features:
- Slide-up headline animation (CSS `translateY` keyframe)
- Typewriter role (`useState` loop over roles array)
- Availability badge with pulsing green dot
- "View my work" + "Let's talk" CTA buttons
- "SCROLL" indicator bottom-right

### `<Projects />`
Each project renders as a **full-height viewport card** (`100vh`) with:
- Gradient colour background unique per project
- Left: mockup card with icon, title, desc, tags
- Right: project number, name, description, tags, GitHub link
- Subtle scale-up on hover via CSS

### `<About />`
Two-column grid:
- Left: label, heading, 3-paragraph bio, 4 stat boxes (10+ projects, 3+ years, 5+ techs, ∞ curiosity)
- Right: list of 11 skills with icon + category tag

### `<Experience />`
Timeline using `grid-template-columns: 160px 1fr` — period on left, role/company/desc/tags on right. Hover shifts content slightly right.

### `<Contact />`
Pill-shaped link buttons centered on white background. Hover inverts colors (white → black background, black → white text).

### `<Footer />`
Dark bar with three columns: copyright, social links, live local time updated every second with `setInterval`.

### `<Cursor />`
Custom cursor using `requestAnimationFrame` for smooth ring lag. Detects hover on `<a>` and `<button>` to expand the ring.

---

## 🌐 Deployment

The project is deployed on **Vercel**.

### Deploy Your Own

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod --yes
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 📬 Contact

| Platform | Link |
|---|---|
| **Email** | [usdharsansus8@gmail.com](mailto:usdharsansus8@gmail.com) |
| **GitHub** | [@Sudharsan2006](https://github.com/Sudharsan2006) |
| **LinkedIn** | [sudharsan-r-v-298549292](https://www.linkedin.com/in/sudharsan-r-v-298549292/) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by Sudharsan R V**

*Inspired by the design aesthetics of [sav1n.com](https://sav1n.com)*

</div>
