# IMHO Heavy Covert

IMHO Heavy Covert is a web application for an engineering and product-development business. It presents the company's services, products, blog content, and trade technology while supporting service-intake forms, PDF generation, file uploads, email notifications, and cookie consent.

## Project Structure

```text
imho-heavy-covert/
├── public/                  # Static assets, logos, and trade-tech media
├── context/                 # Shared React context, including cookie consent
├── src/
│   ├── actions/             # Server actions
│   ├── app/                 # Next.js App Router routes and layouts
│   │   ├── (home)/          # Home page
│   │   ├── (services)/      # Engineering service pages and related PDFs
│   │   ├── (shop)/          # Trade technology and product pages
│   │   ├── (blog)/          # Blog pages and posts
│   │   └── api/             # API routes, including UploadThing
│   ├── components/          # Shared UI, layouts, forms, emails, and utilities
│   ├── hooks/               # Reusable React hooks
│   └── lib/                 # Utilities, integrations, types, and Zod schemas
├── next.config.ts           # Next.js configuration and remote image hosts
├── tailwind.config.ts       # Tailwind CSS configuration
├── package.json             # Scripts and dependencies
└── pnpm-lock.yaml           # Locked pnpm dependency versions
```

## Technologies

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS with PostCSS
- Radix UI primitives and custom reusable components
- Framer Motion and Motion for animations
- Zod, Conform, and React Hook Form for typed form validation
- Notion API for blog content
- UploadThing for file uploads
- React PDF for generated service documents
- Resend and React Email for email delivery and templates
- Vercel Analytics and Speed Insights

## Package Manager

This project uses **pnpm**, as indicated by `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Deployment

The application is deployed on **Vercel**. Vercel Analytics and Speed Insights are integrated into the root application layout, and the local `.vercel` directory is excluded from version control.

Configure the required environment variables in the Vercel project settings before deploying integrations such as Notion, UploadThing, and Resend.
