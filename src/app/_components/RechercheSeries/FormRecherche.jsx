"use client";

import { useState } from "react";
import Link from "next/link";
import { ListRecherche } from "./ListRecherche";
import { rechercheAction } from "@/app/_actions/seriesActions";
import "./FormRecherche.css";

export const FormRecherche = ({ favoris }) => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [resultats, setResultats] = useState([]);

  const lancerRecherche = async (formData) => {
    const data = await rechercheAction(formData);
    setUtilisateurs(data.utilisateurs);
    setResultats(data.series);
  };

  const annulerRecherche = () => {
    setUtilisateurs([]);
    setResultats([]);
  };

  const rechercheActive = utilisateurs.length > 0 || resultats.length > 0;

  return (
   
  <>
    <form action={lancerRecherche} className="form-recherche">
      <div className="champ-recherche">
        <input
          type="text"
          name="terme"
          placeholder="Rechercher une série ou un utilisateur..."
        />
        {rechercheActive && (
          <button
            type="reset"
            onClick={annulerRecherche}
            className="annuler-recherche"
            title="Annuler la recherche"
          >
            ✕
          </button>
        )}
      </div>
      <button type="submit">Rechercher</button>
    </form>

    {utilisateurs.length > 0 && (
      <section className="resultats-section">
        <h2 className="titre-section">Utilisateurs</h2>
        <ul className="liste-utilisateurs">
          {utilisateurs.map((u) => ( 
            <li key={u.id}>
              <Link href={`/appSeries/utilisateurs/${u.id}`} className="utilisateur-puce">
                <span className="utilisateur-initiale">
                  {u.name[0].toUpperCase()}
                </span>
                {u.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )}

    {resultats.length > 0 && (
      <section className="resultats-section">
        <h2 className="titre-section">Séries</h2>
        <ListRecherche listeR={resultats} favoris={favoris} />
      </section>
    )}
  </>
);

};