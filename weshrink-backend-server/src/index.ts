import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { nanoid } from 'nanoid'
import { zValidator } from '@hono/zod-validator'
import { createUrlFormSchema } from './lib/formschema'
import {
  aliasAlreadyUsed,
  createUrl,
  expireUrl,
  getExistingUrl,
  getExistingUsers,
  getUrls,
  shortAlreadyUsed,
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

    let url: {
      id: number
      name: string | null
      longUrl: string
      userID: string | null
      alias: string | null
      short: string
      expiresAt: string
      expired: boolean
      clickCount: number
      createdAt: string
    }

    try {
      url = (await getUrls(short))[0]
      console.log(url)
    } catch (error) {
      return c.json({
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
        url: null,
      })
    }

    if (!url) {
      return c.json({
        error: 'URL not found',
        status: 404,
        url: null,
      })
    }

    console.log(url)

    if (new Date(url.expiresAt) < new Date()) {
      await expireUrl(url.id)

      return c.json({
        error: 'URL has expired',
        status: 404,
        url: null,
      })
    }

    if (url.expired) {
      return c.json({
        error: 'URL has expired',
        status: 404,
        url: null,
      })
    }

    try {
      await updateClicks(url.id)
    } catch (error) {
      console.log(error)
      return c.json({
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
        url: null,
      })
    }
    console.log(url)

    return c.json({
      url,
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
          message: 'Error getting user',
        })
      }

      if (!existingUser[0]) {
        return c.json({
          message:
            "We couldn't find your user ID in our database. Please verify your credentials.",
          status: 404,
          success: false,
          short: '',
        })
      }
    }

    const existingUrl = await getExistingUrl(longUrl, userID)

    if (existingUrl[0]) {
      return c.json({
        message:
          'A short URL for this link has already been created. Please use a different URL or delete the existing one. In the meantime, here is the previously generated short URL.',
        status: 409,
        success: true,
        short: existingUrl[0].short,
      })
    }

    if (await aliasAlreadyUsed(alias)) {
      return c.json({
        message: 'This alias is already in use. Please choose a different one.',
        status: 409,
        success: false,
        short: '',
      })
    }

    let short

    do {
      short = nanoid(8)
    } while (await shortAlreadyUsed(short))

    try {
      await createUrl(urlName, longUrl, short, expiresAt, userID, alias)
    } catch (error) {
      return c.json({
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
        success: false,
        short: '',
        message: 'Error creating URL',
      })
    }
    return c.json({
      message: 'Your short URL has been successfully created.',
      status: 201,
      success: true,
      short: alias || short,
    })
  })

export type AppType = typeof app
export { app }
