import ScientificDoodle from "./ScientificDoodle";

/**
 * RESEARCH backdrop — hand-annotated scientific geometry at 4–10% opacity,
 * following the page's grammar (olive = natural system, cobalt = one
 * intervention mark). Discovered, not decorative. Most of it hides on mobile.
 */
export default function ResearchBackdrop() {
  return (
    <div className="research__bg" aria-hidden="true">
      <ScientificDoodle name="retina" className="rbg rbg--retina" />
      <ScientificDoodle name="cornea" className="rbg rbg--cornea" />
      <ScientificDoodle name="bond" className="rbg rbg--bond" />
      <ScientificDoodle name="cell" className="rbg rbg--cell1" />
      <ScientificDoodle name="cell" className="rbg rbg--cell2" />
      <ScientificDoodle name="trace" className="rbg rbg--trace" />
      <ScientificDoodle name="axis" className="rbg rbg--axis" />
      <ScientificDoodle name="landoltC" className="rbg rbg--landolt" />
      <ScientificDoodle name="scalebar" className="rbg rbg--scale" />
      {/* the single cobalt "intervention" mark */}
      <ScientificDoodle name="arrow" className="rbg rbg--intervene" />
    </div>
  );
}
