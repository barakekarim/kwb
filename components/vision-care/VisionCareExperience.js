import KwParentNav from "../KwParentNav";
import ScientificDoodle from "../research/ScientificDoodle";

/**
 * The /vision-care page (Ouyouna). A true standalone route — centred type on
 * the shared dark canvas, ringed by a colourful, always-moving cluster of
 * optical marks (glasses · eye · cornea · optotype · ray). Each drifts on its
 * own and "scopes in" — brightens, scales, a reticle focuses — on hover.
 */
const MARKS = [
  { name: "glasses", cls: "vc-mark--cobalt vc-mark--wobble" },
  { name: "eye", cls: "vc-mark--pink vc-mark--blink" },
  { name: "cornea", cls: "vc-mark--yellow vc-mark--pulse" },
  { name: "landoltC", cls: "vc-mark--green vc-mark--spin" },
  { name: "ray", cls: "vc-mark--orange vc-mark--march" },
];

const SCATTER = [
  {
    name: "retina",
    cls: "vc-mark--olive vc-mark--draw",
    pos: { top: "6%", left: "2%" },
  },
  {
    name: "eye",
    cls: "vc-mark--pink vc-mark--blink",
    pos: { top: "13%", right: "3%" },
  },
  {
    name: "glasses",
    cls: "vc-mark--cobalt vc-mark--wobble",
    pos: { bottom: "8%", left: "5%" },
  },
  {
    name: "landoltC",
    cls: "vc-mark--green vc-mark--spin",
    pos: { bottom: "14%", right: "5%" },
  },
];

export default function VisionCareExperience() {
  return (
    <div className="vcare">
      <div className="panel-topbar">
        <KwParentNav />
      </div>

      <div className="vcare__scatter" aria-hidden="true">
        {SCATTER.map((m, i) => (
          <span
            key={i}
            className={`vc-mark vc-mark--sm ${m.cls}`}
            style={m.pos}
          >
            <ScientificDoodle name={m.name} />
          </span>
        ))}
      </div>

      <div className="vcare__wrap">
        <header className="vcare__hero">
          <p className="r-label">Ouyouna</p>

          <div className="vcare__marks" aria-hidden="true">
            {MARKS.map((m, i) => (
              <span key={i} className={`vc-mark ${m.cls}`}>
                <ScientificDoodle name={m.name} />
              </span>
            ))}
          </div>

          <h1 className="vcare__q">Optics, the eye, and how we see</h1>
          <p className="vcare__support">Coming soon.</p>
        </header>
      </div>
    </div>
  );
}
