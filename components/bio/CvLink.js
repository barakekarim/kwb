import Doodle from "../Doodle";

/** Editorial text link to the CV PDF — an olive rule that extends on hover. */
export default function CvLink({ href }) {
  return (
    <a
      className="bio__cv"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="bio__cv-text">
        View CV
        <Doodle name="arrowNE" className="bio__cv-arrow" strokeWidth={2.6} />
      </span>
      <span className="u-sr-only"> (PDF, opens in a new tab)</span>
    </a>
  );
}
