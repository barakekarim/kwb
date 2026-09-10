import Doodle from "../Doodle";

/**
 * BIO backdrop — kept deliberately spare: a couple of hand-drawn eyeglass
 * frames, one star, one stethoscope. All 4–10% opacity, discovered not noticed.
 */
export default function BioBackdrop() {
  return (
    <div className="bio__bg" aria-hidden="true">
      <Doodle name="glasses" className="bio__bg-el bio__bg-el--glasses1" />
      <Doodle name="glasses" className="bio__bg-el bio__bg-el--glasses2" />
      <Doodle name="star" className="bio__bg-el bio__bg-el--star" />

      <svg
        className="bio__bg-el bio__bg-el--steth"
        viewBox="0 0 140 176"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* headset spring + binaural tubes meeting at a Y */}
        <path d="M25 30C29 7 111 7 115 30" />
        <path d="M22 27l-6-4M118 27l6-4" />
        <path d="M25 30C22 62 42 80 60 88" />
        <path d="M115 30C118 62 98 80 80 88" />
        {/* main tube down to the chestpiece */}
        <path d="M70 88C70 122 43 130 43 152" />
        <path d="M43 152l-3 1" />
        <circle cx="39" cy="158" r="13" />
        <circle cx="39" cy="158" r="6.5" />
      </svg>
    </div>
  );
}
