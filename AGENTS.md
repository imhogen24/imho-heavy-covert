# Project: IMHO Engineering — imho-heavy-covert

Next.js 16 application with App Router, Tailwind CSS 4, Notion CMS, Resend email, and UploadThing. No database, no auth, no admin CMS.

## Code Style

- TypeScript strict mode, avoid `any` types
- Prefer named exports for schemas, utilities, and components
- CSS: Tailwind utility classes via `cn()`; HSL CSS custom properties for theming — no arbitrary values
- 2-space indentation, Prettier defaults

## Commands

Package manager is **pnpm**. All scripts use `pnpm run`.

- `pnpm dev` — start development server with Turbopack
- `pnpm build` — run production build
- `pnpm start` — start the production server (after build)
- `pnpm lint` — run Next.js ESLint checks
- `pnpm email` — start React Email dev preview (`email dev`)

## Architecture

**Path alias:** `@/` → `src/`. All pages under `src/app/`.

**Route groups:**
- `src/app/(home)/` — landing page composed of section modules (`_compoennts/modules/`)
- `src/app/(services)/` — four service pages, each with form intake, preview, and PDF generation
- `src/app/(blog)/` — Notion-powered blog with dynamic `[slug]` route
- `src/app/(shop)/` — TradeTech product page
- `src/app/api/uploadthing/` — UploadThing file upload API endpoint

**Services pattern** (most complex area in the codebase — follow exactly):

Each service (`draftwork`, `process`, `product`, `engineering-support`) has four co-located pieces:

1. **Zod schema** — `src/lib/schemas/<service>/z.ts`
2. **Form component** — `src/app/(services)/_components/modules/<service>/form.tsx` (react-hook-form + zodResolver)
3. **Preview component** — `src/app/(services)/_components/modules/<service>/preview.tsx`
4. **Email template** — `src/components/emails/<service>/`
5. **PDF config** — `src/app/(services)/_components/pdf/lib/config/`

Form submission calls a server action in `src/actions/action.ts`, which sends via Resend.

**Shared components:**
- `src/components/ui/` — Radix UI primitives (shadcn-style)
- `src/components/layout/` — navbar, footer, service sub-routes
- `src/components/emails/` — React Email templates
- `src/components/cookie/` — GDPR cookie consent banner and settings
- `src/components/magicui/` — animation/visual components

**Utilities and config:**
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)
- `src/lib/constants.ts` — site-wide constants (nav items, marquee data, service routes)
- `src/lib/types.ts` — shared TypeScript types
- `src/lib/notion.ts` — Notion client + cached fetch helpers (server-only)
- `src/lib/uploadthing.ts` — typed UploadButton and UploadDropzone components
- `src/lib/cloudinary-loader.ts` — custom Next.js image loader for Cloudinary URLs
- `src/lib/cookie-consent.ts` + `src/lib/cookie-helpers.ts` — GDPR consent state management

## Styling & Theming

- **Tailwind CSS 4** via `@tailwindcss/postcss`. Entry point: `src/app/globals.css`.
- CSS uses `@import "tailwindcss"` (not `@tailwind` directives). JS config loaded via `@config "../../tailwind.config.ts"`.
- Theme tokens are HSL CSS custom properties defined in `src/app/globals.css` (`:root` and `.dark` blocks). Always reference existing tokens; never use arbitrary color values.
- `cn()` in `src/lib/utils.ts` is the only way to merge Tailwind classes conditionally.
- Custom fonts: Geist (sans), Neue Machina, Calligraffitti — loaded in `src/app/layout.tsx`.
- `tailwindcss-animate` is available for animation utilities. `@tailwindcss/typography` is available via `@plugin` in the CSS entry.

## External Integrations

- **Notion** — blog CMS. Helpers: `src/lib/notion.ts`. Env vars: `NOTION_TOKEN`, `NOTION_DATABASE_ID`.
- **Resend** — transactional email. All `resend.emails.send()` calls live in `src/actions/action.ts`. Env var: `RESEND_API_KEY`.
- **UploadThing** — file uploads. API router: `src/app/api/uploadthing/core.ts`. Typed client: `src/lib/uploadthing.ts`. Styled via `@import "uploadthing/tw/v4"` in globals.css.
- **Cloudinary** — image CDN for product/project images. Custom loader at `src/lib/cloudinary-loader.ts` rewrites URLs to use `w_<width>,q_<quality>,f_auto` transformations. Configured in `next.config.ts` via `images.loaderFile`.
- **Vercel Analytics + Speed Insights** — imported in `src/app/layout.tsx`.

## Important Notes

- NEVER commit `.env` files. Required env vars: `NOTION_TOKEN`, `NOTION_DATABASE_ID`, `RESEND_API_KEY`, `UPLOADTHING_SECRET`, `UPLOADTHING_APP_ID`.
- ALWAYS use `cn()` for any conditional or merged Tailwind class strings.
- ALWAYS follow existing code patterns. Ask permission before introducing a new pattern or changing an existing one; only proceed when granted.
- NEVER GUESS. Load the necessary context before implementing. Ask when unsure.
- NEVER break existing logic while fixing something else.
- BE CONCISE in plan mode — keep plans short and scannable.
- Do NOT introduce new libraries unless explicitly requested.
- Do NOT refactor unrelated code.
- Do NOT change file structure.
- Prefer minimal, surgical changes.
- **Zod v4** is in use (`zod@^4.x`). Import schemas from `"zod"`. Use `zodResolver` from `@hookform/resolvers/zod`. If using `@conform-to/zod`, import from `@conform-to/zod/v4` (not the default entrypoint).
- **Motion animations** import from `"motion/react"` — never from `"framer-motion"`.
- **Cloudinary images** are handled automatically by the custom loader. Do NOT add `unoptimized` to `<Image>` components using Cloudinary URLs.
- When adding a new service: follow the five-piece pattern — schema → form → preview → email template → PDF config. Add the server action to `src/actions/action.ts`.
- Ask before making architectural decisions.
