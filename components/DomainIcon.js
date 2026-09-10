// Line-art icons for the four domains. Stroke inherits `currentColor`.
export default function DomainIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 30,
    height: 30,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "music":
      return (
        <svg {...common}>
          <path d="M9 17V6l11-2v10" />
          <circle cx="6" cy="17" r="3" />
          <circle cx="17" cy="15" r="3" />
        </svg>
      );
    case "research":
      return (
        <svg {...common}>
          <circle cx="6" cy="7" r="2.4" />
          <circle cx="18" cy="8" r="2.4" />
          <circle cx="12" cy="18" r="2.4" />
          <path d="M8 8.1l2.6 7.9M15.7 9.4l-2 5.9M8.3 6.6l7.4.8" />
        </svg>
      );
    case "bio":
      return (
        <svg {...common}>
          <path d="M4 13h16v6H4z" />
          <path d="M7 13V8.5h10V13" />
          <path d="M9 8.5V5h6v3.5" />
          <path d="M8.5 16h7" />
        </svg>
      );
    case "vision":
      return (
        <svg {...common}>
          <circle cx="7" cy="14" r="3.4" />
          <circle cx="17" cy="14" r="3.4" />
          <path d="M10.4 13.4c.9-1 2.3-1 3.2 0" />
          <path d="M3.6 12.4 6 8h3M20.4 12.4 18 8h-3" />
        </svg>
      );
    default:
      return null;
  }
}
