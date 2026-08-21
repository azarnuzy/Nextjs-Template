# Next.js Modular Starter

A modern Next.js starter for applications that need public, authentication,
and administration areas without committing to a specific auth or data
provider.

## Stack

- Next.js 16 with App Router and React 19
- TypeScript 6
- Tailwind CSS 4
- Zod 4 for runtime validation
- ESLint 9 and Prettier 3
- Jest 30 and Testing Library
- Husky, lint-staged, and Commitlint
- pnpm 11 and Node.js 24

## Getting started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. The included example routes are:

- `/` — public landing page
- `/components` — shared component showcase
- `/auth/login` — authentication module example
- `/auth/forgot-password` — recovery placeholder
- `/admin` — admin overview
- `/admin/users` and `/admin/settings` — extension points

The auth form validates input locally for demonstration. It does not create a
session. Add an authentication provider and protect `/admin` before shipping.

## Module structure

```text
src/
├── app/                         # Routing, layouts, metadata, route handlers
│   ├── (auth)/auth/             # Public authentication routes
│   ├── (admin)/admin/           # Routes that will be protected
│   └── api/                     # HTTP route adapters
├── modules/                     # Business and feature modules
│   ├── auth/
│   │   ├── components/
│   │   ├── schemas/
│   │   └── index.ts             # Public module interface
│   └── admin/
│       ├── components/
│       ├── config/
│       └── index.ts             # Public module interface
├── components/                  # Shared UI used by multiple modules
├── lib/                         # Framework-agnostic shared utilities
├── constant/                    # Application-wide static configuration
└── styles/                      # Global styles and Tailwind theme
```

Routes should import a module from `@/modules/<name>`, not reach into its
internal folders. Code belongs in a module when it changes for a feature-specific
reason. Move it to `components` or `lib` only after at least two modules genuinely
share it.

When adding a module, prefer this shape:

```text
modules/billing/
├── actions/        # Server actions owned by the module
├── components/     # Module-specific views
├── schemas/        # Input and domain validation
├── server/         # Server-only implementation and adapters
├── types/          # Types that form part of the module interface
└── index.ts        # The only supported import seam for callers
```

Create only the folders the module actually needs. Avoid empty architecture
folders and generic `services` or `utils` buckets.

## Scripts

```bash
pnpm dev           # Start the development server
pnpm build         # Create a production build and sitemap
pnpm lint          # Run ESLint
pnpm lint:strict   # Run ESLint with zero warnings allowed
pnpm typecheck     # Run TypeScript without emitting files
pnpm test          # Run Jest
pnpm format        # Format the repository
pnpm format:check  # Check formatting
```

## Authentication integration

After choosing Auth.js, Clerk, Supabase, or another provider:

1. Keep provider-specific setup inside `modules/auth/server`.
2. Export only the session operations callers need from `modules/auth/index.ts`.
3. Add `src/proxy.ts` to redirect unauthenticated `/admin/:path*` requests.
4. Enforce authorization again in server actions and data access code; a route
   redirect alone is not an authorization check.

## Starter configuration

Search for `!STARTERCONF` and replace the package name, site URL, metadata,
favicons, Open Graph image, and sitemap settings before starting a product.
