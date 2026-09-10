import Link from "next/link";

import DomainIcon from "./DomainIcon";
import OuyounaPortal from "./OuyounaPortal";

// A small chevron for the "go" affordance on each portal button.
function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

// One domain button: [icon] LABEL (chevron). Borderless; the whole thing is
// the link. The large thematic motif lives separately in <MotifField />.
function DomainPortal({ domain, layout }) {
  const cls = [
    "portal",
    `portal--${domain.key}`,
    layout === "static" ? "portal--static" : `portal--${domain.pos}`,
  ].join(" ");

  const inner = (
    <>
      <span className="portal__icon">
        <DomainIcon name={domain.key} />
      </span>
      <span className="portal__label">{domain.label}</span>
      <span className="portal__go">
        <Chevron />
      </span>
    </>
  );

  if (!domain.href) return <span className={cls}>{inner}</span>;
  if (/^https?:\/\//.test(domain.href)) {
    return (
      <a
        className={cls}
        href={domain.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={domain.label}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={domain.href} aria-label={domain.label}>
      {inner}
    </Link>
  );
}

// Desktop: three corner buttons + the full-area Ouyouna portal (bottom right).
export function OrbitLayer({ domains }) {
  return (
    <nav className="portals" aria-label="Sections">
      {domains.map((d) =>
        d.key === "vision" ? (
          <OuyounaPortal key={d.key} domain={d} />
        ) : (
          <DomainPortal key={d.key} domain={d} layout="corner" />
        )
      )}
    </nav>
  );
}

// Narrow screens: the same buttons stacked under the centre identity.
export function DomainGrid({ domains }) {
  return (
    <div className="hero__grid">
      {domains.map((d) => (
        <DomainPortal key={d.key} domain={d} layout="static" />
      ))}
    </div>
  );
}
