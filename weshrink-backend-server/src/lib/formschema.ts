import { z } from 'zod'

export const createUrlFormSchema = z.object({
  longUrl: z.string().url(),
  urlName: z.string().nullable(),
  alias: z.string().nullable(),
  user: z.string().optional().nullable(),
  shortUrl: z.string().optional()
})
