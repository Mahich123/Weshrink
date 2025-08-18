import { app } from '../index'
import { getRuntimeKey } from 'hono/adapter'
import { env } from '../lib/env'

const runtime = getRuntimeKey()

if (runtime !== 'bun') {
  throw new Error('Bun runtime only')
}

console.log(`listening on port ${process.env.PORT}`)
export default {
  port: env.PORT ?? 3000,
  fetch: app.fetch,
}
