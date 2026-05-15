# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Development Server

Start the dev server with `npm run dev`. The app reloads on file changes. Always start it before making UI changes.

## Build & Lint

- Build: `npm run build` (catches TypeScript errors)
- Lint: `npm run lint` (ESLint)
- Fix lint issues: `eslint --fix`

## Key Patterns

### Server vs Client Components
- Default to Server Components (no `"use client"` directive)
- Use Client Components only for:
  - Interactive features (forms, buttons with side effects)
  - Browser APIs (localStorage, window)
  - Event handlers
  - Hooks (useState, useEffect)

### File Structure
- Routes are defined by directory structure under `app/`
- `page.tsx` files define the content for each route
- Create `layout.tsx` in subdirectories for nested layouts
- Use the `@/*` path alias to import from the project root

### Typing React Props
```typescript
interface ComponentProps {
  title: string;
  onClick?: () => void;
}

export default function Component({ title, onClick }: ComponentProps) {
  return <button onClick={onClick}>{title}</button>;
}
```

## Before Committing

1. Run `npm run build` to verify no TypeScript/build errors
2. Run `npm run lint` to check for linting issues
3. Test changes manually in the dev server at `http://localhost:3000`