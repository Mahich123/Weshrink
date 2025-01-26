import { z } from "zod";

export const createUrlFormSchema = z.object({
    long_url: z.string().url(),
    url_name: z.string().nullable(),
    alias: z.string().nullable(),
    user: z.string().optional().nullable(),
    shortUrl: z.string().optional()
  })