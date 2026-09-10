/**
 * Hand-drawn marker doodles for the BARAKE world — deliberately uneven curves,
 * marker-style round ends, a little human wobble. Colour comes from CSS
 * `color` (stroke uses currentColor). Never a Lucide/FontAwesome icon.
 *
 *   <Doodle name="star" className="mo-doodle" />
 */
const shapes = {
  // five-point star with slightly unequal arms
  star: {
    vb: "0 0 48 48",
    d: "M24 3c1 7 3 12 6 15 3 3 8 4 15 5-7 2-12 4-15 8-3 3-4 8-5 14-2-6-3-11-7-14-3-3-8-5-14-6 6-1 11-3 14-6 3-3 5-8 6-10z",
  },
  // shooting arrow pointing up-right (↗)
  arrowNE: {
    vb: "0 0 40 40",
    d: "M6 33C13 27 22 18 31 9M31 9l-12 1M31 9l-1 12",
  },
  // squiggly rightward arrow
  arrowR: {
    vb: "0 0 64 28",
    d: "M3 15c9-2 19 4 28-1s16-8 30-3M55 5l7 6-8 6",
  },
  // short audio waveform
  wave: {
    vb: "0 0 96 32",
    d: "M2 16h6l4-11 5 22 5-16 4 9 5-13 5 18 5-9 4 4 5-6 5 12 5-16 4 8h6",
  },
  // loose scribble ball
  scribble: {
    vb: "0 0 60 44",
    d: "M8 30c6-14 22-24 34-18 8 4 6 17-4 20-9 3-20-1-20-10 0-11 14-18 26-14",
  },
  // playful eyeglasses (nods to the vision-care drawings)
  glasses: {
    vb: "0 0 96 40",
    d: "M6 14c-1 16 26 20 30 4 1-5-2-9-2-9M40 13c8-4 10-4 17 0M56 12c-2 13 4 19 16 18 12-1 16-11 12-19-3-7-20-8-28-1M4 12c3-4 5-5 8-5",
  },
  // burst of rays
  rays: {
    vb: "0 0 48 48",
    d: "M24 4v9M24 35v9M4 24h9M35 24h9M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6",
  },
  // hand-drawn circle-ish loop
  circle: {
    vb: "0 0 56 52",
    d: "M30 6C14 4 4 16 6 30c2 13 20 20 34 13 12-6 13-24 3-33-6-5-16-6-22-2",
  },
  // rough underline
  underline: {
    vb: "0 0 120 16",
    d: "M4 8c22 5 44 5 66 2s38-4 46 1",
  },
  // small plus / cross mark
  cross: {
    vb: "0 0 28 28",
    d: "M6 8c4 4 10 10 16 13M20 7C16 12 11 17 7 22",
  },
  // rough marker crown (nods to the tour flyer)
  crown: {
    vb: "0 0 48 32",
    d: "M6 26c3-1 33-1 37 0M6 25 11 9l7 10 6-12 6 12 7-10 4 16",
  },
};

export default function Doodle({
  name,
  className = "",
  strokeWidth = 2.4,
  fill = "none",
  style,
  ...rest
}) {
  const s = shapes[name];
  if (!s) return null;
  return (
    <svg
      className={`doodle doodle--${name} ${className}`}
      viewBox={s.vb}
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={style}
      {...rest}
    >
      <path d={s.d} />
    </svg>
  );
}
