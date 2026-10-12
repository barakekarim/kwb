import Doodle from "../Doodle";

// same acid → lavender → cobalt run as the tour strips, faded once used
const VARIANTS = ["acid", "lavender", "cobalt"];
const TILTS = [-2.2, 1.6, -1.2, 2.4, -1.8, 1.1];

/**
 * Section 4 — shows already played, as torn and stamped ticket stubs.
 */
export default function PlayedShows({ shows }) {
  return (
    <section className="played" aria-labelledby="played-h">
      <h2 className="m-heading" id="played-h">
        Played
        <span className="m-heading__note">thank you for coming</span>
      </h2>

      <ol className="played__list">
        {shows.map((show, i) => (
          <li
            key={`${show.date}-${show.venue}`}
            className={`stub stub--${VARIANTS[i % VARIANTS.length]}`}
            style={{ "--tilt": `${TILTS[i % TILTS.length]}deg` }}
          >
            <span className="stub__date">{show.date}</span>
            <span className="stub__venue">{show.venue}</span>
            <span className="stub__city">{show.city}</span>
            <time className="u-sr-only">{show.fullDate}</time>
            <span className="stub__stamp" aria-hidden="true">
              Played
            </span>
            <Doodle name="star" className="stub__star" />
          </li>
        ))}
      </ol>
    </section>
  );
}
