# [decode]
### Tech, explained like someone who gets it.

Decode is a shame-free, zero-friction technology companion for anyone who has ever felt left behind by tech. Paste any confusing piece of technology — a notification, a bill, a suspicious text, an error message — and get an immediate plain-language explanation.

**No account. No login. No judgment. Just answers.**

🔗 **Live at [decode-tech.vercel.app](https://decode-tech.vercel.app)**

---

## What it does

You describe anything confusing about technology. Decode tells you:

- **What this is** — plain language, no jargon
- **What you should do** — specific, actionable steps
- **What to watch out for** — scam flags, hidden fees, predatory patterns

---

## Who it's for

Low-income adults, seniors, first-generation students, recently incarcerated individuals, youth in under-resourced schools — and anyone who has ever felt made to feel slow by a device, a bill, or a website. Built by someone from these communities, not for them.

---

## Tech stack

- **Frontend:** Next.js 16 + TypeScript
- **AI:** OpenRouter (openrouter/auto) — production API, free tier
- **Hosting:** Vercel
- **Analytics:** PostHog (privacy-first, ad-blocker-resistant reverse proxy)
- **Database:** None — stateless by design in V1

---

## Running locally

You'll need an [OpenRouter](https://openrouter.ai) API key and a [PostHog](https://posthog.com) project key. No credit card required for either.

Create a `.env.local` file in the project root:
```bash
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Then install and run:
```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`. No second terminal needed.

---

## Project structure
src/
app/
page.tsx              # Homepage — main decoder interface
about/page.tsx        # About page — mission and trust-building
share/[id]/page.tsx   # Shared answer view — read-only
api/decode/
route.ts            # POST route with input validation + rate limiting
components/
PostHogProvider.tsx   # Analytics provider with reverse proxy
lib/
decode.ts             # OpenRouter API call with retry logic
prompt.ts             # System prompt — the tone engine (most important file)
share.ts              # URL-safe Base64 encode/decode for share links
posthog.ts            # PostHog initialization
middleware.ts           # Rate limiting — 10 requests/min per IP

---

## Design principles

- **Shame-free tone** — baked into the system prompt, non-negotiable
- **Zero friction** — no account, no onboarding, first interaction requires nothing
- **Privacy-first** — no input data stored, no ads, ever
- **Accessible** — WCAG 2.1 AA contrast ratios, 16px minimum font size, keyboard navigable
- **Works anywhere** — library computer, older phone, slow connection

---

## Roadmap

- [x] Core decoder interface
- [x] Shame-free system prompt / tone engine
- [x] OpenRouter production backend
- [x] About page
- [x] Accessibility pass (WCAG AA colors + font sizes)
- [x] Share link feature
- [x] Vercel deployment
- [x] PostHog analytics with ad-blocker-resistant reverse proxy
- [ ] Reading level selector
- [ ] Topic categorization + analytics dashboard
- [ ] SMS / low-bandwidth version
- [ ] Community org embed widget
- [ ] Beta launch

---

## Individual users will always be free. No ads. No data selling. Ever.