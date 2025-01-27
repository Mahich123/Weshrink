import { z } from 'zod'

export const createUrlFormSchema = z.object({
  longUrl: z.string().url(),
  urlName: z.string().nullable(),
  alias: z.string().nullable(),
  userID: z.string().nullable(),
})
