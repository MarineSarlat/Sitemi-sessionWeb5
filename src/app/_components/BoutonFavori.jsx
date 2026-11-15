"use client";

import { useState } from "react";
import { ajouterFavoriAction } from "@/app/_actions/favoriActions";
import "./BoutonFavori.css";


const BoutonFavori = ({ serie, source, deja }) => {
  const [aime, setAime] = useState(false);
  const estAime = deja || aime; // déjà en favori OU vient d'être liké

  const ajouter = async (formData) => {
    const reussi = await ajouterFavoriAction(formData);
    setAime(reussi);
  };

  return (
    <form action={ajouter}>
      <input type="hidden" name="serieId" value={serie.slug} />
      <input type="hidden" name="title" value={serie.title} />
      <input type="hidden" name="image" value={serie.poster ?? ""} />
      <input type="hidden" name="source" value={source} />

      <button type="submit" className={estAime ? "bouton-favori aime" : "bouton-favori"}>
        {estAime ? "♥ Ajouté !" : "♡ Ajouter aux favoris"}
      </button>
    </form>
  );
};
export default BoutonFavori;