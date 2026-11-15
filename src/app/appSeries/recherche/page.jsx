import { getSeriesRecherche } from "../../_data/series";
import { FormRecherche } from "@/app/_components/RechercheSeries/FormRecherche";
import { getServerSession } from "@/lib/auth";
import { getFavoriteSlugs } from "@/app/_data/favoris";


const HomeR = async () => {

  const listrecherche = await getSeriesRecherche();
  const session = await getServerSession();
  const slugsFavoris = session ? await getFavoriteSlugs(session.user.id) : [];

  return (
    <>
    <FormRecherche favoris={slugsFavoris} />
    </>
  );
};
export default HomeR;







