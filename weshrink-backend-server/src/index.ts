import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { urls, users } from './db/schema'
import { and, eq } from 'drizzle-orm'
import { nanoid } from 'nanoid'
import { db } from './db'
import { zValidator } from '@hono/zod-validator'
import { createUrlFormSchema } from './lib/formschema'
const app = new Hono()
.get('/urls', (c) => {
  return c.json({ message: 'url route' })
})
.post('/urls', zValidator('json', createUrlFormSchema), async (c) => {
  try {
    const { long_url, url_name, alias, user, shortUrl } = c.req.valid('json')

    if (!long_url || !shortUrl) {
      return c.json({
        message: 'Missing required fields',
        status: 400,
      })
    }

    const username = user || null
    let existing_user = null

    if (username) {
      existing_user = await db
        .select()
        .from(users)
        .where(eq(users.name, username))
        .limit(1)

      if (existing_user.length === 0) {
        return c.json({
          message: 'User not found',
          status: 404,
          success: false,
        })
      }
    }

    if (existing_user) {
      const existing_url = await db
        .select()
        .from(urls)
        .where(
          and(
            eq(urls.long_url, long_url),
            eq(urls.user_id, existing_user[0].id),
          ),
        )
        .limit(1)

      if (existing_url.length > 0) {
        return c.json({
          message: 'URL already exists',
          status: 409,
          success: false,
          data: existing_url[0],
        })
      }
    }

    const short_code = nanoid(8)
    const shortened_url = `${shortUrl}/${short_code}`
    const created_at = new Date()
    const expires_at = new Date(created_at)
    expires_at.setDate(created_at.getDate() + 7)

    const urlData = {
      long_url,
      url_name: url_name || null,
      alias: alias || null,
      user_id: existing_user ? existing_user[0].id : null,
      short_code,
      shortened_url,
      created_at: created_at.toISOString(),
      expires_at: expires_at.toISOString(),
      expired: false,
      click_count: 0,
    }

    await db.insert(urls).values(urlData)

    return c.json({
      message: 'URL submitted successfully',
      status: 201,
      success: true,
      data: {
        shortened_url,
        original_url: long_url,
        expires_at: expires_at.toISOString(),
      },
    })
  } catch (error) {
    console.error('Server error:', error)
    return c.json({
      message: 'Internal Server Error',
      error: (error instanceof Error) ? error.message : 'Unknown error',
      status: 500,
      success: false,
    })
  }
})

app.use('/*', cors())
// app.route('/url', urls)

export type AppType = typeof app
export { app }