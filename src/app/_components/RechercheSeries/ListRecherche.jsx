import { Recherche } from "./Recherche";
import "../SeriesPopulaires/ListPopular.css";


export const ListRecherche = ({ listeR, favoris }) => {
  return (
    <section>
      <div className="ListePopular">
        {listeR.map((seriesR) => (
          <Recherche
            key={seriesR.id}
            title={seriesR.title}
            year={seriesR.year}
            poster={seriesR.poster}
            slug={seriesR.slug}
            favori={favoris.includes(seriesR.slug)}
          />
        ))}
      </div>
    </section>
  );
};