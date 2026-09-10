import ScientificDoodle from "./ScientificDoodle";

/**
 * Section 5 — At the bench. The research equivalent of Music's "Moments", but
 * much calmer: a thin frame, a small rotation, a scientific label and a
 * place/date line. Placeholder frames until real images are added.
 */
export default function AtTheBench({ photos }) {
  return (
    <section className="rbench" aria-labelledby="rbench-h">
      <h2 className="r-heading" id="rbench-h">
        At the bench
      </h2>

      <div className="rbench__grid">
        {photos.map((ph, i) => (
          <figure
            key={i}
            className="rbench__item"
            style={{ "--rot": `${ph.rot}deg` }}
          >
            <div className="rbench__frame">
              {ph.src ? (
                <img src={ph.src} alt={ph.label} loading="lazy" decoding="async" />
              ) : (
                <div className="rbench__ph" aria-hidden="true">
                  <ScientificDoodle name="scalebar" className="rbench__ph-mark" />
                  <span className="rbench__ph-tag">image</span>
                </div>
              )}
            </div>
            <figcaption className="rbench__cap">
              <span className="rbench__label">{ph.label}</span>
              {(ph.place || ph.date) && (
                <span className="rbench__meta">
                  {[ph.place, ph.date].filter(Boolean).join(" · ")}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
