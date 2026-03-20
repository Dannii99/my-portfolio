# Execution Rules

## Before Coding

- Always read the target file and its closest related files (same folder, feature, or section)
- Understand the full context before making any change
- Identify the smallest possible safe change
- Prefer updating existing code instead of rewriting from scratch
- Determine the correct architectural layer before coding:
  - `app/` for routing and composition
  - `components/` for UI
  - `features/` for business logic
  - `services/` for external interactions

- Do not assume missing context — inspect the codebase first

---

## While Coding

- Follow the project architecture strictly
- Keep components small and focused
- Preserve existing APIs, props, and behaviors unless explicitly asked to change them
- Avoid introducing breaking changes
- Do not refactor unrelated code
- Keep business logic inside its owning feature
- Do not move code across layers without clear justification
- Prefer composition over duplication
- Use existing utilities, hooks, and components before creating new ones
- Keep imports minimal, consistent, and ordered

---

## After Coding

- Verify all imports are correct and resolved
- Ensure there are no TypeScript errors
- Ensure no runtime errors are introduced
- Validate that UI behavior remains consistent
- Check for unintended side effects or state issues
- Ensure code follows existing patterns and conventions
- Confirm code is placed in the correct architectural location

---

## Safety Rules

- Do not create new files or folders unless necessary
- Do not introduce new dependencies unless explicitly required
- Do not modify global structure without instruction
- Do not delete existing code unless it is clearly unused or requested
- Avoid large changes — prefer incremental updates

---

## Quality Standards

- Write clean, readable, and maintainable code
- Use clear and descriptive naming
- Avoid unnecessary complexity
- Keep files concise and well-structured
- Ensure all code is production-ready
