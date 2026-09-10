import DomainIcon from "./DomainIcon";

// Dashed orbit ellipse with a few drifting glow-dots (pure declarative SVG).
function Ellipse() {
  const dots = [0, 1, 2, 3, 4];
  return (
    <div className="orbit" aria-hidden="true">
      <svg className="orbit__ellipse" viewBox="0 0 1200 560">
        <defs>
          <filter id="dotGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          id="orbitPath"
          className="orbit__ring"
          d="M40 280 A560 250 0 1 1 1160 280 A560 250 0 1 1 40 280"
        />
        {dots.map((i) => (
          <circle key={i} className="orbit__dot" r="3.5" filter="url(#dotGlow)">
            <animateMotion
              dur={`${17 + i * 3}s`}
              begin={`-${i * 4}s`}
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#orbitPath" />
            </animateMotion>
          </circle>
        ))}
      </svg>
    </div>
  );
}

function Card({ domain, className = "" }) {
  const inner = (
    <>
      <DomainIcon name={domain.key} />
      <span className="orbit__label">{domain.label}</span>
    </>
  );
  const cls = `orbit__card orbit__card--${domain.pos} ${className}`.trim();
  return domain.href ? (
    <a className={cls} href={domain.href}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

// Desktop: absolutely-positioned cards floating around the hero on the orbit.
export function OrbitLayer({ domains }) {
  return (
    <>
      <Ellipse />
      <div className="orbit__cards" aria-hidden="true">
        {domains.map((d) => (
          <Card key={d.key} domain={d} />
        ))}
      </div>
    </>
  );
}

// Narrow screens: the same cards as a static 2x2 grid under the tagline.
export function DomainGrid({ domains }) {
  return (
    <div className="hero__grid">
      {domains.map((d) => (
        <Card key={d.key} domain={d} className="orbit__card--static" />
      ))}
    </div>
  );
}
