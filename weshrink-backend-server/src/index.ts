import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { urls, users } from './db/schema'
import { and, eq } from 'drizzle-orm'
import { nanoid } from 'nanoid'
import { db } from './db'
import { zValidator } from '@hono/zod-validator'
import { createUrlFormSchema } from './lib/formschema'
import { createUrl, getExistingUrl, getExistingUsers } from './routes/urls/urls'

const app = new Hono()
  .get('/urls', (c) => {
    return c.json({ message: 'url route' })
  })
  .post('/urls', zValidator('json', createUrlFormSchema), async (c) => {
      const { alias, longUrl, urlName, userID } = c.req.valid('json')

      let existingUser: {
        id: string
        name: string | null
        email: string | null
        emailVerified: Date | null
        image: string | null
      }[] = []

      if (userID) {

        try {
          existingUser = await getExistingUsers(userID)
        } catch (error) {
          return c.json({
            error: error instanceof Error ? error.message : 'Unknown error',
            status: 500,
            success: false,
          })
        }
        
        if (!existingUser[0]) {
          return c.json({
            message: 'User not found',
            status: 404,
            success: false,
          })
        }

        const existingUrl = await getExistingUrl(longUrl, userID)

        if (existingUrl[0]) {
          return c.json({
            message: 'URL already exists',
            status: 409,
            success: false,
            data: existingUrl[0],
          })
        }
      }

      const short = nanoid(8)
      const expiresAt = new Date(
        new Date().setDate(new Date().getDate() + 7),
      ).toISOString()

      try {
        await createUrl(longUrl, short, expiresAt, userID, alias)
      } catch (error) {}
      return c.json({
        message: 'URL submitted successfully',
        status: 201,
        success: true,
        data: {
          short,
          longUrl,
          expiresAt,
        },
      })
    
  })

app.use('/*', cors())
// app.route('/url', urls)

export type AppType = typeof app
export { app }
