import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { user } from "./auth-schema.js";

export const serieLike = sqliteTable("serie_like", {
  id: integer().primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  serieId: text("serie_id").notNull(), 
  title: text().notNull(),
  image: text(),
  source: text().notNull().default("popular"), 
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`,),
});

export const listLike = sqliteTable("list_like", {
  id: integer().primaryKey({ autoIncrement: true }),
  likerId: text("liker_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  ownerId: text("owner_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(CURRENT_TIMESTAMP)`,),
});