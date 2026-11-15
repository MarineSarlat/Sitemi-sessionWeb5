"use client";

import { useActionState } from "react";
import { signupAction } from "@/app/_actions/authActions";
import ErrorMsg from "./ErrorMsg";

const AuthSignupForm = () => {
  const [state, formAction, isPending] = useActionState(signupAction, {
    erreur: null,
  });

  return (
    <form action={formAction}>
      <ErrorMsg message={state.erreur} />

      <div className="auth-champs">
        <div>
          <label htmlFor="fld_email">Entrez votre courriel :</label>
          <input type="text" id="fld_email" placeholder="Votre courriel" name="email" />
        </div>
        <div>
          <label htmlFor="fld_pwd">Entrez votre mot de passe :</label>
          <input type="password" id="fld_pwd" placeholder="Votre mot de passe" name="password" />
        </div>
        <div>
          <label htmlFor="fld_username">Entrez votre nom d'utilisateur :</label>
          <input type="text" id="fld_username" placeholder="Votre nom d'utilisateur" name="username" />
        </div>
      </div>

      <button type="submit" className="auth-bouton" disabled={isPending}>
        {isPending ? "Création..." : "Créer mon compte"}
      </button>
    </form>
  );
};
export default AuthSignupForm;