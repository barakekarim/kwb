import Link from "next/link";

import Doodle from "./Doodle";

/**
 * Persistent parent-site cue, top-left of every domain page.
 *
 *   KW / FULL SITE ↗
 *
 * Always a real client-side navigation back to "/", so it works for someone
 * who lands on /music straight from the BARAKE Instagram and has never seen
 * the homepage. The domain routes are true standalone pages now, not panels,
 * so there is nothing to "close" — this is just a link home.
 */
export default function KwParentNav() {
  return (
    <div className="kwnav">
      <Link
        className="kwnav__link"
        href="/"
        data-autofocus
        aria-label="Karim W. Barake — explore the full site"
      >
        <span className="kwnav__kw">KW</span>
        <span className="kwnav__sep" aria-hidden="true">
          /
        </span>
        <span className="kwnav__label">
          Full site
          <Doodle name="arrowNE" className="kwnav__arrow" strokeWidth={2.6} />
        </span>
      </Link>
    </div>
  );
}
