# Project Overview: my-portfolio

This is a high-end personal portfolio built with **Next.js 16.2.0** (App Router) to showcase the skills and projects of a senior frontend developer. The project focuses on a modern, minimal aesthetic with rich animations and professional UI/UX standards.

## Tech Stack

- **Framework:** Next.js 16.2.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (radix-nova style)
- **Animations:** 
  - Framer Motion (Transitions, hover effects, micro-interactions)
  - GSAP (Scroll-based and complex timelines)
- **Icons:** Lucide React
- **Visuals:** Aceternity UI components

## Architecture

The project follows a root-based directory structure (no `src` folder):

- `app/`: Routing, layouts, and page compositions.
- `components/`: UI components organized by scope:
  - `ui/`: Generic reusable components (Button, Input, etc.).
  - `shared/`: Layout components (Navbar, Footer).
  - `sections/`: Page-specific sections (Hero, Projects).
- `lib/`: Utility functions and shared helpers.
- `hooks/`: Custom React hooks.
- `public/`: Static assets (images, svgs).
- `.ai/`: Project-specific AI context and rules.

## Building and Running

Key commands from `package.json`:

- **Development:** `npm run dev` - Starts the development server at `http://localhost:3000`.
- **Build:** `npm run build` - Creates an optimized production build.
- **Start:** `npm start` - Starts the production server after building.
- **Lint:** `npm run lint` - Runs ESLint for code quality checks.

## Development Conventions

### Coding Standards
- **Components:** Functional components are preferred. Keep them small, focused, and presentation-heavy.
- **Server Components:** Use Server Components by default; use `"use client"` only for interactivity.
- **TypeScript:** Strict mode is enabled. Use proper types for all props and data structures.
- **Styling:** Use Tailwind CSS utility classes. Avoid inline styles.
- **Icons:** Use `lucide-react` for all icons.

### UI & Animations
- **Consistency:** Follow the shadcn/ui and Tailwind 4 standards for spacing, colors, and typography.
- **Motion:** Use Framer Motion for entrance/hover animations.
- **GSAP:** Reserved for complex scroll-driven effects or timelines.

### AI Context
- **Rules:** Adhere to the mandates in `.ai/rules.md` for surgical edits and architectural consistency.
- **Context:** Refer to `.ai/project-context.md` for the overarching project vision and identity.
