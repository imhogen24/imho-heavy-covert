import { defineConfig } from "drizzle-kit";

// Env vars are injected by dotenvx from .env.staging; run via the db:* scripts.
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. Run drizzle-kit through the db:* scripts.",
  );
}

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  strict: true,
  verbose: true,
});
