import TicketStub from "./TicketStub";

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
              <TicketStub key={`${show.when}-${show.venue}`} show={show} index={i}>
                <span className="stub__stamp" aria-hidden="true">
                  Played
                </span>
              </TicketStub>
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
