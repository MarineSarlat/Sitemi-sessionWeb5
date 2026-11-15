import { signOutAction } from "@/app/_actions/authActions";
import { getServerSession } from "@/lib/auth";
import "./Profil.css";

const Profil = async () => {
  const session = await getServerSession();
  if (!session) return null;

  const nom = session.user.name;


  const initiales = nom
    .split(" ")
    .map((mot) => mot[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="profil">
      <div className="profil-initiales" title={nom}>
        {initiales}
      </div>
      <span>{nom}</span>
      <form action={signOutAction}>
        <button type="submit" className="profil-deconnexion">
          Déconnexion
        </button>
      </form>
    </div>
  );
};
export default Profil;