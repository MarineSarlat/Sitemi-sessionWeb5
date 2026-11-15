
import { Popular } from "./Popular";
import "./ListPopular.css";

export const ListPopular = async ({ liste, favoris }) => {
  return (
    <section>
      <div className="ListePopular">
        {liste.map((series) => (
          <Popular
            key={series.id}
            title={series.title}
            year={series.year}
            poster={series.poster}
            slug={series.slug}
            favori={favoris.includes(series.slug)}
          />
        ))}
      </div>
    </section>
  );
};