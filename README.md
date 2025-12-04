# VibeWatch - Next.js Landing Page

A modern, responsive landing page for VibeWatch built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 15.5.7** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Space Grotesk** - Modern font family

## Features

- 🎨 Modern, dark-themed design with gradient backgrounds
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js optimizations
- 🎯 SEO-friendly with proper meta tags
- 🧩 Reusable components with shadcn/ui
- 🔗 Multiple pages: Home, Privacy Policy, Terms of Use

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
VibeWatch/
├── app/
│   ├── layout.tsx          # Root layout with global styles
│   ├── page.tsx             # Home page
│   ├── privacy/
│   │   └── page.tsx         # Privacy policy page
│   ├── terms/
│   │   └── page.tsx         # Terms of use page
│   └── globals.css          # Global CSS with Tailwind
├── components/
│   ├── header.tsx           # Site header/navigation
│   ├── footer.tsx           # Site footer
│   └── ui/
│       └── button.tsx       # Button component (shadcn)
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── logo.png             # Site logo
└── package.json
```

## Pages

- **Home (/)** - Main landing page with all sections:
  - Hero with clip preview
  - Features overview
  - AI assistant showcase
  - How it works
  - Support section

- **Privacy (/privacy)** - Privacy policy and data handling

- **Terms (/terms)** - Terms of use and subscription details

## Styling

The design uses a dark theme with:
- Primary color: Orange (#fb7f33)
- Background: Dark blue gradients
- Custom CSS variables for consistency
- Responsive design with Tailwind breakpoints

## License

All rights reserved - VibeWatch
