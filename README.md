# Harborline Digital

A clean, minimal, and professional front-end website for a small coastal web studio.

## Tech Stack

- **React** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router DOM** for navigation

## Design Theme

The design features a calm, modern, coastal aesthetic with:
- **Navy** (#0F2742) - Primary brand color
- **Seafoam** (#BFE6DA) - Accent color
- **Sand** (#F3EDE3) - Background accent
- **Inter** font for body text
- **Poppins** font for headings

## Project Structure

```
harborline-digital/
├── src/
│   ├── pages/
│   │   ├── Home.tsx       # Hero section with CTA buttons
│   │   ├── Work.tsx       # Portfolio showcase (placeholder)
│   │   ├── Services.tsx   # Service offerings (placeholder)
│   │   ├── About.tsx      # About page (placeholder)
│   │   └── Contact.tsx    # Contact page (placeholder)
│   ├── App.tsx            # Layout with navigation and footer
│   ├── main.tsx           # Router configuration
│   └── index.css          # Tailwind directives and global styles
├── tailwind.config.js     # Tailwind configuration with custom colors
└── postcss.config.js      # PostCSS configuration
```

## Getting Started

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ Sticky navigation bar with smooth transitions
- ✅ Responsive design with mobile-first approach
- ✅ Clean footer with tagline
- ✅ Hero section with gradient background
- ✅ Consistent max-width container (max-w-6xl)
- ✅ Generous whitespace and modern typography
- ✅ Smooth hover effects and transitions

## Next Steps

- Add portfolio items to the Work page
- Expand Services page with detailed offerings
- Add team information to About page
- Implement contact form on Contact page
- Add images and visual content
- Optimize for SEO
