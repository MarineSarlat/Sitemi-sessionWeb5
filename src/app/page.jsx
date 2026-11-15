import Auth from "./_components/Authentification/Auth";

export default async function Home() {
  return (
    <div className="auth-page">
      <div className="auth-carte">
        <h1>Bienvenue au ciné-club des séries</h1>

        <Auth />
      </div>
    </div>
  );
}