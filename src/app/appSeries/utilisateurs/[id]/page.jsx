import Link from "next/link";
import { notFound } from "next/navigation";
import { getServerSession } from "@/lib/auth";
import { getUserById } from "@/app/_data/users";
import { getFavoritesByUser } from "@/app/_data/favoris";
import { getListLikesCount } from "@/app/_data/likes";
import BoutonLikeListe from "@/app/_components/BoutonLikeListe";
import "@/app/_components/SeriesPopulaires/Popular.css";
import "@/app/_components/SeriesPopulaires/ListPopular.css";
import "./utilisateur.css";

const PageUtilisateur = async ({ params }) => {
  const { id } = await params;

  const utilisateur = await getUserById(id);
  if (!utilisateur) notFound();

  const session = await getServerSession();
  const favoris = await getFavoritesByUser(id);
  const nbLikes = await getListLikesCount(id);

  const estMaListe = session?.user.id === id;

  return (
     <section className="page-utilisateur">
    <Link href="/appSeries" className="BackButton">
      ← Retour à l'accueil
    </Link>

    <header className="entete-utilisateur">

      <div className="entete-infos">
        <h1>{utilisateur.name}</h1>
        <p className="entete-likes">
          ♥ {nbLikes} {nbLikes > 1 ? "likes" : "like"}
        </p>
      </div>

      {!estMaListe && <BoutonLikeListe ownerId={id} />}
    </header>

    <h2 className="titre-section">Ses séries favorites</h2>

    {favoris.length === 0 && <p>Cet utilisateur n'a pas encore de favoris.</p>}


      <div className="ListePopular">
        {favoris.map((fav) => (
          <Link key={fav.id} href={`/appSeries/detailsSeries/${fav.serieId}`}>
            <div className="Popular">
              <img src={fav.image} alt={fav.title} />
              <h2>{fav.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default PageUtilisateur;