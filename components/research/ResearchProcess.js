import ScientificDoodle from "./ScientificDoodle";

/**
 * Section 3 — how research moves from an idea to evidence.
 * QUESTION → MODEL → PERTURB → MEASURE → INTERPRET.
 * Horizontal on desktop, vertical on mobile. Cobalt marks the PERTURB step
 * (the intervention), per the page's colour grammar.
 */
export default function ResearchProcess({ steps }) {
  return (
    <section className="rprocess" aria-labelledby="rprocess-h">
      <h2 className="r-heading" id="rprocess-h">
        From question to experiment
      </h2>

      <ol className="rprocess__flow">
        {steps.map((s, i) => (
          <li key={s.key} className={`rstep rstep--${s.accent}`}>
            <span className="rstep__label">{s.label}</span>
            <span className="rstep__line">{s.line}</span>
            {i < steps.length - 1 && (
              <ScientificDoodle name="arrow" className="rstep__arrow" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
