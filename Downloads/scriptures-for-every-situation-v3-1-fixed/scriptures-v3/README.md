# Scriptures for Every Situation V3

Production-oriented Christian topical scripture app with PWA install support, Supabase auth wiring, local/offline features, and an OpenAI-powered assistant API route.

## Local setup
```bash
npm install --include=dev --registry=https://registry.npmjs.org/
npm run dev
```

## Vercel settings
- Framework: Vite
- Install: `npm install --include=dev --registry=https://registry.npmjs.org/`
- Build: `npm run build`
- Output: `dist`

## Environment variables
For real AI assistant:
- `OPENAI_API_KEY`

For member sign-up/sign-in:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Without these, the app still runs in demo/offline mode.
