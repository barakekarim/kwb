import Doodle from "../Doodle";
import TicketStub from "./TicketStub";

function TicketButton({ show }) {
  if (show.status === "tickets" && show.ticketUrl) {
    return (
      <a
        className="m-cta stub__cta"
        href={show.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tickets
        <Doodle name="arrowNE" className="m-cta__arrow" />
        <span className="u-sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <span className="m-cta stub__cta m-cta--pending" title="Tickets on sale soon">
      {show.status === "tickets" ? "Tickets" : "Details soon"}
      <span className="u-sr-only"> — on sale soon</span>
    </span>
  );
}

/**
 * Section 3 — upcoming Fall 2026 dates as fresh ticket stubs, in the same
 * format as the played archive below, with a tickets button in place of
 * the PLAYED stamp.
 */
export default function TourDates({ dates }) {
  return (
    <section className="tour" aria-labelledby="tour-h">
      <h2 className="m-heading" id="tour-h">
        Fall 2026
        <span className="m-heading__note">tour dates</span>
      </h2>

      <ol className="played__list">
        {dates.map((item, i) => {
          const show = {
            ...item,
            when: new Date(`${item.fullDate} UTC`).toISOString().slice(0, 10),
            label: item.date,
            city: item.city.replace(/, USA$/, ""),
          };
          return (
            <TicketStub
              key={`${item.date}-${item.venue}`}
              show={show}
              index={i}
              className="stub--upcoming"
            >
              <TicketButton show={item} />
            </TicketStub>
          );
        })}
      </ol>
    </section>
  );
}
