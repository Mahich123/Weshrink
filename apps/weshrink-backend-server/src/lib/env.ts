import {z} from 'zod'

export const envSchema = z.object({
  AUTH_SECRET: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  AUTH_URL: z.string(),
  GOOGLE_ID: z.string(),
  GOOGLE_SECRET: z.string(),
  NEXT_PUBLIC_BASE_URL: z.string(),
  TURSO_DB_URL: z.string(),
  TURSO_DB_AUTH_TOKEN: z.string(),
  PORT: z.string()
})
export type ENV = z.infer<typeof envSchema>

export const env = envSchema.parse(process.env);