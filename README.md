# FDA Facilitator

Marketing website for FDA Facilitator: FDA compliance, customs, trademark and logistics services for companies entering the US market.

Built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS. Deploys to Vercel with no extra configuration.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

- `src/lib/site.ts`: all site copy (services, industries, deadlines, FAQ) and the contact email
- `src/app/page.tsx`: the homepage
- `src/components/`: header, footer, logo

## Contact form

The form on `/contact` emails each inquiry through [Resend](https://resend.com). Until it is configured, visitors are asked to email `site.email` instead. To turn it on, add these environment variables in Vercel (see `.env.example`):

- `RESEND_API_KEY`: API key from Resend
- `CONTACT_TO_EMAIL`: inbox(es) that receive inquiries, comma-separated
- `CONTACT_FROM_EMAIL`: sender on a domain verified in Resend (optional until a domain is set up)

## SEO and analytics

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- `src/app/opengraph-image.tsx` is the preview image for shared links; `src/app/icon.svg` is the browser icon.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel when a custom domain goes live so canonical links and the sitemap use it.
- Vercel Web Analytics is included (`@vercel/analytics`); enable it once in the Vercel project's Analytics tab. It uses no cookies.

## Deploy

Import the repository in Vercel (New Project, select this repo). Framework is detected automatically.
