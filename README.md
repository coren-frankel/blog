# Law Blog

This is a custom blog platform built using [TanStack Start](https://tanstack.com/start), [TanStack Router](https://tanstack.com/router), [Strapi](https://strapi.io/), and [Cloudflare Workers](https://workers.cloudflare.com/) to provide a fast, scalable, and secure blogging experience for my partner's personal website utilizing open-source technologies. It utilizes server-side rendering (SSR) for optimal performance and SEO of blog content, and is styled with [Tailwind CSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/). It uses pnpm as its package manager, oxlint and oxfmt for rapid linting and formatting. The project is currently under development and will be deployed on Cloudflare Workers using Wrangler.

## Getting Started

To run this application:

```bash
pnpm install
pnpm dev
```

## High Level Plan

1. [x] Create TanStack Start project with Cloudflare Workers target
2. [ ] Configure routes for blog listing and individual blog posts
3. [ ] Set up Strapi CMS for content management
4. [ ] Integrate Strapi with TanStack Start for fetching blog data
5. [ ] Dockerize Strapi for local development
6. [ ] Create shadcn UI components for blog layout
7. [ ] Create auth system for admin access to Strapi
8. [ ] Implement SSR for blog content
9. [ ] Deploy to Cloudflare Workers using Wrangler
10. [ ] Test and optimize for performance and SEO
