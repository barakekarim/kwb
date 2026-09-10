import KwParentNav from "../KwParentNav";

/**
 * The /vision-care page. A true standalone route, kept deliberately minimal
 * for now — same dark canvas, warm type and KW top bar as the other domains.
 */
export default function VisionCareExperience() {
  return (
    <div className="vcare">
      <div className="panel-topbar">
        <KwParentNav />
      </div>

      <div className="vcare__wrap">
        <header className="vcare__hero">
          <p className="r-label">Ouyouna</p>
          <h1 className="vcare__q">Optics, the eye, and how we see</h1>
          <p className="vcare__support">Coming soon.</p>
        </header>
      </div>
    </div>
  );
}
