import ScientificDoodle from "./ScientificDoodle";
import { bioData } from "../../data/bio";

/**
 * Section 6 — the ending. One statement, two understated links.
 * Curiosity before credentials.
 */
export default function ResearchEnding({ meta }) {
  return (
    <section className="rend" aria-labelledby="rend-h">
      <p className="r-label" id="rend-h">
        {meta.endingKicker}
      </p>
      <p className="rend__statement">
        &ldquo;{meta.endingStatement}&rdquo;
        <ScientificDoodle name="underline" className="rend__rule" />
      </p>

      <div className="rend__links">
        <a
          className="r-textlink"
          href={bioData.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
          <ScientificDoodle name="arrow" className="r-textlink__arrow r-textlink__arrow--up" />
          <span className="u-sr-only"> (PDF, opens in a new tab)</span>
        </a>
        <a className="r-textlink r-textlink--muted" href="#rq-h">
          Back to questions
          <ScientificDoodle
            name="arrow"
            className="r-textlink__arrow r-textlink__arrow--up-only"
          />
        </a>
      </div>
    </section>
  );
}
