/** A small identity marker — olive label, muted description. Not a stat card. */
export default function Callout({ label, desc }) {
  return (
    <div className="bio__callout">
      <span className="bio__callout-tick" aria-hidden="true" />
      <p className="bio__callout-label">{label}</p>
      <p className="bio__callout-desc">{desc}</p>
    </div>
  );
}
