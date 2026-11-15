"use server";

import { getSeriesRecherche } from "@/app/_data/series";
import { searchUsersByName } from "@/app/_data/users";

export const rechercheAction = async (formData) => {
  const terme = formData.get("terme");

  if (!terme || !terme.trim()) {
    return { utilisateurs: [], series: [] };
  }

  const utilisateurs = await searchUsersByName(terme.trim());
  const series = await getSeriesRecherche(terme.trim());

  return { utilisateurs, series };
};