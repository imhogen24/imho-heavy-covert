\# Rate Limiting in Next.js: Upstash Redis vs Arcjet

\## Rate limiting

Rate limiting restricts how many requests a client (identified by IP address, user ID, API key, etc.) can make in a given time window. It protects against:

\- Brute-force attacks (login/signup endpoints)

\- API abuse and scraping

\- Accidental traffic spikes (retries, buggy clients) driving up compute/database costs

\- Denial-of-service style overload

Both tools researched here solve this, but take different approaches: \*\*Upstash Redis\*\* is a low-level building block, while \*\*Arcjet\*\* is a higher-level security SDK that includes rate limiting as one of several features.

\---

\## Option 1: Upstash Redis (`@upstash/ratelimit`)

\### What it is

Upstash provides a serverless, HTTP-based Redis database. Because it communicates over REST/HTTP instead of a persistent TCP connection, it works in edge runtimes (like Next.js Middleware) where traditional Redis clients cannot connect. The `@upstash/ratelimit` package builds rate-limiting algorithms on top of this.

\### Setup steps

1\. \*\*Create a Redis database\*\* via the \[Upstash Console](https://console.upstash.com) or Upstash CLI. Choose a region close to your deployment region to minimize latency.

2\. \*\*Copy credentials\*\* — `UPSTASH\_REDIS\_REST\_URL` and `UPSTASH\_REDIS\_REST\_TOKEN` — into environment variables.

3\. \*\*Install packages:\*\*

```bash

&#x20;  pnpm add @upstash/ratelimit @upstash/redis

```

4\. \*\*Create a rate limiter instance\*\* (outside the request handler, so it's reused across invocations):

```typescript

&#x20;  // lib/rate-limit.ts

&#x20;  import { Ratelimit } from "@upstash/ratelimit";

&#x20;  import { Redis } from "@upstash/redis";



&#x20;  const redis = new Redis({

&#x20;    url: process.env.UPSTASH\_REDIS\_REST\_URL!,

&#x20;    token: process.env.UPSTASH\_REDIS\_REST\_TOKEN!,

&#x20;  });



&#x20;  export const ratelimit = new Ratelimit({

&#x20;    redis,

&#x20;    limiter: Ratelimit.slidingWindow(10, "10 s"),

&#x20;    analytics: true, // enables tracking in the Upstash dashboard

&#x20;  });

```

5\. \*\*Apply it\*\* — either in Middleware (protects routes before they're reached) or inside an individual API route:

```typescript

&#x20;  // middleware.ts (or proxy.ts on Next.js 16+)

&#x20;  import { NextResponse } from "next/server";

&#x20;  import type { NextRequest } from "next/server";

&#x20;  import { ratelimit } from "@/lib/rate-limit";



&#x20;  export async function middleware(request: NextRequest) {

&#x20;    const ip = request.ip ?? "anonymous";

&#x20;    const { success } = await ratelimit.limit(ip);



&#x20;    if (!success) {

&#x20;      return NextResponse.json({ error: "Too many requests" }, { status: 429 });

&#x20;    }



&#x20;    return NextResponse.next();

&#x20;  }



&#x20;  export const config = {

&#x20;    matcher: "/api/:path\*",

&#x20;  };

```

\### Available algorithms

\- `Ratelimit.fixedWindow(max, window)` — simplest; resets fully at each window boundary (can allow bursts at window edges)

\- `Ratelimit.slidingWindow(max, window)` — smooths out the fixed-window edge-burst problem; more accurate

\- `Ratelimit.tokenBucket(refillRate, interval, capacity)` — allows short bursts up to a capacity, then throttles to the refill rate

\### Multiple limiters for different routes

Different endpoints often need different limits (e.g. stricter on auth routes):

```typescript
const strictLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, "1 m"),
});

const normalLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "1 m"),
});

const limiter = path.startsWith("/api/auth") ? strictLimit : normalLimit;
```

\### Trade-offs

\- \*\*Pros:\*\* Full control, cheap, works at the edge, minimal dependency footprint, well-documented, pay-per-use pricing scales down to near-zero for small apps.

\- \*\*Cons:\*\* You own everything else — bot detection, WAF-style attack protection, and email validation are not included. Only solves rate limiting.

\---

\## Option 2: Arcjet (`@arcjet/next`)

\### What it is

Arcjet is a broader application security SDK. Rate limiting is one of several built-in protections — the same package also offers bot detection, a Shield WAF (SQL injection/XSS pattern detection), email validation (blocking disposable addresses), sensitive-data (PII) redaction, and prompt-injection detection for AI endpoints. Decisions are evaluated via Arcjet's SDK, cached locally, and (depending on configuration) backed by their cloud decision engine.

\### Requirements

\- Next.js 15 or 16

\- ESM only (no CommonJS)

\### Setup steps

1\. \*\*Register for a free Arcjet account\*\* at \[console.arcjet.com](https://console.arcjet.com) and create a site to get an `ARCJET\_KEY`.

2\. \*\*Install packages:\*\*

```bash

&#x20;  pnpm add @arcjet/next @arcjet/inspect

```

3\. \*\*Create a single shared Arcjet instance\*\* (recommended pattern — one instance reused across the app, since the SDK caches decisions and config):

```typescript

&#x20;  // lib/arcjet.ts

&#x20;  import arcjet, { fixedWindow } from "@arcjet/next";



&#x20;  export const aj = arcjet({

&#x20;    key: process.env.ARCJET\_KEY!,

&#x20;    rules: \[

&#x20;      fixedWindow({

&#x20;        mode: "LIVE", // "DRY\_RUN" logs without blocking — useful for testing

&#x20;        window: "1h",

&#x20;        max: 60,

&#x20;      }),

&#x20;    ],

&#x20;  });

```

4\. \*\*Call `protect()` in a route handler:\*\*

```typescript

&#x20;  // app/api/example/route.ts

&#x20;  import { NextResponse } from "next/server";

&#x20;  import { aj } from "@/lib/arcjet";



&#x20;  export async function POST(req: Request) {

&#x20;    const decision = await aj.protect(req);



&#x20;    if (decision.isDenied()) {

&#x20;      return NextResponse.json({ error: "Too many requests" }, { status: 429 });

&#x20;    }



&#x20;    return NextResponse.json({ message: "ok" });

&#x20;  }

```

\### Rate-limiting algorithms available

Same conceptual set as Upstash's library:

\- `fixedWindow({ window, max })`

\- `slidingWindow({ interval, max })`

\- `tokenBucket({ refillRate, interval, capacity })`

\### Combining rate limiting with other protections

This is Arcjet's main differentiator — one `rules` array, multiple concerns:

```typescript

import arcjet, { detectBot, tokenBucket, shield } from "@arcjet/next";



const aj = arcjet({

&#x20; key: process.env.ARCJET\_KEY!,

&#x20; rules: \[

&#x20;   shield({ mode: "LIVE" }), // blocks SQLi/XSS-style attacks

&#x20;   tokenBucket({ mode: "LIVE", refillRate: 5, interval: 10, capacity: 10 }),

&#x20;   detectBot({ mode: "LIVE", allow: \["CATEGORY:SEARCH\_ENGINE"] }),

&#x20; ],

});

```

Rule order doesn't matter — Arcjet evaluates and optimizes execution automatically, returning the highest-severity conclusion (`DENY` > `CHALLENGE` > `ERROR` > `ALLOW`).

\### Per-route / conditional rules

Use `.withRule()` to add extra rules on top of a shared base client without redefining everything:

```typescript

function getClient(userId?: string) {

&#x20; if (userId) return aj; // authenticated users: just the base rules

&#x20; return aj.withRule(fixedWindow({ max: 10, window: "1m" })); // stricter for anonymous

}

```

\### Error handling — fails open by default

If Arcjet's decision service errors or times out (default timeout: 2000ms, typical response time 20–30ms), it fails open — meaning it won't block real traffic just because Arcjet itself had a hiccup. This is checkable via `decision.results` and `reason.isError()`, and can be overridden to fail closed on especially sensitive routes.

\### Trade-offs

\- \*\*Pros:\*\* One SDK for rate limiting + bot detection + WAF + email validation, less code to maintain, built-in IP threat intelligence (VPN/Tor/hosting-provider detection), good docs and framework-specific guidance, fails open safely by default.

\- \*\*Cons:\*\* Broader dependency, ties you to Arcjet's decision service/pricing for full functionality, learning curve is a bit larger if you only need plain rate limiting.

\---

\## Combining both

It's worth noting Arcjet's own documentation suggests pairing it with Upstash Redis specifically for \*\*distributed counters shared across multiple workloads/regions\*\* — i.e. the two tools aren't strictly either/or. A common pattern: use Arcjet for its broader security features (bot detection, Shield, email validation) and Upstash Redis directly for custom, fine-grained rate-limit logic where you need full control over the counting mechanism.

\---

\## Recommendation

For \*\*this project's likely needs\*\* (protecting service-intake forms, PDF generation, and email-sending endpoints from abuse):

\- If the only requirement is \*\*rate limiting\*\*, Upstash Redis + `@upstash/ratelimit` is the leaner choice — fewer moving parts, edge-compatible, cheap.

\- If there's appetite for broader protection (the service intake forms are a plausible spam/abuse target, and Shield's SQLi/XSS protection is valuable on any form-handling route), \*\*Arcjet\*\* covers more ground with comparable setup effort, and its `detectBot` + `shield` rules are directly relevant to a public-facing consultancy site with client intake forms.

Given this site has multiple public-facing forms (`(services)` route group) that trigger PDF generation and email sends — genuinely expensive operations per request — rate limiting both anonymous form submissions and API routes seems worthwhile regardless of which tool is chosen.

\## References

\- \[Upstash Ratelimit GitHub](https://github.com/upstash/ratelimit-js)

\- \[Upstash Blog: Rate Limiting Next.js API Routes](https://upstash.com/blog/nextjs-ratelimiting)

\- \[Arcjet Next.js SDK Reference](https://docs.arcjet.com/reference/nextjs/)

\- \[Arcjet Rate Limiting Docs](https://docs.arcjet.com/rate-limiting)

\- \[Arcjet Example: Next.js Server Action](https://github.com/arcjet/example-nextjs-server-action)
