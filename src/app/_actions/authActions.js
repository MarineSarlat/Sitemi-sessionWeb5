"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signupAction = async (etatPrecedent, formData) => {
  const email = formData.get("email");
  const name = formData.get("username");
  const password = formData.get("password");

  if (!email || !name || !password) {
    return { erreur: "Veuillez remplir tous les champs." };
  }

  // un courriel valide contient un @ suivi d'un point : x@y.z
  if (!email.includes("@") || !email.includes(".")) {
    return { erreur: "Votre adresse courriel n'est pas valide." };
  }

  try {
    await auth.api.signUpEmail({
      body: { name, email, password },
    });
  } catch (err) {
    return {
      erreur:
        "Impossible de créer le compte. Vérifiez votre courriel (peut-être déjà utilisé) et votre mot de passe (8 caractères minimum).",
    };
  }

  redirect("/appSeries"); // après le try/catch, jamais dedans
};

export const signinAction = async (etatPrecedent, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { erreur: "Veuillez remplir tous les champs." };
  }

  if (!email.includes("@") || !email.includes(".")) {
    return { erreur: "Votre adresse courriel n'est pas valide." };
  }

  try {
    await auth.api.signInEmail({
      body: { email, password, rememberMe: true },
      headers: await headers(),
    });
  } catch (err) {
    return { erreur: "Courriel ou mot de passe invalide." };
  }

  redirect("/appSeries");
};
export const signOutAction = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/"); // 
};
