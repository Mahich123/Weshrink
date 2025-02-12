import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { nanoid } from 'nanoid'
import { zValidator } from '@hono/zod-validator'
import { createUrlFormSchema } from './lib/formschema'
import {
  createUrl,
  getExistingUrl,
  getExistingUsers,
  getUrlByShort,
  getUrls,
  updateClicks,
} from './routes/urls/urls'

const app = new Hono()
  .use(
    '*',
    cors({
      origin: 'http://localhost:3000',
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    }),
  )

  .get('/urls/:short', async (c) => {
    const { short } = c.req.param()

    console.log(short)

    let url

    try {
      url = await getUrlByShort(short)
      console.log(url)
    } catch (error) {
      return c.json({
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
        url: null,
      })
    }

    if (!url[0]) {
      return c.json({
        error: 'URL not found',
        status: 404,
        url: null,
      })
    }
    console.log(url[0])

    try {
      await updateClicks(url[0].id)
    } catch (error) {}
    console.log(url[0])

    return c.json({
      url: url[0].longUrl,
      status: 200,
      success: true,
      message: 'URL found',
    })
  })

  .post('/urls', zValidator('json', createUrlFormSchema), async (c) => {
    const { alias, longUrl, urlName, userID, expiresAt } = c.req.valid('json')

    console.log({ alias, longUrl, urlName, userID, expiresAt })

    if (userID) {
      let existingUser: {
        id: string
        name: string | null
        email: string | null
        emailVerified: Date | null
        image: string | null
      }[] = []

      try {
        existingUser = await getExistingUsers(userID)
      } catch (error) {
        return c.json({
          error: error instanceof Error ? error.message : 'Unknown error',
          status: 500,
          success: false,
          short: '',
        })
      }

      if (!existingUser[0]) {
        return c.json({
          message: 'User not found',
          status: 404,
          success: false,
          short: '',
        })
      }
    }

    const existingUrl = await getExistingUrl(longUrl, userID)

    if (existingUrl[0]) {
      return c.json({
        message: 'URL already exists',
        status: 409,
        success: false,
        short: existingUrl[0].short,
      })
    }

    const short = nanoid(8)

    try {
      await createUrl(urlName, longUrl, short, expiresAt, userID, alias)
    } catch (error) {
      return c.json({
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
        success: false,
        short: '',
      })
    }
    return c.json({
      message: 'URL submitted successfully',
      status: 201,
      success: true,
      short,
    })
  })

export type AppType = typeof app
export { app }
