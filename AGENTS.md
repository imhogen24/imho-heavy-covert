# Repository Guidelines

## Project Structure & Module Organization
- App code lives in `src/app` using Next.js App Router with route groups like `(home)`, `(services)`, `(shop)`, and `(blog)`.
- Shared UI lives in `src/components` (e.g., `ui/`, `layout/`, `emails/`, `magicui/`).
- Utilities, schemas, and config are in `src/lib/` and `src/actions/`.
- Public assets are under `public/` (images, svg, webp, fonts in `src/app/fonts/`).
- Config files: `package.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json`.

## Build, Test, and Development Commands
- `pnpm install` — install dependencies.
- `pnpm dev` — run Next.js locally with hot reload.
- `pnpm build` — production build.
- `pnpm start` — start the production server (after build).
- `pnpm lint` — run ESLint; fix issues before committing.

## Coding Style & Naming Conventions
- TypeScript + React (TSX). Use 2‑space indentation and Prettier defaults.
- Components: PascalCase in `src/components/...` (e.g., `HeroSection.tsx`).
- Hooks: `useSomething.ts` in `src/hooks/`.
- Schemas: colocate under `src/lib/schemas/<domain>/z.ts` with clear domain names.
- Prefer functional components, server components where appropriate, and utility helpers in `src/lib/utils.ts`.

## Testing Guidelines
- If tests are present, colocate near source or under `src/__tests__/` with `*.test.ts[x]` naming.
- Aim for coverage on utilities and critical routes/components.
- Run tests via `pnpm test` (add/adjust script if missing).

## Commit & Pull Request Guidelines
- Commits: clear, imperative subject (max ~72 chars). Example: `feat(services): add process preview validation`.
- Group related changes; keep diffs focused.
- PRs: include summary, linked issues, and screenshots for UI changes. Note affected routes (e.g., `src/app/(home)/page.tsx`). Ensure `pnpm build` and `pnpm lint` pass.

## Security & Configuration Tips
- Do not commit secrets. Use environment variables via `.env.local` (ignored by git). Mirror required vars from `next.config.ts` or API files.
- Validate user input with zod schemas in `src/lib/schemas/...`.

## Agent-Specific Instructions
- Read this file when contributing automated changes. Respect file organization and naming patterns above. When adding modules, follow existing route group structure and colocate related components.

