<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Agent Instructions for Prompt Lab

This is a **Next.js 16 full-stack web application** for prompt engineering and experimentation. AI agents should use these guidelines to be immediately productive.

## Quick Start

**Install & run:**
```bash
npm install      # Install dependencies
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build for production
npm run lint     # Run ESLint
npm start        # Run production server
```

## Project Structure

```
prompt-lab/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global Tailwind styles
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

## Technology Stack

- **Framework**: Next.js 16.2.6 (App Router, Server Components by default)
- **UI**: React 19.2.4 with TypeScript 5
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`
- **Tooling**: ESLint 9, TypeScript strict mode

## Key Conventions

### TypeScript
- **Strict mode enabled** — all code must type-check
- Use `import type {}` for type-only imports
- Export types alongside implementations
- Path alias `@/*` maps to root directory

### React & Components
- **Server Components by default** in App Router — wrap with `"use client"` only when needed
- Use React 19 features (built-in Actions patterns, form handling)
- Keep component files colocated in `app/` directory
- Metadata is exported from `layout.tsx` using `Metadata` type

### Styling
- Use **Tailwind CSS classes** for all styling
- Global styles in `globals.css` (imported in layout)
- Don't create separate CSS modules; use Tailwind utility classes
- Design tokens: uses Geist fonts (sans/mono variants available via CSS variables)

### Linting
- ESLint with Next.js config enforces best practices
- Run `npm run lint` before committing
- Fix issues with `eslint --fix` when possible

## Common Tasks

### Adding a New Page
1. Create route file in `app/route-name/page.tsx`
2. Export React component as default
3. Export `Metadata` from `layout.tsx` in same directory if custom metadata needed
4. Use Server Components; add `"use client"` only if you need interactivity

### Creating Components
- Place in `app/components/` or colocate with pages
- Use TypeScript for prop types
- Prefer Server Components; use Client Components for interactivity
- Import from root with `@/` alias

### Styling Elements
- Use Tailwind utility classes (e.g., `className="flex items-center gap-4"`)
- Layout helpers in `globals.css` available
- View active font variables: `--font-geist-sans`, `--font-geist-mono`

### Environment Variables
- Create `.env.local` for local secrets (not committed)
- Frontend-accessible vars must start with `NEXT_PUBLIC_`
- Use `process.env.VARIABLE_NAME` in components

## Development Workflow

1. Make changes to `.tsx` files
2. Next.js hot-reloads on save
3. Check console/network for errors
4. Run `npm run lint` before committing
5. Build locally with `npm run build` to catch issues

## Testing & Quality

- No test framework configured yet
- Type-checking via TypeScript (`strict: true`)
- Linting via ESLint catches common issues
- Manual testing via dev server is primary workflow

## Notes

- This is a fresh scaffold; add dependencies only when needed
- Avoid complex CSS; Tailwind covers most cases
- Keep components small and focused
- Document non-obvious patterns with comments
