import "server-only";
import { db } from "@/db";
import { listLike } from "@/db/schema/schema";
import { eq } from "drizzle-orm";


export const getListLikesCount = async (ownerId) => {
  const likes = await db
    .select()
    .from(listLike)
    .where(eq(listLike.ownerId, ownerId));
  return likes.length;
};

export const addListLike = async ({ likerId, ownerId }) => {
  await db.insert(listLike).values({ likerId, ownerId });
};