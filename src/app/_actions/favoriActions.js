"use server";

import { getServerSession } from "@/lib/auth";
import { addFavorite } from "@/app/_data/favoris";
import { revalidatePath } from "next/cache";

export const ajouterFavoriAction = async (formData) => {
  const session = await getServerSession();
  if (!session) return false; // pas connecté

  const serieId = formData.get("serieId");
  const title = formData.get("title");
  const image = formData.get("image");
  const source = formData.get("source");

 await addFavorite({
  userId: session.user.id,
  serieId: serieId,
  title: title,
  image: image,
  source: source,
});

  revalidatePath("/appSeries", "layout");
  return true;
};