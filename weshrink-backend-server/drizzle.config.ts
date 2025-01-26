import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_DB_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
});