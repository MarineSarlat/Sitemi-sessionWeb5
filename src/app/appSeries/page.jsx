import { FormRecherche } from "@/app/_components/RechercheSeries/FormRecherche";
import { ListPopular } from "@/app/_components/SeriesPopulaires/ListPopular";
import { getAllPopularSeries } from "@/app/_data/series";
import { getFavoriteSlugs } from "@/app/_data/favoris";
import { getServerSession } from "@/lib/auth";
import "./accueil.css";

const Accueil = async () => {
  const series = await getAllPopularSeries();
  const session = await getServerSession();
  const slugsFavoris = session ? await getFavoriteSlugs(session.user.id) : [];

  return (
    <div className="accueil">
      <section className="accueil-recherche">
        <h1 className="titre-section">Rechercher</h1>
        <FormRecherche favoris={slugsFavoris} />
      </section>

      <section className="accueil-populaires">
        <h2 className="titre-section">Séries populaires</h2>
        <ListPopular liste={series} favoris={slugsFavoris} />
      </section>
    </div>
  );
};
export default Accueil;