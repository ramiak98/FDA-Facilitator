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

## Deploy

Import the repository in Vercel (New Project, select this repo). Framework is detected automatically.
