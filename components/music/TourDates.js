import Doodle from "../Doodle";

// matches the painted strips on the Fall 2026 flyer: acid → lavender → cobalt
const VARIANTS = ["acid", "lavender", "cobalt"];
// gentle, fixed tilts so the column reads as pinned strips, not a table
const TILTS = [-0.7, 0.6, -0.5, 0.8, -0.6, 0.5, -0.8, 0.6];

function TourDateRow({ item, index }) {
  const variant = VARIANTS[index % VARIANTS.length];
  const hasTickets = item.status === "tickets" && item.ticketUrl;
  const isTicketed = item.status === "tickets";

  return (
    <li
      className={`trow trow--${variant}`}
      style={{ "--tilt": `${TILTS[index % TILTS.length]}deg` }}
    >
      <span className="trow__date">{item.date}</span>

      <span className="trow__meta">
        <span className="trow__venue">{item.venue}</span>
        <span className="trow__city">{item.city}</span>
        <time className="u-sr-only">{item.fullDate}</time>
      </span>

      {hasTickets ? (
        <a
          className="m-cta trow__cta"
          href={item.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tickets
          <Doodle name="arrowNE" className="m-cta__arrow" />
          <span className="u-sr-only"> (opens in a new tab)</span>
        </a>
      ) : isTicketed ? (
        <span className="m-cta trow__cta m-cta--pending" title="Tickets on sale soon">
          Tickets
          <span className="u-sr-only"> — on sale soon</span>
          <Doodle name="arrowNE" className="m-cta__arrow" />
        </span>
      ) : (
        <span className="trow__soon">Details soon</span>
      )}

      <Doodle name="star" className="trow__star" />
    </li>
  );
}

/**
 * Section 3 — Fall 2026 tour dates as painted strips (not a table).
 */
export default function TourDates({ dates }) {
  return (
    <section className="tour" aria-labelledby="tour-h">
      <h2 className="m-heading" id="tour-h">
        Fall 2026
        <span className="m-heading__note">tour dates</span>
      </h2>

      <ol className="tour__list">
        {dates.map((item, i) => (
          <TourDateRow key={`${item.date}-${item.venue}`} item={item} index={i} />
        ))}
      </ol>
    </section>
  );
}
