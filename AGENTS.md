# Repository Guidelines

## Project Structure & Module Organization

- App code lives in `src/app` using Next.js App Router with route groups like `(home)`, `(services)`, `(shop)`, and `(blog)`.
- Shared UI lives in `src/components` (e.g., `ui/`, `layout/`, `emails/`, `magicui/`).
- Utilities, schemas, and config are in `src/lib/` and `src/actions/`.
- Public assets are under `public/` (images, svg, webp, fonts in `src/app/fonts/`).
- Config files: `package.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json`.

## Build, Test, and Development Commands

- `bun install` — install dependencies (also installs the Husky git hooks).
- `bun dev` — run Next.js locally with hot reload.
- `bun run build` — production build.
- `bun start` — start the production server (after build).
- `bun run lint` — run oxlint (warnings fail); `bun run lint:fix` applies safe fixes.
- `bun run format` / `bun run format:check` — Prettier write / verify.
- `bun run typecheck` — generate Next route types and run `tsc --noEmit`.
- `bun run check` — lint + format check + typecheck; the same gate CI runs on every PR.

The pre-commit hook runs oxlint and Prettier on staged files, then a full typecheck. Don't bypass it with `--no-verify`; CI enforces the same checks before merging to `main`.

## Coding Style & Naming Conventions

- TypeScript + React (TSX). Use 2‑space indentation and Prettier defaultsi.
- Components: PascalCase in `src/components/...` (e.g., `HeroSection.tsx`).
- Hooks: `useSomething.ts` in `src/hooks/`.
- Schemas: colocate under `src/lib/schemas/<domain>/z.ts` with clear domain names.
- Prefer functional components, server components where appropriate, and utility helpers in `src/lib/utils.ts`.

## Testing Guidelines

- If tests are present, colocate near source or under `src/__tests__/` with `*.test.ts[x]` naming.
- Aim for coverage on utilities and critical routes/components.
- Run tests via `bun run test` (add/adjust script if missing).

## Commit & Pull Request Guidelines

- Commits: clear, imperative subject (max ~72 chars). Example: `feat(services): add process preview validation`.
- Group related changes; keep diffs focused.
- PRs: include summary, linked issues, and screenshots for UI changes. Note affected routes (e.g., `src/app/(home)/page.tsx`). Ensure `bun run check` and `bun run build` pass.

## Security & Configuration Tips

- Do not commit secrets. Use environment variables via `.env.local` (ignored by git). Mirror required vars from `next.config.ts` or API files.
- Validate user input with zod schemas in `src/lib/schemas/...`.

## Agent-Specific Instructions

- Read this file when contributing automated changes. Respect file organization and naming patterns above. When adding modules, follow existing route group structure and colocate related components.
