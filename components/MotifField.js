/**
 * The four large thematic line motifs, each anchored to a corner of the hero
 * and bleeding off-screen. Wordless and atmospheric; they brighten / animate
 * when the matching corner button is hovered (see globals.css `.hero:has()`).
 *
 *   music   — a spinning CD (+ a separate 128 BPM wavebeat)
 *   research — a small colourful fundus image
 *   bio     — a wireframe globe, two place-markers, a route arc
 *
 * (Ouyouna / bottom-right has its own component, <OuyounaPortal />, because
 * its whole visual area is a link.)
 *
 * Everything strokes `currentColor` (the portal animates it); `.mf__cobalt`
 * parts take a second colour via `--mf-2`.
 */
const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

// wavebeat bar heights — 128 BPM readout sits beneath them
const BARS = [
  22, 54, 30, 72, 40, 18, 60, 34, 78, 26, 50, 88, 38, 66, 20, 80, 44, 70, 28,
  58, 90, 36, 64, 24, 74, 48,
];
// bars cycle through the site's accent inks
const BAR_INK = ["", "mf__bar--cobalt", "mf__bar--pink", "mf__bar--yellow"];

export default function MotifField() {
  return (
    <div className="mf" aria-hidden="true">
      {/* ---------------- MUSIC — top left: a CD ---------------- */}
      <span className="mf__q mf--music">
        <svg viewBox="0 0 320 320" strokeWidth="1.4" {...STROKE}>
          <g className="mf__spin">
            <circle cx="160" cy="160" r="150" />
            <circle cx="160" cy="160" r="138" />
            <circle className="mf__ring--cobalt" cx="160" cy="160" r="98" />
            <circle cx="160" cy="160" r="86" opacity="0.4" />
            <circle className="mf__ring--pink" cx="160" cy="160" r="52" />
            <circle cx="160" cy="160" r="34" />
            <circle cx="160" cy="160" r="20" />
            {/* iridescent sheen — sweeps around as the disc turns */}
            <path
              className="mf__sheen mf__sheen--a"
              d="M160 24a136 136 0 0 1 96 40"
            />
            <path
              className="mf__sheen mf__sheen--b"
              d="M60 252a136 136 0 0 0 128 42"
            />
            <path
              className="mf__sheen mf__sheen--c"
              d="M292 128a136 136 0 0 1-42 128"
            />
          </g>
        </svg>
      </span>

      {/* the wavebeat + tempo, trailing in from the disc */}
      <span className="mf__q mf--wave">
        <svg viewBox="0 0 420 152" strokeWidth="2" {...STROKE}>
          <g className="mf__bars">
            {BARS.map((h, i) => (
              <line
                key={i}
                className={BAR_INK[i % 4]}
                x1={7 + i * 15}
                y1="104"
                x2={7 + i * 15}
                y2={104 - h}
                strokeWidth="3"
              />
            ))}
          </g>
          <path
            className="mf__wave"
            d="M7 104C31 104 35 78 61 78s28 18 54 18 34-40 60-40 30 30 54 30 34-22 60-22 30 10 54 10"
            opacity="0.5"
          />
          <text className="mf__bpm" x="7" y="142">
            128 BPM
          </text>
        </svg>
      </span>

      {/* ------------- RESEARCH — top right: a fundus image ------------- */}
      <span className="mf__q mf--research">
        <svg
          viewBox="0 0 320 320"
          fill="none"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <radialGradient id="mfFundus" cx="42%" cy="46%" r="64%">
              <stop offset="0%" stopColor="#d9864f" />
              <stop offset="52%" stopColor="#a55026" />
              <stop offset="100%" stopColor="#4f1c0a" />
            </radialGradient>
            <radialGradient id="mfDisc" cx="40%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#fff1d3" />
              <stop offset="58%" stopColor="#f2c079" />
              <stop offset="100%" stopColor="#d5934c" />
            </radialGradient>
            <radialGradient id="mfMac" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3a1206" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#3a1206" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g className="mf__fundus">
            <circle cx="160" cy="160" r="150" fill="url(#mfFundus)" />

            {/* macula + foveal reflex */}
            <circle cx="182" cy="196" r="48" fill="url(#mfMac)" />
            <circle cx="182" cy="196" r="2.4" fill="#ffdca6" />

            {/* retinal vessels — arcades from the disc */}
            <g className="mf__vessels" fill="none">
              <path
                className="mf__vein"
                pathLength="1"
                strokeWidth="5"
                d="M120 175C148 149 178 150 198 170C216 188 224 214 226 244"
              />
              <path
                className="mf__vein"
                pathLength="1"
                strokeWidth="5"
                d="M120 179C150 202 180 210 200 230C216 246 224 270 226 298"
              />
              <path
                className="mf__vein"
                pathLength="1"
                strokeWidth="4"
                d="M116 168C102 138 96 104 102 62"
              />
              <path
                className="mf__vein"
                pathLength="1"
                strokeWidth="4"
                d="M116 182C100 214 90 252 92 300"
              />
              <path
                className="mf__artery"
                pathLength="1"
                strokeWidth="3"
                d="M123 172C148 152 174 156 194 174C210 189 218 210 220 238"
              />
              <path
                className="mf__artery"
                pathLength="1"
                strokeWidth="3"
                d="M123 181C148 200 172 206 192 224C206 238 214 262 216 286"
              />
              <path
                className="mf__artery"
                pathLength="1"
                strokeWidth="2.4"
                d="M150 150C156 130 150 112 158 88"
              />
              <path
                className="mf__artery"
                pathLength="1"
                strokeWidth="2.4"
                d="M198 170C214 162 232 164 252 156"
              />
            </g>

            {/* optic disc + cup */}
            <circle
              cx="120"
              cy="175"
              r="19"
              fill="url(#mfDisc)"
              stroke="#b9803f"
              strokeWidth="1.5"
            />
            <circle cx="116" cy="171" r="9.5" fill="#fff4de" opacity="0.7" />

            {/* cobalt highlights — fade in on hover */}
            <circle
              className="mf__hi"
              cx="120"
              cy="175"
              r="25"
              fill="none"
              strokeWidth="1.5"
            />
            <path
              className="mf__hi"
              fill="none"
              strokeWidth="2"
              d="M120 175C148 149 178 150 198 170C216 188 224 214 226 244"
            />
          </g>
        </svg>
      </span>

      {/* ---------------- BIO — bottom left: a globe + two places ---------------- */}
      <span className="mf__q mf--bio">
        <svg viewBox="0 0 320 330" strokeWidth="1.4" {...STROKE}>
          <g className="mf__globe">
            <circle cx="150" cy="182" r="132" />
            <ellipse cx="150" cy="182" rx="132" ry="46" opacity="0.75" />
            <ellipse cx="150" cy="182" rx="132" ry="92" opacity="0.5" />
            <line x1="18" y1="182" x2="282" y2="182" opacity="0.6" />
            <ellipse cx="150" cy="182" rx="46" ry="132" opacity="0.75" />
            <ellipse cx="150" cy="182" rx="92" ry="132" opacity="0.5" />
            <line x1="150" y1="50" x2="150" y2="314" opacity="0.45" />
          </g>

          {/* the route between the two places */}
          <path
            className="mf__route"
            d="M98 128C134 82 198 94 216 174"
            strokeDasharray="4 8"
          />

          {/* place one */}
          <g className="mf__pin mf__pin--a" transform="translate(98 128)">
            <circle className="mf__ping" r="13" />
            <circle r="4.5" />
          </g>
          {/* place two */}
          <g className="mf__pin mf__pin--b" transform="translate(216 174)">
            <circle className="mf__ping" r="13" />
            <circle r="4.5" />
          </g>
        </svg>
      </span>

    </div>
  );
}
