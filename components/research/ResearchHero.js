/**
 * Section 1 — Research hero, an editorial split: the headline and a
 * first-person research-journey intro on the left, the scientific hero
 * visual on the right. (The "Research across" / "Built through" blocks and
 * the tagline still exist in researchMeta — re-add them below the disclosure
 * to bring them back.)
 *
 * The visual is one tall transparent PNG (/public/research/research-hero.png)
 * — a single continuous composition running retina / OCT / corneal angle /
 * molecular biology down into SB4 / proliferative vitreoretinopathy / mRNA.
 * It sits directly on the page background: no box, border, or shadow. The
 * column stretches to the text height; the artwork flows the full length.
 * Labels are baked into the artwork.
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

      <div className="rhero__vis">
        <img
          className="rhero__vis-img"
          src="/research/research-hero.png"
          alt="Scientific composition — retinal vasculature, an OCT macula scan, corneal angle geometry, a molecular network, the SB4 molecule, proliferative vitreoretinopathy fibrosis, and an mRNA helix"
          width={765}
          height={1360}
          decoding="async"
        />
      </div>
    </header>
  );
}
