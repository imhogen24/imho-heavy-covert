# IMHO Heavy Covert

IMHO Heavy Covert is a web application for an engineering and product-development business. It presents the company's services, products, blog content, and trade technology while supporting service-intake forms, PDF generation, file uploads, email notifications, and cookie consent.

## Project Structure

```text
imho-heavy-covert/
├── public/                  # Static assets, logos, and trade-tech media
├── drizzle/                 # Database migrations
├── docs/                    # Internal technical notes
├── src/
│   ├── actions/             # Server actions
│   ├── app/                 # Next.js App Router routes and layouts
│   │   ├── (home)/          # Home page
│   │   ├── (services)/      # Engineering service pages and related PDFs
│   │   ├── (shop)/          # Trade technology and product pages
│   │   ├── (blog)/          # Blog pages and posts
│   │   ├── …                # Further content route groups (about, academy, kamsmet, …)
│   │   └── api/             # Form submissions, UploadThing, and cron routes
│   ├── components/          # Shared UI, layouts, forms, emails, and utilities
│   ├── hooks/               # Reusable React hooks
│   └── lib/                 # Database, notifications, Zod schemas, and utilities
├── next.config.ts           # Next.js configuration and remote image hosts
├── drizzle.config.ts        # Drizzle Kit configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── package.json             # Scripts and dependencies
└── bun.lock                 # Locked Bun dependency versions
```

## Technologies

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4 with PostCSS
- Radix UI primitives and custom reusable components
- Motion for animations
- Zod and React Hook Form for typed form validation
- Drizzle ORM with Neon serverless Postgres
- Notion API for blog content
- UploadThing for file uploads
- React PDF for generated service documents
- Resend and React Email for email delivery and templates
- Vercel Analytics and Speed Insights

## Package Manager

This project uses **Bun**, as indicated by `bun.lock` and the `packageManager` field in `package.json`.

```bash
bun install
bun dev
bun run check    # lint + format check + typecheck; the gate CI runs
bun run build
bun start
```

The `dev`, `build`, and `db:*` scripts load environment variables from `.env.staging` with dotenvx, so they must be run through these scripts rather than invoking `next` directly.

## Deployment

The application is deployed on **Vercel**.
