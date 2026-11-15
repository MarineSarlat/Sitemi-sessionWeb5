import { getSeriesBySlug } from "../../../_data/series";
import Link from "next/link";
import { notFound } from "next/navigation";
import BandeAnnonce from "@/app/_components/BandeAnnonce";
import "./details.css";

const DetailsSeries = async ({ params }) => {
  const { slug } = await params;
  const trouveSeries = await getSeriesBySlug(slug);

  if (!trouveSeries) {
    notFound();
  }

  const terminee = trouveSeries.status === "ended";

  return (
    <section className="page-details">
      <Link href="/appSeries" className="BackButton">
        ← Retour à l'accueil
      </Link>

      <article className="details-carte">
        <img
          src={trouveSeries.poster}
          alt={trouveSeries.title}
          className="details-affiche"
        />

        <div className="details-infos">
          <h1>{trouveSeries.title}</h1>
          <p className="details-annee">{trouveSeries.year}</p>

          <span className={terminee ? "details-statut terminee" : "details-statut"}>
            {terminee ? "Série terminée" : "Série en cours"}
          </span>

          <p className="details-synopsis">{trouveSeries.overview}</p>
        </div>
      </article>

      {trouveSeries.trailer && (
        <section className="details-trailer">
          <h2 className="titre-section">Bande-annonce</h2>
          <BandeAnnonce lien={trouveSeries.trailer} />
        </section>
      )}
    </section>
  );
};
export default DetailsSeries;