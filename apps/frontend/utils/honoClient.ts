import { hc } from 'hono/client'
import type { AppType } from '../../weshrink-backend-server/src/index'

export const BASE_URL = 'http://localhost:3001'

export const client = hc<AppType>(BASE_URL)
