import { z } from 'zod'

export const createUrlFormSchema = z.object({
  longUrl: z.string().url(),
  urlName: z.string(),
  alias: z.string(),
  userID: z.string(),
  expiresAt: z.string(),
})

export type CreateUrlDataType = z.infer<typeof createUrlFormSchema>
