import { and, eq, or, sql } from 'drizzle-orm'
import { db } from '../../db'
import { urls, users } from '../../db/schema'

export async function getExistingUsers(userID: string) {
  return await db.select().from(users).where(eq(users.id, userID)).limit(1)
}

export async function getExistingUrl(longUrl: string, userID: string | null) {
  return await db
    .select()
    .from(urls)
    .where(and(eq(urls.userID, userID ?? '0'), eq(urls.longUrl, longUrl)))
    .limit(1)
}

export async function createUrl(
  name: string,
  longUrl: string,
  short: string,
  expiresAt: string,
  userID: string | null,
  alias: string,
) {
  await db
    .insert(urls)
    .values({
      clickCount: 0,
      createdAt: new Date().toISOString(),
      expired: false,
      expiresAt,
      longUrl,
      short,
      userID: userID ?? '0',
      alias,
      name,
    })
    .catch((error) => {
      console.error(error)
    })
  console.log('URL created')
}

export async function getUrls(short?: string) {
  if (short) {
    return await db
      .select()
      .from(urls)
      .where(or(eq(urls.alias, short), eq(urls.short, short)))
      .limit(10)
  }

  return await db.select().from(urls).limit(10)
}

export async function updateClicks(id: number) {
  await db
    .update(urls)
    .set({
      clickCount: sql`${urls.clickCount} + 1`,
    })
    .where(eq(urls.id, id))
}

export async function aliasAlreadyUsed(alias: string) {
  const res = await db.select().from(urls).where(eq(urls.alias, alias)).limit(1)

  return res.length > 0
}

export async function shortAlreadyUsed(short: string) {
  const res = await db.select().from(urls).where(eq(urls.short, short)).limit(1)

  return res.length > 0
}

export async function expireUrl(id: number) {
  await db
    .update(urls)
    .set({
      expired: true,
    })
    .where(eq(urls.id, id))
}