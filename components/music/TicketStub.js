import Doodle from "../Doodle";

// same acid → lavender → cobalt run as the next-show card
const VARIANTS = ["acid", "lavender", "cobalt"];
const TILTS = [-2.2, 1.6, -1.2, 2.4, -1.8, 1.1];

/**
 * One show as a paper ticket stub. Shared by the tour dates (children = the
 * tickets button) and the played archive (children = the PLAYED stamp).
 */
export default function TicketStub({ show, index, className = "", children }) {
  const variant = show.star ? "gold" : VARIANTS[index % VARIANTS.length];
  const hasDay = /^\d{4}-\d{2}-\d{2}$/.test(show.when);
  const title = show.title ?? show.venue;

  return (
    <li
      className={`stub stub--${variant} ${className}`}
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
      {children}
      {show.star && (
        <>
          <Doodle name="star" className="stub__star" fill="currentColor" strokeWidth={1.5} />
          <span className="u-sr-only"> — a highlight</span>
        </>
      )}
    </li>
  );
}
