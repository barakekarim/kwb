import ScientificDoodle from "./ScientificDoodle";
import ResearchVisual from "./ResearchVisual";
import { RelatedPublication } from "./ResearchContext";

const PLACEHOLDER = "Project content will be added here.";

/** A labelled prose block: olive label, optional bold headline, body. */
function Block({ label, headline, value }) {
  if (value === false) return null;
  return (
    <div className="rq-block">
      <p className="r-label rq-block__label">{label}</p>
      {headline ? <p className="rq-block__headline">{headline}</p> : null}
      <p className="rq-block__body">{value || PLACEHOLDER}</p>
    </div>
  );
}

/**
 * The expanded framework for one research question. Every block is optional;
 * a null field shows placeholder copy. Findings render only the real reported
 * values from the data.
 */
export default function ResearchProjectExpanded({ project }) {
  const {
    year,
    tags,
    whyHeadline,
    whyItMatters,
    ideaHeadline,
    idea,
    methodSteps,
    researchReality,
    groups,
    framework,
    findings,
    caution,
    takeaway,
    visualType,
    visualData,
    researchContext,
  } = project;

  return (
    <div className="rq-expanded">
      {(year || (tags && tags.length > 0)) && (
        <p className="rq-expanded__head">
          {year && <span className="rq-expanded__year">{year}</span>}
          {tags &&
            tags.map((t) => (
              <span key={t} className="rq-chip">
                {t}
              </span>
            ))}
        </p>
      )}

      {visualType && (
        <div className="rq-expanded__visual">
          <ResearchVisual type={visualType} data={visualData} groups={groups} />
        </div>
      )}

      {groups && groups.length > 0 && (
        <ul className="rq-arms">
          {groups.map((gr) => (
            <li key={gr.name} className="rq-arm">
              <span className="rq-arm__name">{gr.name}</span>
              <span className="rq-arm__meta">
                {gr.position}
                {gr.n ? ` · n ${gr.n}` : ""}
              </span>
            </li>
          ))}
        </ul>
      )}

      <Block label="Why it matters" headline={whyHeadline} value={whyItMatters} />
      <Block label="The idea" headline={ideaHeadline} value={idea} />

      {framework && framework.length > 0 && (
        <div className="rq-block">
          <p className="r-label rq-block__label">The translation</p>
          <ul className="rq-map">
            {framework.map((f) => (
              <li key={f.label} className="rq-map__row">
                <span className="rq-map__label">{f.label}</span>
                <span className="rq-map__from">{f.biologicalFunction}</span>
                <span className="rq-map__arrow" aria-hidden="true">
                  →
                </span>
                <span className="rq-map__to">{f.healthSystemTranslation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rq-block">
        <p className="r-label rq-block__label">How we asked it</p>
        {methodSteps && methodSteps.length > 0 ? (
          <ol className="rq-steps">
            {methodSteps.map((s) => (
              <li key={s.number} className="rq-step">
                <span className="rq-step__num">{s.number}</span>
                <span className="rq-step__body">
                  <span className="rq-step__title">{s.title}</span>
                  <span className="rq-step__text">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="rq-block__body">{PLACEHOLDER}</p>
        )}
      </div>

      {researchReality && (
        <div className="rq-block rq-block--reality">
          <p className="r-label rq-block__label">What didn&rsquo;t work</p>
          {researchReality.headline ? (
            <p className="rq-block__headline">{researchReality.headline}</p>
          ) : null}
          <p className="rq-block__body">{researchReality.text}</p>
        </div>
      )}

      <div className="rq-block">
        <p className="r-label rq-block__label">What we found</p>
        {findings && findings.length > 0 ? (
          <>
            <dl className="rq-findings">
              {findings.map((f) => (
                <div key={f.label} className="rq-finding">
                  <dt className="rq-finding__value">{f.value}</dt>
                  <dd className="rq-finding__label">{f.label}</dd>
                </div>
              ))}
            </dl>
            {takeaway && <p className="rq-takeaway">{takeaway}</p>}
          </>
        ) : (
          <p className="rq-block__body">{PLACEHOLDER}</p>
        )}
      </div>

      {caution && (
        <div className="rq-block rq-block--reality">
          <p className="r-label rq-block__label">Caveats</p>
          <p className="rq-block__body">{caution}</p>
        </div>
      )}

      <RelatedPublication context={researchContext} />

      <ScientificDoodle name="underline" className="rq-expanded__rule" />
    </div>
  );
}
