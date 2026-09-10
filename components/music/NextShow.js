import Doodle from "../Doodle";

/**
 * Section 2 — Next show. Deliberately heavier than a tour row: a painted
 * cobalt strip, a big date, a hand-drawn arrow leading to TICKETS.
 */
export default function NextShow({ show }) {
  const hasTickets = show.status === "tickets" && show.ticketUrl;

  return (
    <section className="nextshow" aria-labelledby="nextshow-h">
      <p className="m-eyebrow" id="nextshow-h">
        Next show
        <Doodle name="star" className="m-eyebrow__d" />
      </p>

      <div className="nextshow__card">
        <Doodle name="wave" className="nextshow__wave" />
        <p className="nextshow__date">{show.date}</p>

        <div className="nextshow__meta">
          <p className="nextshow__venue">{show.venue}</p>
          <p className="nextshow__city">{show.city}</p>
          <p className="nextshow__full">
            <time>{show.fullDate}</time>
          </p>
        </div>

        <div className="nextshow__act">
          <Doodle name="arrowR" className="nextshow__arrow" />
          {hasTickets ? (
            <a
              className="m-cta m-cta--big"
              href={show.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tickets
              <Doodle name="arrowNE" className="m-cta__arrow" />
              <span className="u-sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span className="m-cta m-cta--big m-cta--pending" title="Tickets on sale soon">
              Tickets
              <span className="u-sr-only"> — on sale soon</span>
              <Doodle name="arrowNE" className="m-cta__arrow" />
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
