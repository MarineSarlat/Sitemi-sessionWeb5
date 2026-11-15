"use server";

import { getServerSession } from "@/lib/auth";
import { addListLike } from "@/app/_data/likes";
import { revalidatePath } from "next/cache";

export const likerListeAction = async (formData) => {
  const session = await getServerSession();
  if (!session) return false;

  const ownerId = formData.get("ownerId");
  if (!ownerId) return false;

  await addListLike({ likerId: session.user.id, ownerId });

  revalidatePath(`/appSeries/utilisateurs/${ownerId}`);
  return true;
};