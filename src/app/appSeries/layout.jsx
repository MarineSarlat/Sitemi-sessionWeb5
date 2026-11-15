import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth";
import { getFavoritesByUser } from "@/app/_data/favoris";
import "./layout.css";
import Profil from "@/app/_components/Authentification/Profil";

const AppSeriesLayout = async ({ children }) => {
  const session = await getServerSession();
  if (!session) redirect("/"); // pas connecté : retour à l'accueil

  const favoris = await getFavoritesByUser(session.user.id);

  return (
    <>
      <Profil />
      <div className="appSeries-layout">
        

        <aside className="favoris-liste">
          <h2>Mes favoris</h2>

          {favoris.length === 0 && <p>Aucun favori pour l'instant.</p>}

          {favoris.map((fav) => (
            <Link
              key={fav.id}
              href={`/appSeries/detailsSeries/${fav.serieId}`}
              className="favori-item"
            >
              <img src={fav.image} alt={fav.title} />
              <span>{fav.title}</span>
            </Link>
          ))}
        </aside>
        <main>{children}</main>
      </div>
      
    </>
  );
};
export default AppSeriesLayout;