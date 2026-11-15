"use client";

import { useState } from "react";
import { likerListeAction } from "@/app/_actions/likesActions";
import "./BoutonFavori.css";

const BoutonLikeListe = ({ ownerId }) => {
  const [aime, setAime] = useState(false);

  const liker = async (formData) => {
    const reussi = await likerListeAction(formData);
    setAime(reussi);
    
  };

  return (
    <form action={liker}>
      <input type="hidden" name="ownerId" value={ownerId} />
      <button type="submit" className={aime ? "bouton-favori aime" : "bouton-favori"}>
        {aime ? "♥ Merci !" : "♡ J'aime cette liste"}
      </button>
    </form>
  );
};
export default BoutonLikeListe;