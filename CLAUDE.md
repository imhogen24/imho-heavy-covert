# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint checks
- `npm run email` - Start email development environment

## Architecture Overview

This is a Next.js 15 application for IMHO Engineering (Innovate Make & Have Ours), an engineering consultancy focused on sustainable products and processes.

### Core Structure

- **Next.js App Router**: Uses the new app directory structure with route groups
- **Route Groups**:
  - `(home)` - Main landing page and company information
  - `(blog)` - Blog functionality with Notion CMS integration
  - `(services)` - Engineering services with form-based intake and PDF generation
- **TypeScript**: Strict TypeScript configuration with path aliases (`@/*` → `./src/*`)

### Key Technologies

- **UI Framework**: React 19 with Tailwind CSS and Radix UI components
- **Styling**: Tailwind CSS with custom fonts (Geist, Neue Machina, Calligraffitti)
- **Forms**: React Hook Form with Conform and Zod validation
- **CMS**: Notion API integration for blog content
- **File Uploads**: UploadThing for file handling
- **Email**: React Email with Resend for transactional emails
- **PDF Generation**: React PDF for service documentation
- **Analytics**: Vercel Analytics and Speed Insights
- **Theme**: next-themes with dark/light mode support

### Services Architecture

The services section is the core business functionality:

1. **CAD Services** (`/services/draftwork`) - Technical drawing and CAD work
2. **Process Optimization** (`/services/process`) - Engineering process improvements  
3. **Product Development** (`/services/product`) - Full product development lifecycle
4. **Engineering Support** (`/services/engineering-support`) - Consulting and training

Each service has:
- Form component for client intake
- Preview component for form review
- PDF generation for service agreements
- Email templates for notifications
- Zod schemas for validation in `src/lib/schemas/[service]/z.ts`

### Cookie Consent System

Implements GDPR-compliant cookie management with:
- Context provider for consent state
- Banner and settings components
- Cookie helpers for analytics tracking

### Key Patterns

- **Component Organization**: Feature-based folders with co-located components
- **Form Handling**: Conform + Zod pattern for type-safe forms
- **Styling**: `cn()` utility function combining clsx and tailwind-merge
- **PDF Config**: Service-specific configurations in `src/app/(services)/_components/pdf/lib/config/`

### External Integrations

- **Notion**: Blog content management via `@notionhq/client`
- **UploadThing**: File uploads with type-safe routes
- **Resend**: Email delivery service
- **Vercel**: Deployment platform with analytics