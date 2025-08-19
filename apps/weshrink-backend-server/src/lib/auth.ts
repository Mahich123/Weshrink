import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index"; 
import * as schema from '../db/schema'
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema
    }),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID as string, 
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
          redirectURI: 'http://localhost:3001/api/auth/callback/github'
        }, 
        google: { 
          clientId: process.env.GOOGLE_CLIENT_ID as string, 
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
          redirectURI: 'http://localhost:3001/api/auth/callback/google'
      }, 
      }, 
      baseURL: 'http://localhost:3001',
      trustedOrigins: ['http://localhost:3000'],
});