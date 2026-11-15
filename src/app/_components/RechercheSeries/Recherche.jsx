import "../SeriesPopulaires/Popular.css";
import Link from "next/link";
import BoutonFavori from "@/app/_components/BoutonFavori";

export const Recherche = ({ slug, title, poster, year, favori }) => {
  return (
    <div>
      <Link href={`/appSeries/detailsSeries/${slug}`}>
        <div className="Popular">
          <img src={poster} alt={title} />
          <h2>{title}</h2>
          <p>{year}</p>
        </div>
      </Link>
      <BoutonFavori serie={{ slug, title, poster }} source="search" deja={favori} />
    </div>
  );
};

