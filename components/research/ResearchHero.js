/**
 * Section 1 — Research hero: the headline and a first-person research-journey
 * intro, followed by a short disclosure. (The "Research across" / "Built
 * through" blocks and the tagline still exist in researchMeta — re-add them
 * below the disclosure to bring them back.)
 */
export default function ResearchHero({ meta }) {
  const intro = Array.isArray(meta.intro)
    ? meta.intro
    : meta.supporting
    ? [meta.supporting]
    : [];

  return (
    <header className="rhero" id="research">
      <div className="rhero__text">
        <p className="r-label">{meta.label}</p>
        <h1 className="rhero__q">{meta.question}</h1>

        {intro.map((para, i) => (
          <p className="rhero__support" key={i}>
            {para}
          </p>
        ))}

        {meta.disclosure ? (
          <p className="rhero__note">{meta.disclosure}</p>
        ) : null}
      </div>
    </header>
  );
}
