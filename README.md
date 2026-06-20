# MAY — Here could be your business

Premium multilingual demo portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion. The default interface language is Armenian; Russian and English are available from the language switcher.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Vercel detects Next.js and pnpm automatically. Keep the defaults:
   - Build command: `pnpm build`
   - Install command: `pnpm install`
   - Output directory: leave empty
4. Click **Deploy**.

No environment variables are required for the demo. Before using it as a real contact site, connect the form to an email, CRM, or database endpoint.
