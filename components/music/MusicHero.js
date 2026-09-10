import Doodle from "../Doodle";

/**
 * Section 1 — BARAKE intro.
 * Top row: the BARAKE wordmark + Instagram CTA beside the collage portrait.
 * Then the short artist identity, with marker marks around.
 */
export default function MusicHero({ data }) {
  return (
    <header className="mhero" id="barake">
      <Doodle name="crown" className="mhero__d mhero__d--crown" />

      <div className="mhero__top">
        <div className="mhero__id">
          <h1 className="mhero__name">BARAKE</h1>
          <p className="mhero__tag">
            Music <span aria-hidden="true">/</span> KW
          </p>

          <a
            className="mhero__ig"
            href={data.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <Doodle name="arrowNE" className="mhero__ig-arrow" />
            <span className="u-sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <figure className="mhero__portrait">
          <span className="mhero__portrait-tape" aria-hidden="true" />
          <img
            src="/music/barake-portrait.jpg"
            alt="Collage portrait of BARAKE — Karim in red stage light against a painted blue circle, with marker stars, a crown and event photos torn in around him"
            width={1000}
            height={1000}
          />
        </figure>
      </div>

      <p className="mhero__bio">{data.bio}</p>
      <Doodle name="wave" className="mhero__d mhero__d--wave" />
      <Doodle name="underline" className="mhero__d mhero__d--underline" />
    </header>
  );
}
