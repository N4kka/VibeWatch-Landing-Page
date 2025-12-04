# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VibeWatch is a modern landing page for a clip-first movie & TV discovery app. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Architecture

### Next.js App Router Structure

This project uses Next.js 15 App Router (not Pages Router). All routes are defined in the `app/` directory:

- `app/layout.tsx` - Root layout with global styles and font loading
- `app/page.tsx` - Home page (all sections inline)
- `app/privacy/page.tsx` - Privacy policy page
- `app/terms/page.tsx` - Terms of use page

Each page is a **self-contained component** with all sections inline. There are no separate section components.

### Component Architecture

**Shared Components** (`components/`):
- `header.tsx` - Sticky navigation with logo, nav links, and CTA
- `footer.tsx` - Simple footer with branding text
- `ui/button.tsx` - shadcn/ui Button component with custom variants

**Component Pattern**: Client components use `"use client"` directive (see Header). Server components (pages) do not.

### Styling System

**CSS Variables Architecture** (`app/globals.css`):
- All theme colors defined as HSL values in CSS custom properties
- Dark theme by default (no light mode)
- Uses Tailwind's color system with HSL format: `hsl(var(--primary))`

**Key Design Tokens**:
- Primary: Orange (#fb7f33 / HSL 18 100% 60%)
- Background: Dark blue gradient (HSL 222 47% 11%)
- Border radius: 18px (very rounded, modern aesthetic)
- Typography: Space Grotesk font (loaded via Google Fonts CDN in layout.tsx)

**Tailwind Configuration**:
- Uses shadcn/ui's color system (extends Tailwind colors)
- Dark mode: class-based (`darkMode: ["class"]`)
- Custom radius values calculated from CSS variable
- Includes `tailwindcss-animate` plugin for animations

### Import Aliases

TypeScript path aliases configured in `tsconfig.json`:
```typescript
"@/*" -> "./*"  // Root-relative imports
```

Examples:
- `@/components/ui/button` → `./components/ui/button`
- `@/lib/utils` → `./lib/utils`

### shadcn/ui Integration

**Configuration** (`components.json`):
- Style: "new-york" variant
- RSC: true (React Server Components enabled)
- CSS variables: true (uses HSL variables)
- Base color: zinc

**Adding New shadcn/ui Components**:
```bash
npx shadcn@latest add [component-name]
```

Components are installed to `components/ui/` and use the `cn()` utility from `lib/utils.ts` for className merging.

## Design System

### Color Palette
- **Primary Accent**: Orange gradient for CTAs (`bg-gradient-to-br from-primary to-orange-400`)
- **Backgrounds**: Dark with radial gradients (blue/orange overlays)
- **Text**: White primary, light gray muted (#b0b0b0)
- **Borders**: Semi-transparent white (12% opacity)

### Component Styling Patterns

**Cards**: Rounded corners (18-20px), glassmorphism effect with `backdrop-blur`, gradient backgrounds
**Buttons**: Two variants - gradient primary, transparent secondary with border
**Spacing**: Generous padding (px-5, py-3 for buttons; p-5 for cards)

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Grid layouts: `grid md:grid-cols-2 lg:grid-cols-3`
- Typography scales with `clamp()` for fluid sizing

## Font Loading Strategy

**Important**: This project uses standard Google Fonts link tags in `app/layout.tsx`, NOT `next/font/google` import. This was chosen to avoid build-time font download issues.

If you need to change fonts, update the `<link>` tags in the `<head>` of `layout.tsx`.

## Page Structure Conventions

All pages follow this pattern:
1. Import Header and Footer components
2. Define metadata export for SEO
3. Render: `<Header /> → <main> → <Footer />`
4. Use container classes: `container mx-auto max-w-7xl px-6 py-12`

**Section Anchors**: Use `id` attributes for in-page navigation (e.g., `id="clips"`, `id="support"`)

## Static Assets

- Logo: `public/logo.png` (32x32px, rounded)
- Next.js serves `/public` files from root path (e.g., `/logo.png`)
- Images use `next/image` component with width/height specified

## Key Dependencies

- **next**: 15.5.7 (App Router)
- **react**: 19.0.0
- **tailwindcss**: 3.4.1
- **@radix-ui/react-slot**: Required for shadcn/ui Button asChild pattern
- **class-variance-authority**: For button variants
- **tailwind-merge**: For className conflict resolution
- **autoprefixer**: Required for Tailwind (PostCSS plugin)

## Design Philosophy

This landing page follows the "CineStream Design System" (see `design.json`):
- Content-first, minimal clutter
- Cinematic dark aesthetic
- Vibrant accent colors for visual interest
- Large hero sections with generous spacing
- All content inline in pages (no complex component hierarchy)

When adding new sections or pages, maintain consistency with:
- Dark backgrounds with subtle gradients
- Orange accent for CTAs and highlights
- Rounded corners (18px radius)
- Glassmorphism effects on cards
- Space Grotesk typography

## Development Workflow

### Feature Planning Process

**REQUIRED**: Before implementing any new feature or functionality, you must:

1. **Check current date/time** to get the accurate date
2. **Create a planning document** in `/docs/` folder with naming format: `YYYY-MM-DD-function_name.md`
3. **Document structure**:
   - Feature description
   - Implementation approach
   - Files to be created/modified
   - Components/dependencies needed
   - Testing considerations
4. **Wait for user confirmation** before proceeding with implementation

Example: For a "contact form" feature requested on Dec 4, 2025, create `/docs/2025-12-04-contact-form.md` and wait for approval.

**Do not start coding until the planning document is reviewed and approved.**

### Post-Implementation Process

**REQUIRED**: After completing implementation, you must:

1. **Update the planning document** with completion status:
   - Add `Status: ✅ COMPLETED` at the top
   - Add completion date
   - Add implementation summary section at the end
2. **Document what was built**:
   - List all files created with line counts
   - List all files modified with key changes
   - Document any dependencies added
   - Note any design system compliance
3. **Add completion section** including:
   - What features were implemented
   - Testing checklist results
   - Performance notes
   - Next steps for production
   - Any user questions answered
   - Contact information

Example completion section format:
```markdown
---

## ✅ IMPLEMENTATION COMPLETED

### What Was Built
[Detailed list of components, files, features]

### Files Created
[List with line counts]

### Files Modified
[List with key changes]

### Testing Checklist
- [x] Feature works as expected
- [x] No console errors
[etc.]

### Next Steps for Production
1. Deploy to domain
2. Update configuration
[etc.]
```

**This documentation ensures knowledge continuity and helps track project evolution.**
