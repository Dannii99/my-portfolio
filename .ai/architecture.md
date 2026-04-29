# React Architecture

## Project Structure

```text
porject/
├─ public/
├─ src/
│  ├─ app/
│  ├─ components/
│  ├─ features/
│  ├─ services/
│  ├─ lib/
│  ├─ hooks/
│  ├─ data/
│  ├─ types/
│  ├─ styles/
│  ├─ store/
│  └─ constants/
├─ .env.local
├─ next.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Architectural Principles

- Use the App Router (`app/`) as the single source of truth for routing and page composition
- Keep components small, focused, and composable
- Prefer composition over large monolithic components
- Avoid mixing business logic with presentation
- Favor clarity and maintainability over clever abstractions
- Do not introduce new folders or layers unless clearly necessary
- Follow the defined project structure strictly

---

## Folder Responsibilities

### app/

- Responsible for routing, layouts, and page composition
- Must only contain:
  - `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, route handlers

- Must NOT contain reusable UI components or business logic
- Pages should compose sections and components, not implement full UI directly

---

### components/

- Contains all reusable UI and visual building blocks

#### components/ui

- Must contain generic, reusable, presentation-only components
- Examples: Button, Input, Card, Modal
- Must NOT include business logic or feature-specific behavior

#### components/shared

- Contains shared layout elements used across multiple pages
- Examples: Header, Footer, Navbar
- Can use `ui` components but must remain generic

#### components/sections

- Represents large UI blocks used to compose pages
- Examples: Hero, About, Projects, Contact
- Can combine multiple `ui` and `shared` components
- Must NOT contain complex business logic

---

### features/

- Contains feature-based modules (domain logic)
- Each feature owns its internal logic, hooks, services, and components
- Must encapsulate business logic
- Should not depend directly on other features unless explicitly required
- Prefer local organization before promoting code to global folders

---

### services/

- Responsible for API calls, external integrations, and data fetching logic
- Must NOT contain UI code
- Should be stateless and reusable
- Can be used by features or hooks

---

### lib/

- Contains generic utilities, helpers, and configurations

- Must include:
  - utility functions
  - formatters
  - shared helpers

- Must NOT include feature-specific logic

---

### hooks/

- Contains reusable custom React hooks
- Must be generic and reusable across the app
- Must NOT contain feature-specific business logic unless clearly shared

---

### data/

- Contains static or mock data used across the application
- Must NOT contain logic
- Can be used for prototyping or content-driven sections

---

### types/

- Contains global TypeScript types and interfaces
- Must be reusable and not tied to a single feature
- Feature-specific types should remain inside their feature

---

### styles/

- Contains global styles, SCSS configuration, and design tokens
- Must include:
  - variables
  - mixins
  - base styles

- Tailwind is the primary styling system
- SCSS should be used only when necessary

---

### store/

- Contains global state management (if used)
- Should only manage global UI or app-wide state
- Must NOT contain feature-specific logic unless truly global

---

### constants/

- Contains global constants and configuration values
- Examples: routes, site metadata, configuration flags
- Must NOT include logic

---

## Dependency Rules

- app may depend on all layers for composition
- features may depend on components, hooks, services, lib, and types
- components may depend on ui, hooks, lib, and types
- components/ui must remain independent and reusable
- services must not depend on components
- hooks may depend on services and lib
- lib must remain dependency-free from features
- types can be used across all layers
- store can be used globally but must remain clean and minimal

---

## Reusability Rules

- Always check for existing components before creating new ones
- Promote code to shared folders only when reuse is proven
- Avoid duplication but do not over-abstract prematurely
- Prefer local feature ownership before global reuse

---

## Code Quality Rules

- Use TypeScript strictly (avoid `any`)
- Keep files small and readable
- Use clear and descriptive naming
- Export components through `index.ts` when applicable
- Separate logic from UI when possible
- Follow consistent folder and naming conventions

---

## Execution Guidelines

- Do not generate unnecessary files or abstractions
- Always respect the defined folder structure
- Prefer incremental changes over large refactors
- Ensure all generated code is production-ready
- Maintain consistency across the entire codebase
