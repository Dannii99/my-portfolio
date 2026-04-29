# Ownership Rules

## Folder Responsibilities

### src/app

Owns application routing, layouts, and page composition.

Includes:

- route structure (App Router)
- `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- route handlers (API routes)
- global providers and app-level setup

Rules:

- Do not place feature-specific business logic here
- Do not place reusable UI components here
- Pages must focus on composition, not implementation
- Keep changes minimal due to global impact

---

### src/features

Owns business logic and domain-specific functionality.

Includes:

- feature-specific components
- feature hooks
- feature services
- feature types
- feature state

Rules:

- All business logic should live inside its owning feature
- Do not leak feature logic into global folders
- Prefer local feature organization before promoting code to shared modules
- Avoid direct dependencies between features unless necessary

---

### src/components

Owns reusable UI and visual building blocks.

Includes:

- `components/ui` → generic reusable components (Button, Input, Card)
- `components/shared` → shared layout components (Header, Footer, Navbar)
- `components/sections` → page-level sections (Hero, About, Projects)

Rules:

- Do not include business logic here
- UI components must remain generic and reusable
- Sections can compose UI but must not own business logic
- Only add components that are reused or clearly reusable

---

### src/hooks

Owns reusable global hooks.

Includes:

- shared hooks used across features or components

Rules:

- Do not place feature-specific hooks here
- Keep hooks generic and reusable
- Prefer
