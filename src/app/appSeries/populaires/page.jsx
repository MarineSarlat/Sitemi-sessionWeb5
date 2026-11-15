
import { ListPopular } from "../../_components/SeriesPopulaires/ListPopular";
import { getAllPopularSeries } from "../../_data/series";
import { getServerSession } from "@/lib/auth";
import { getFavoriteSlugs } from "@/app/_data/favoris";

const Home = async () => {

  const listpopu = await getAllPopularSeries();
  const session = await getServerSession();
  const slugsFavoris = session ? await getFavoriteSlugs(session.user.id) : [];

  return (

   <ListPopular liste={listpopu} favoris={slugsFavoris} />
  );
};
export default Home;


