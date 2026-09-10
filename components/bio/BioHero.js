import Doodle from "../Doodle";

/**
 * Hero — small "BIO" label, then the mission as the dominant statement.
 * No quotation marks; generous whitespace; one faint glasses doodle and a
 * small handwritten "see better." — nothing more.
 */
export default function BioHero({ mission }) {
  return (
    <header className="bio__hero">
      <p className="bio__label">Bio</p>
      <h1 className="bio__mission">{mission}</h1>
      <div className="bio__hero-mark" aria-hidden="true">
        <Doodle name="glasses" className="bio__hero-glasses" />
        <span className="bio__hero-note">see better.</span>
      </div>
    </header>
  );
}
