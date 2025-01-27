import { and, eq } from 'drizzle-orm'
import { db } from '../../db'
import { urls, users } from '../../db/schema'

export async function getExistingUsers(userID: string) {
  return await db.select().from(users).where(eq(users.id, userID)).limit(1)
}

export async function getExistingUrl(longUrl: string, userID: string) {
  return await db
    .select()
    .from(urls)
    .where(and(eq(urls.userID, userID), eq(urls.longUrl, longUrl)))
    .limit(1)
}

export async function createUrl(
  longUrl: string,
  short: string,
  expiresAt: string,
  userID: string | null,
  alias: string | null,
) {
  await db.insert(urls).values({
    clickCount: 0,
    createdAt: new Date().toISOString(),
    expired: false,
    expiresAt,
    longUrl,
    short,
    userID,
    alias,
  })
}
