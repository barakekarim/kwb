import Link from "next/link";

import DomainIcon from "./DomainIcon";

const isExternal = (href) => /^https?:\/\//.test(href || "");

/**
 * Ouyouna — the bottom-right homepage portal. Unlike the other three corners,
 * the ENTIRE visual area is the link. It's an abstract ophthalmic-screening
 * graphic: a side-view lens on the left, light rays refracting through it to a
 * glowing focal point, then fanning on to a large concentric retinal target
 * that is cropped by the right + bottom edges of the viewport.
 *
 * Reads: vision screening -> focusing -> connection -> sight.
 * Thin technical linework; olive primary, cobalt secondary, gold sparingly.
 * Deliberately lighter than the centre content — a background portal.
 */
const GUIDES = [
  { a: 24, cobalt: false },
  { a: 78, cobalt: true },
  { a: 140, cobalt: false },
  { a: 205, cobalt: false },
  { a: 262, cobalt: false },
  { a: 320, cobalt: false },
];

function guideLine({ a, cobalt }, i) {
  const rad = (a * Math.PI) / 180;
  const x1 = Math.cos(rad) * 30;
  const y1 = Math.sin(rad) * 30;
  const x2 = Math.cos(rad) * 104;
  const y2 = Math.sin(rad) * 104;
  return (
    <line
      key={i}
      className={cobalt ? "ouy-guide ouy-guide--cobalt" : "ouy-guide"}
      x1={x1.toFixed(1)}
      y1={y1.toFixed(1)}
      x2={x2.toFixed(1)}
      y2={y2.toFixed(1)}
    />
  );
}

function OuyounaVisual() {
  return (
    <svg
      viewBox="0 0 520 340"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="ouyFocal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5e6b8" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#cdd45a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#cdd45a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* optical axis */}
      <line
        className="ouy-axis"
        x1="14"
        y1="155"
        x2="470"
        y2="155"
        strokeDasharray="2 10"
      />

      {/* --- LEFT: convex lens --- */}
      <path
        className="ouy-lens"
        d="M74 85C96 116 96 194 74 225C52 194 52 116 74 85Z"
      />
      <line className="ouy-lens-axis" x1="74" y1="79" x2="74" y2="231" />

      {/* incoming rays -> refract through lens -> converge on the focal point */}
      <g>
        <path className="ouy-ray" d="M14 100H60" />
        <path className="ouy-ray ouy-ray--key" d="M14 128H60" />
        <path className="ouy-ray ouy-ray--gold" d="M14 155H60" />
        <path className="ouy-ray" d="M14 182H60" />
        <path className="ouy-ray ouy-ray--cobalt" d="M14 210H60" />

        <path className="ouy-ray" d="M88 100L280 155" />
        <path className="ouy-ray ouy-ray--key" d="M88 128L280 155" />
        <path className="ouy-ray ouy-ray--gold" d="M88 155H280" />
        <path className="ouy-ray" d="M88 182L280 155" />
        <path className="ouy-ray ouy-ray--cobalt" d="M88 210L280 155" />
      </g>

      {/* rays continue on toward the retinal target */}
      <g>
        <path className="ouy-ray" d="M280 155L352 118" />
        <path className="ouy-ray ouy-ray--cobalt" d="M280 155L356 155" />
        <path className="ouy-ray" d="M280 155L352 192" />
      </g>

      {/* --- glowing focal point --- */}
      <g className="ouy-focus" transform="translate(280 155)">
        <circle className="ouy-focus-glow" r="17" fill="url(#ouyFocal)" />
        <circle className="ouy-focus-ring" r="8.5" />
        <circle className="ouy-focus-dot" r="3.2" />
      </g>

      {/* --- RIGHT: concentric retinal target (cropped by the SVG edges) --- */}
      <g className="ouy-target" transform="translate(410 205)">
        <circle className="ouy-ring" r="150" />
        <circle className="ouy-ring" r="118" />
        <circle className="ouy-ring ouy-ring--cobalt" r="88" />
        <circle className="ouy-ring" r="58" />
        <circle className="ouy-ring-inner" r="24" />
        <circle className="ouy-target-dot" r="3" />
        {GUIDES.map(guideLine)}
      </g>
    </svg>
  );
}

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

export default function OuyounaPortal({ domain }) {
  const external = isExternal(domain.href);
  const Wrapper = external ? "a" : Link;
  const wrapperProps = external
    ? { href: domain.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: domain.href };

  return (
    <Wrapper className="ouy" aria-label={domain.label} {...wrapperProps}>
      <span className="ouy__vis" aria-hidden="true">
        <OuyounaVisual />
      </span>
      <span className="ouy__btn">
        <span className="portal__icon">
          <DomainIcon name={domain.key} />
        </span>
        <span className="portal__label">{domain.label}</span>
        <span className="portal__go">
          <Chevron />
        </span>
      </span>
    </Wrapper>
  );
}
