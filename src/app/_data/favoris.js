import "server-only";
import { db } from "@/db";
import { serieLike } from "@/db/schema/schema";
import { eq, and, desc } from "drizzle-orm";

export const getFavoritesByUser = async (userId) => {
  const favoris = await db
    .select()
    .from(serieLike)
    .where(eq(serieLike.userId, userId))
    .orderBy(desc(serieLike.createdAt));
  return favoris;
};

export const addFavorite = async ({ userId, serieId, title, image, source }) => {
  
  const existe = await db
    .select()
    .from(serieLike)
    .where(and(eq(serieLike.userId, userId), eq(serieLike.serieId, serieId)));

  if (existe.length > 0) return; 

  await db.insert(serieLike).values({ userId, serieId, title, image, source });
};

export const getFavoriteSlugs = async (userId) => {
  const favoris = await db
    .select({ serieId: serieLike.serieId })
    .from(serieLike)
    .where(eq(serieLike.userId, userId));
  return favoris.map((f) => f.serieId);
};