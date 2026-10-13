import Doodle from "../Doodle";

// same acid → lavender → cobalt run as the tour strips
const VARIANTS = ["acid", "lavender", "cobalt"];
const TILTS = [-2.2, 1.6, -1.2, 2.4, -1.8, 1.1];

function Stub({ show, index }) {
  const variant = show.star ? "gold" : VARIANTS[index % VARIANTS.length];
  const hasDay = /^\d{4}-\d{2}-\d{2}$/.test(show.when);
  const title = show.title ?? show.venue;

  return (
    <li
      className={`stub stub--${variant}`}
      style={{ "--tilt": `${TILTS[index % TILTS.length]}deg` }}
    >
      <span className="stub__date">{show.label}</span>
      <span className="stub__title">{title}</span>
      {show.role && <span className="stub__role">{show.role}</span>}
      <span className="stub__where">
        {show.title ? `${show.venue} · ${show.city}` : show.city}
      </span>
      {show.promoter && <span className="stub__promoter">{show.promoter}</span>}
      {hasDay && <time className="u-sr-only" dateTime={show.when} />}
      <span className="stub__stamp" aria-hidden="true">
        Played
      </span>
      {show.star && (
        <>
          <Doodle name="star" className="stub__star" fill="currentColor" strokeWidth={1.5} />
          <span className="u-sr-only"> — a highlight</span>
        </>
      )}
    </li>
  );
}

/**
 * Section 4 — every show already played, as torn and stamped ticket stubs,
 * grouped by year. On phones only the latest year shows until expanded.
 */
export default function PlayedShows({ years }) {
  const shows = years.flatMap((y) => y.shows);
  const cities = new Set(shows.map((s) => s.city)).size;

  return (
    <section className="played" aria-labelledby="played-h">
      <h2 className="m-heading" id="played-h">
        Played
        <span className="m-heading__note">thank you for coming</span>
      </h2>
      <p className="played__count">
        <strong>{shows.length}</strong> shows
        <span aria-hidden="true"> · </span>
        <strong>{cities}</strong> cities
      </p>

      <input type="checkbox" id="played-more" className="played__toggle u-sr-only" />

      {years.map(({ year, shows }, y) => (
        <div key={year} className={`played__year${y > 0 ? " played__year--older" : ""}`}>
          <h3 className="played__yearh">{year}</h3>
          <ol className="played__list">
            {shows.map((show, i) => (
              <Stub key={`${show.when}-${show.venue}`} show={show} index={i} />
            ))}
          </ol>
        </div>
      ))}

      {years.length > 1 && (
        <label htmlFor="played-more" className="m-cta played__more">
          <span className="played__more-open">Earlier years</span>
          <span className="played__more-close">Show less</span>
        </label>
      )}
    </section>
  );
}
