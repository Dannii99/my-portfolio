# Project Rules

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (UI components)
- Motion (UI animations)
- GSAP (advanced animations)
- Aceternity UI (visual sections)
- lucide-react (icons)

---

## Core Principles

- Prefer minimal and safe changes over broad rewrites
- Preserve working code unless explicitly required
- Follow existing project patterns before introducing new ones
- Reuse existing components, hooks, services, utilities, and styles whenever possible
- Prefer composition over large or tightly coupled components
- Keep code clean, readable, and maintainable

---

## Editing Rules

- Modify only the minimum code necessary to satisfy the request
- Do not refactor unrelated code
- Do not rewrite entire files when a small change is enough
- Respect manual fixes already present in the code
- Do not remove comments, TODOs, guards, or fallback logic unless explicitly requested
- Do not rename files, folders, components, or public APIs unless explicitly requested
- Do not change existing APIs unless explicitly requested

---

## Next.js Rules

- Always use App Router (`app/`)
- Use `page.tsx` for routes
- Use `layout.tsx` for layouts
- Prefer Server Components by default
- Use Client Components only when necessary (`"use client"`)
- Do not use Pages Router (`pages/`)
- Keep pages focused on composition, not implementation
- Do not place business logic inside `app/`

---

## Component Rules

- Prefer functional components
- Keep components small and focused
- Avoid heavy logic inside JSX
- Extract logic into hooks when needed
- Preserve existing props and component contracts
- Do not introduce unused imports
- Do not change component structure unless necessary

---

## Component Architecture Rules

- `components/ui` → generic reusable UI components (Button, Input, Card)
- `components/shared` → shared layout components (Header, Footer, Navbar)
- `components/sections` → page sections (Hero, Projects, Contact)

Rules:

- UI components must remain generic and reusable
- Do not include business logic inside UI components
- Sections can compose UI but must remain presentation-focused
- Prefer composing existing components over creating new ones

---

## Data & State Rules

- Keep server logic inside `services/`
- Keep UI state local whenever possible
- Avoid unnecessary global state
- Use global state (`store/`) only when truly required
- Keep state close to where it is used
- Do not duplicate data unnecessarily

---

## UI Rules

- Use Tailwind CSS for layout, spacing, and utilities
- Use shadcn/ui as the default source for reusable UI components
- Prefer composing shadcn/ui components before creating custom ones
- Preserve existing Tailwind classes unless changes are required
- Maintain visual consistency across the application
- Avoid introducing new UI patterns unless necessary
- Keep UI clean, modern, and minimal

---

## Animation Rules

- Use Motion for:
  - entrance animations
  - hover effects
  - transitions
  - micro-interactions

- Use GSAP only for:
  - scroll-based animations
  - complex timelines
  - advanced visual effects

Rules:

- Animations must enhance UX, not distract
- Keep animations smooth and performant
- Avoid excessive or unnecessary animations

---

## Styling Rules

- Tailwind CSS is the primary styling system
- Avoid inline styles unless necessary
- Use SCSS only for:
  - global styles
  - variables and mixins
  - complex visual effects

- Maintain consistency in spacing, typography, and layout

---

## Architecture Rules

Respect the project structure:

- src/app → routing and composition
- src/features → business logic
- src/components → UI
- src/hooks → shared hooks
- src/services → API and integrations
- src/lib → utilities and helpers
- src/types → shared types
- src/data → static data
- src/styles → global styles
- src/store → global state
- src/constants → constants

Rules:

- Keep feature boundaries intact
- Do not move code across layers unless necessary
- Prefer local feature implementation before global reuse
- Shared modules must remain generic and reusable

---

## Reusability Rules

- Always check if something already exists before creating new code
- Promote code to shared modules only when reuse is proven
- Avoid premature abstraction
- Prefer local ownership before global reuse

---

## Dependency Rules

- Do not introduce new libraries unless necessary
- Prefer existing project tools and libraries
- Avoid duplicate functionality across dependencies
- Keep dependencies minimal

---

## Icon Rules

- Use lucide-react as the default icon library
- Import only the icons that are used
- Maintain visual consistency across components
- Do not replace lucide icons unless explicitly requested

---

## Lib Rules (shadcn/ui helpers)

- Use utilities from `src/lib` (e.g. `cn`) when working with UI components
- Prefer existing helpers before creating new ones

---

## Performance Rules

- Avoid unnecessary re-renders
- Optimize images and assets
- Keep bundle size minimal
- Use lazy loading when appropriate
- Prefer server-side rendering when possible

---

## Safety Rules

- Inspect surrounding code before editing
- Prefer extending existing code over replacing it
- Avoid speculative refactors
- Avoid breaking public interfaces
- Do not modify project structure without instruction
- Do not create unnecessary files
- If a change may affect behavior, choose the safest implementation

---

## Final Rule

Every change must align with:

- project architecture
- user experience quality
- performance
- maintainability

If unsure, choose the simplest and safest solution.
