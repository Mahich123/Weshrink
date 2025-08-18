import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from './src/db'
import { AuthConfig } from '@hono/auth-js'

export const getAuthConfig = (): AuthConfig => ({
  secret: process.env.AUTH_SECRET,
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  trustHost: true,
  callbacks: {
    async redirect() {
      const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
      return `${baseUrl}/dashboard`
    },
  },
})
