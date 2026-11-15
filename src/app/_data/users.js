import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { eq, like } from "drizzle-orm";
import "server-only";

export const getAllUsers = async () => {
  const users = await db.select().from(user).orderBy(user.name).limit(10);
  return users;
};

export const searchUsersByName = async (terme) => {
  const users = await db
    .select({ id: user.id, name: user.name })
    .from(user)
    .where(like(user.name, `%${terme}%`))
    .orderBy(user.name)
    .limit(10);
  return users;
};

export const getUserById = async (userId) => {
  const result = await db
    .select({ id: user.id, name: user.name })
    .from(user)
    .where(eq(user.id, userId));
  return result[0]; 
};