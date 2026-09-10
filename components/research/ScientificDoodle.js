/**
 * Hand-drawn scientific marks for the RESEARCH world — notebook geometry, not
 * icons. Slightly irregular paths, marker ends, varying weight. Colour comes
 * from CSS `color` (stroke = currentColor). Never a Lucide/FontAwesome glyph.
 *
 *   <ScientificDoodle name="retina" className="..." />
 */
const shapes = {
  // annotation arrow
  arrow: { vb: "0 0 42 24", d: "M2 13c10-2 22 3 32-2M27 3l9 7-10 6" },
  // rough circled-region
  circle: {
    vb: "0 0 58 54",
    d: "M31 5C15 3 4 16 6 31c2 14 21 21 35 12 13-7 13-25 2-34-6-5-16-6-23-2",
  },
  // notebook underline
  underline: { vb: "0 0 120 12", d: "M3 7c22 4 45 4 67 1s38-3 48 1" },
  // skeletal molecular bond fragment
  bond: {
    vb: "0 0 96 62",
    d: "M6 40 L26 27 L46 40 L46 12M46 40 L66 52 L86 40M26 27 L26 5M66 52 L66 30",
  },
  // cell outline with a nucleus mark
  cell: {
    vb: "0 0 74 58",
    d: "M11 30c-5-15 12-25 27-19 12-6 29 4 25 19 5 13-11 27-25 20-13 8-29-6-27-20ZM31 21c7-2 13 4 11 11",
  },
  // optical ray splitting at a surface
  ray: { vb: "0 0 84 42", d: "M2 21 L48 21M48 21 L82 5M48 21 L82 37M48 6 L48 36" },
  // scale bar
  scalebar: { vb: "0 0 64 16", d: "M4 4V13M60 4V13M4 9H60" },
  // tiny graph axis + a response curve
  axis: {
    vb: "0 0 60 50",
    d: "M9 4V44H52M9 32c9-3 15-19 24-19s11 14 21 9",
  },
  // playful eyeglass frame
  glasses: {
    vb: "0 0 96 40",
    d: "M6 14c-1 16 26 20 30 4 1-5-2-9-2-9M40 13c8-4 10-4 17 0M56 12c-2 13 4 19 16 18 12-1 16-11 12-19-3-7-20-8-28-1M4 12c3-4 5-5 8-5",
  },
  // layered retinal contour (cross-section)
  retina: {
    vb: "0 0 128 64",
    d: "M4 42C30 8 98 8 124 42M6 48C32 16 96 16 122 48M10 54C34 26 94 26 118 54M14 60C36 36 92 36 114 60",
  },
  // Landolt C optotype
  landoltC: { vb: "0 0 48 48", d: "M39 34 A16 16 0 1 1 39 14" },
  // almond eye with iris + pupil
  eye: {
    vb: "0 0 52 28",
    d: "M3 14C15 1 37 1 49 14C37 27 15 27 3 14M26 6a8 8 0 1 1 0 16a8 8 0 1 1 0-16M26 11a3 3 0 1 1 0 6a3 3 0 1 1 0-6",
  },
  // biological trace with a spike
  trace: {
    vb: "0 0 148 40",
    d: "M2 22H30L36 8L43 33L49 15L55 25L61 21H92L98 6L104 31L110 21H146",
  },
  // corneal curvature arc + optical axis
  cornea: {
    vb: "0 0 96 72",
    d: "M22 8C-2 26 -2 46 22 64M0 36H92M60 36 L88 22M60 36 L88 50",
  },
};

export default function ScientificDoodle({
  name,
  className = "",
  strokeWidth = 1.6,
  style,
  ...rest
}) {
  const s = shapes[name];
  if (!s) return null;
  return (
    <svg
      className={`sdoodle sdoodle--${name} ${className}`}
      viewBox={s.vb}
      fill="none"
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
