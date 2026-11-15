"use client";

import { useActionState } from "react";
import { signinAction } from "@/app/_actions/authActions";
import ErrorMsg from "./ErrorMsg";

const AuthLoginForm = () => {
  const [state, formAction, isPending] = useActionState(signinAction, {
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
      </div>

      <button type="submit" className="auth-bouton" disabled={isPending}>
        {isPending ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
};
export default AuthLoginForm;