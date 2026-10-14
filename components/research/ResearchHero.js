import ScientificDoodle from "./ScientificDoodle";
import SocialIcon from "../SocialIcon";
import { socials } from "../../data/content";

const scholar = socials.find((s) => s.key === "scholar");

/**
 * Section 1 — Research hero: centred label, headline, first-person journey
 * paragraphs and a short disclosure. A small interactive instrument row of
 * scientific marks (retina · eye · glasses) sits under the label, and a few
 * fainter marks "scope in" from the edges — each brightens, scales and draws
 * itself on hover.
 */
const SCATTER = [
  { name: "retina", cls: "rhero__mark--retina", pos: { top: "3%", left: "1%" } },
  { name: "eye", cls: "rhero__mark--eye", pos: { top: "9%", right: "2%" } },
  {
    name: "glasses",
    cls: "rhero__mark--glasses",
    pos: { bottom: "0%", left: "5%" },
  },
  {
    name: "cornea",
    cls: "rhero__mark--cornea",
    pos: { bottom: "5%", right: "4%" },
  },
];

export default function ResearchHero({ meta }) {
  const intro = Array.isArray(meta.intro)
    ? meta.intro
    : meta.supporting
    ? [meta.supporting]
    : [];

  return (
    <header className="rhero" id="research">
      <div className="rhero__scatter" aria-hidden="true">
        {SCATTER.map((m) => (
          <span
            key={m.name}
            className={`rhero__mark rhero__mark--sm ${m.cls}`}
            style={m.pos}
          >
            <ScientificDoodle name={m.name} />
          </span>
        ))}
      </div>

      <div className="rhero__text">
        {/* with no headline, the label is the page's h1 */}
        {meta.question ? (
          <p className="r-label">{meta.label}</p>
        ) : (
          <h1 className="r-label">{meta.label}</h1>
        )}

        <div className="rhero__marks" aria-hidden="true">
          <span className="rhero__mark rhero__mark--retina">
            <ScientificDoodle name="retina" />
          </span>
          <span className="rhero__mark rhero__mark--eye">
            <ScientificDoodle name="eye" />
          </span>
          <span className="rhero__mark rhero__mark--glasses">
            <ScientificDoodle name="glasses" />
          </span>
        </div>

        {meta.question && <h1 className="rhero__q">{meta.question}</h1>}

        {scholar && (
          <a
            className="rhero__scholar"
            href={scholar.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon name="scholar" />
            {scholar.label}
            <ScientificDoodle name="arrow" className="rhero__scholar-arrow" />
            <span className="u-sr-only"> (opens in a new tab)</span>
          </a>
        )}

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
