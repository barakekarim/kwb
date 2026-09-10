import { Fragment } from "react";
import ScientificDoodle from "./ScientificDoodle";

/**
 * The illustration area for a research question. Keyed by `visualType`, and
 * given the project's `visualData` for its labels. Diagrams are deliberately
 * schematic — they illustrate the method described in the data, never results.
 * `decorative` renders a small unlabelled teaser (card face); the full
 * labelled figure appears in the expansion.
 */

/* corneal-ring-depth — a stromal cross-section: the failed synthetic segment
   sits deep (dashed, cobalt = intervention) with an arrow of intrusion toward
   the anterior chamber; the donor segment is placed in a new, shallower plane
   (solid, olive = tissue), ~250 µm deep. */
function CornealRingDepth({ decorative }) {
  return (
    <figure
      className={`rvisual rvisual--cornea${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <svg
        viewBox="0 0 220 160"
        role={decorative ? "presentation" : "img"}
        aria-label={
          decorative
            ? undefined
            : "Schematic corneal cross-section: a synthetic ring segment sits deep and has intruded toward the anterior chamber; a donor corneal segment is placed in a new, shallower stromal plane about 250 micrometres deep."
        }
      >
        <path className="rv-tissue" d="M14 108 Q110 14 206 108" />
        <path className="rv-tissue" d="M22 118 Q110 34 198 118" />
        <path className="rv-faint" d="M30 122 Q110 150 190 122" />
        <text className="rv-lbl" x="110" y="140" textAnchor="middle">
          AC
        </text>

        <path className="rv-synth" d="M44 104 Q110 40 176 104" />
        <path className="rv-synth" d="M110 66 v20 m-4.5 -7 l4.5 7 l4.5 -7" />
        <text className="rv-lbl rv-lbl--synth" x="180" y="102">
          synthetic
        </text>

        <path className="rv-donor" d="M48 92 Q110 30 172 92" />
        <text className="rv-lbl rv-lbl--donor" x="176" y="86">
          allograft
        </text>

        <path className="rv-faint" d="M40 88 v14 m-3 0 h6 m-6 -14 h6" />
        <text className="rv-lbl" x="24" y="99">
          ≈250 µm
        </text>
      </svg>
      {!decorative && (
        <figcaption className="rvisual__cap">
          Cross-section — schematic, not to scale
        </figcaption>
      )}
    </figure>
  );
}

/* dual-optical-zone — same cornea, two implants. Cross-section: horizontal
   position ≈ optical zone (distance from the visual axis), vertical position
   ≈ depth. The synthetic PMMA segment sits wider and deeper (cobalt); the
   donor CAIRS segment sits narrower and shallower (olive). */
function DualOpticalZone({ decorative, data }) {
  const s = (data && data.synthetic) || {};
  const a = (data && data.allogenic) || {};
  return (
    <figure
      className={`rvisual rvisual--dualoz${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <svg
        viewBox="0 0 240 156"
        role={decorative ? "presentation" : "img"}
        aria-label={
          decorative
            ? undefined
            : "Schematic corneal cross-section of one cornea with two implants: a synthetic PMMA segment at a wider optical zone and greater depth, and donor corneal segments at a narrower optical zone and shallower depth."
        }
      >
        <path className="rv-faint rv-axis" d="M120 26 V132" />
        <path className="rv-tissue" d="M18 104 Q120 16 222 104" />
        <path className="rv-tissue" d="M28 113 Q120 36 212 113" />
        <path className="rv-faint" d="M36 116 Q120 146 204 116" />
        <text className="rv-lbl" x="120" y="140" textAnchor="middle">
          AC
        </text>

        {/* synthetic PMMA — wider zone, deeper */}
        <path className="rv-synth-mark" d="M70 92 h18" />
        <path className="rv-synth-mark" d="M152 92 h18" />
        {/* donor CAIRS — narrower zone, shallower */}
        <path className="rv-donor-mark" d="M88 77 h14" />
        <path className="rv-donor-mark" d="M138 77 h14" />

        {/* depth scale */}
        <path className="rv-faint" d="M44 77 V92 m-3 0 h6 m-6 -15 h6" />
        <text className="rv-lbl" x="16" y="80">
          {a.depth || ""}
        </text>
        <text className="rv-lbl" x="16" y="95">
          {s.depth || ""}
        </text>
      </svg>

      {!decorative && (
        <>
          <div className="rvisual__legend">
            <span className="rv-key rv-key--synth">
              {[s.material, s.opticalZone && `${s.opticalZone} zone`, s.depth]
                .filter(Boolean)
                .join(" · ")}
            </span>
            <span className="rv-key rv-key--donor">
              {[a.material, a.opticalZone && `${a.opticalZone} zone`, a.depth]
                .filter(Boolean)
                .join(" · ")}
            </span>
          </div>
          <figcaption className="rvisual__cap">
            Cross-section — position ≈ optical zone, height ≈ depth. Schematic.
          </figcaption>
        </>
      )}
    </figure>
  );
}

/* runx1-cytosolic-trap — a cell with its nucleus. RUNX1-Trap (cobalt, the
   mRNA-encoded intervention) binds RUNX1 in the cytoplasm and holds it away
   from the nucleus, so RUNX1 can't reach the DNA it would normally act on. */
function Runx1CytosolicTrap({ decorative }) {
  return (
    <figure
      className={`rvisual rvisual--runx1${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <svg
        viewBox="0 0 220 160"
        role={decorative ? "presentation" : "img"}
        aria-label={
          decorative
            ? undefined
            : "Schematic of a cell: an mRNA-encoded RUNX1-Trap protein binds RUNX1 in the cytoplasm and keeps it from entering the nucleus, reducing its transcriptional activity."
        }
      >
        <path
          className="rv-tissue"
          d="M18 82 C18 42 52 22 110 22 C172 22 202 46 202 84 C202 122 168 140 110 140 C52 140 18 122 18 82 Z"
        />
        <circle className="rv-tissue" cx="148" cy="82" r="32" />
        <text className="rv-lbl" x="148" y="86" textAnchor="middle">
          nucleus
        </text>

        {/* free RUNX1 in the cytoplasm */}
        <circle className="rv-mol" cx="58" cy="60" r="4" />
        <circle className="rv-mol" cx="74" cy="104" r="4" />
        {/* trapped RUNX1 held by the Trap */}
        <circle className="rv-mol" cx="70" cy="82" r="4" />
        <path className="rv-trap" d="M60 71 a11 11 0 1 0 0 22" />
        <text className="rv-lbl rv-lbl--synth" x="26" y="60">
          RUNX1-Trap
        </text>
        <text className="rv-lbl" x="42" y="122">
          RUNX1
        </text>

        {/* blocked entry to the nucleus */}
        <path className="rv-stop rv-stop--dash" d="M86 82 H108" />
        <path className="rv-stop" d="M111 74 V90" />
      </svg>

      {!decorative && (
        <>
          <div className="rvisual__legend">
            <span className="rv-key rv-key--donor">Cell &amp; nucleus</span>
            <span className="rv-key rv-key--synth">RUNX1-Trap · mRNA-encoded</span>
          </div>
          <figcaption className="rvisual__cap">
            RUNX1 held in the cytoplasm, away from the nucleus. Schematic.
          </figcaption>
        </>
      )}
    </figure>
  );
}

/* ocular-axis-map — front view of the eye showing that its "centres" don't
   coincide: from where the eye looks (visual axis), angle α points to the
   optical axis (olive) and angle κ to the pupillary axis (cobalt). */
function OcularAxisMap({ decorative, data }) {
  const al = (data && data.alpha) || {};
  const ka = (data && data.kappa) || {};
  const g = (data && data.groups) || {};
  const my = g.myopia || {};
  const hy = g.hyperopia || {};
  return (
    <figure
      className={`rvisual rvisual--axismap${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <svg
        viewBox="0 0 200 176"
        role={decorative ? "presentation" : "img"}
        aria-label={
          decorative
            ? undefined
            : "Front-view schematic of the eye: from the point where the eye looks, angle alpha points to the optical axis and angle kappa to the pupillary axis; the eye's centres do not coincide."
        }
      >
        <circle className="rv-tissue" cx="100" cy="90" r="64" />
        <circle className="rv-faint" cx="92" cy="90" r="27" />

        {/* vectors from the visual-axis origin */}
        <path className="rv-vec-a" d="M100 90 L58 106" />
        <path className="rv-vec-a" d="M58 106 l8 -1 m-8 1 l3 -7" />
        <path className="rv-vec-k" d="M100 90 L84 98" />
        <path className="rv-vec-k" d="M84 98 l6 0 m-6 0 l2 -5" />

        {/* the three centres */}
        <circle className="rv-pt-v" cx="100" cy="90" r="3" />
        <circle className="rv-pt-a" cx="58" cy="106" r="3" />
        <circle className="rv-pt-k" cx="84" cy="98" r="3" />

        <text className="rv-lbl rv-lbl--donor" x="44" y="120">
          α
        </text>
        <text className="rv-lbl rv-lbl--synth" x="70" y="110">
          κ
        </text>
        <text className="rv-lbl" x="104" y="86">
          visual axis
        </text>
      </svg>

      {!decorative && (
        <>
          <div className="rvisual__legend">
            <span className="rv-key rv-key--donor">
              Angle α{al.definition ? ` · ${al.definition}` : ""}
            </span>
            <span className="rv-key rv-key--synth">
              Angle κ{ka.definition ? ` · ${ka.definition}` : ""}
            </span>
          </div>
          {(my.alpha || hy.alpha) && (
            <p className="rvisual__note">
              Myopia α {my.alpha} · κ {my.kappa}
              {"   ·   "}
              Hyperopia α {hy.alpha} · κ {hy.kappa}
            </p>
          )}
          <figcaption className="rvisual__cap">
            Front view — the visual, optical and pupillary centres don&rsquo;t
            coincide. Schematic.
          </figcaption>
        </>
      )}
    </figure>
  );
}

/* secondary-iol-position — anterior-segment cross-section showing where a
   secondary intraocular lens can sit: in front of the iris (AC), just behind
   it (sulcus), or fixed out to the sclera. `groups` maps the study's four
   arms onto those positions. */
function SecondaryIolPosition({ decorative, groups }) {
  return (
    <figure
      className={`rvisual rvisual--iol${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <svg
        viewBox="0 0 240 150"
        role={decorative ? "presentation" : "img"}
        aria-label={
          decorative
            ? undefined
            : "Anterior-segment cross-section showing three positions for a secondary intraocular lens: in the anterior chamber in front of the iris, in the ciliary sulcus just behind the iris, and fixed to the sclera."
        }
      >
        <path className="rv-tissue" d="M40 66 Q120 10 200 66" />
        <path className="rv-tissue" d="M40 66 Q24 100 58 134" />
        <path className="rv-tissue" d="M200 66 Q216 100 182 134" />
        <path className="rv-iris" d="M56 80 H104" />
        <path className="rv-iris" d="M136 80 H184" />

        {/* AC lens */}
        <ellipse className="rv-iol" cx="120" cy="56" rx="26" ry="7" />
        <path className="rv-iol" d="M94 56 L60 68 M146 56 L180 68" />
        {/* sulcus lens */}
        <ellipse className="rv-iol" cx="120" cy="92" rx="24" ry="6.5" />
        <path className="rv-iol" d="M96 92 L58 82 M144 92 L182 82" />
        {/* scleral-fixed lens */}
        <ellipse className="rv-iol" cx="120" cy="107" rx="22" ry="6" />
        <path className="rv-iol" d="M98 107 L52 110 M142 107 L188 110" />
        <circle className="rv-anchor" cx="52" cy="110" r="2.6" />
        <circle className="rv-anchor" cx="188" cy="110" r="2.6" />

        <text className="rv-lbl" x="192" y="52">AC</text>
        <text className="rv-lbl" x="192" y="90">sulcus</text>
        <text className="rv-lbl rv-lbl--synth" x="192" y="112">scleral</text>
      </svg>

      {!decorative && (
        <>
          {groups && groups.length > 0 && (
            <div className="rvisual__legend">
              {groups.map((gr) => (
                <span key={gr.name} className="rv-key rv-key--neutral">
                  {gr.name}
                  {gr.position ? ` · ${gr.position}` : ""}
                  {gr.n ? ` · n ${gr.n}` : ""}
                </span>
              ))}
            </div>
          )}
          <figcaption className="rvisual__cap">
            Where a secondary lens can sit. Schematic, not to scale.
          </figcaption>
        </>
      )}
    </figure>
  );
}

/* aso-rna-degradation — an antisense oligonucleotide (cobalt, the
   intervention) base-pairs with the target mRNA (olive); RNase H1 cleaves the
   duplex, so less protein is made and the downstream pathways ease off. */
function AsoRnaDegradation({ decorative, data }) {
  const d = data || {};
  const downstream = d.downstream || [];
  return (
    <figure
      className={`rvisual rvisual--aso${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <svg
        viewBox="0 0 210 108"
        role={decorative ? "presentation" : "img"}
        aria-label={
          decorative
            ? undefined
            : "Schematic: an antisense oligonucleotide base-pairs with the target messenger RNA; RNase H1 cleaves the duplex, reducing protein output and the downstream pathways."
        }
      >
        {/* intact mRNA, then a straight duplex stretch */}
        <path
          className="rv-rna"
          d="M8 44 c 8 -12 16 -12 24 0 s 16 12 24 0 s 16 -12 24 0"
        />
        <path className="rv-rna" d="M80 44 H140" />
        {/* the ASO */}
        <path className="rv-aso" d="M92 54 H136" />
        <path className="rv-rung" d="M98 44 V54 M108 44 V54 M118 44 V54 M128 44 V54" />
        {/* RNase H1 cleavage point */}
        <path className="rv-cut" d="M118 32 l-6 9 h12 z" />
        <text className="rv-lbl" x="98" y="27">RNase H1</text>
        {/* a released fragment */}
        <path
          className="rv-rna rv-rna--frag"
          d="M150 50 c 6 -10 12 -10 18 0 s 12 10 18 0"
        />

        <text className="rv-lbl rv-lbl--donor" x="8" y="30">
          {d.target || "target mRNA"}
        </text>
        <text className="rv-lbl rv-lbl--synth" x="140" y="60">
          {d.intervention || "ASO"}
        </text>
      </svg>

      {!decorative && (
        <>
          <div className="rvisual__legend">
            <span className="rv-key rv-key--donor">{d.target || "target mRNA"}</span>
            <span className="rv-key rv-key--synth">
              {[d.intervention, d.mechanism].filter(Boolean).join(" · ")}
            </span>
          </div>
          {downstream.length > 0 && (
            <p className="rvisual__note">
              Downstream: {downstream.map((x) => `↓ ${x}`).join("  ·  ")}
            </p>
          )}
          <figcaption className="rvisual__cap">
            The oligonucleotide binds the transcript; RNase H1 cleaves it.
            Schematic.
          </figcaption>
        </>
      )}
    </figure>
  );
}

/* lung-fibrosis-function — the fibrotic cascade as a cascade, with the drug
   (cobalt, the intervention) intercepting at the RUNX1 + CBFβ step. */
function LungFibrosisFunction({ decorative, data }) {
  const d = data || {};
  const path = d.pathway || [];
  const targetIdx = path.findIndex((s) => /RUNX1/i.test(s));
  return (
    <figure
      className={`rvisual rvisual--pathway${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <ol
        className="rv-path"
        role={decorative ? "presentation" : "list"}
        aria-label={decorative ? undefined : "Fibrotic cascade with the point of drug action"}
      >
        {path.map((s, i) => (
          <li
            key={s}
            className={`rv-path__node${i === targetIdx ? " is-target" : ""}`}
          >
            <span className="rv-path__label">{s}</span>
            {i === targetIdx && d.intervention && (
              <span className="rv-path__drug">&#8867; {d.intervention}</span>
            )}
          </li>
        ))}
      </ol>

      {!decorative && (
        <>
          {d.modes && d.modes.length > 0 && (
            <p className="rvisual__note">
              Read out two ways — {d.modes.join(" · ")}.
            </p>
          )}
          <figcaption className="rvisual__cap">
            The fibrotic cascade, and where the drug acts. Schematic.
          </figcaption>
        </>
      )}
    </figure>
  );
}

/* grapevine-health-system — a translation table: root-system resilience
   functions (olive) mapped one-to-one onto health-system functions (cobalt),
   with the three Need-Score domains feeding the first row. */
function GrapevineHealthSystem({ decorative, data }) {
  const d = data || {};
  const bio = d.biologicalSide || [];
  const hs = d.healthSystemSide || [];
  const domains = d.scoreDomains || [];
  const rows = Math.max(bio.length, hs.length);
  return (
    <figure
      className={`rvisual rvisual--map${decorative ? " is-teaser" : ""}`}
      {...(decorative ? { "aria-hidden": "true" } : {})}
    >
      <div
        className="rv-map"
        role={decorative ? "presentation" : "img"}
        aria-label={
          decorative
            ? undefined
            : "Grapevine root-system functions mapped onto health-system functions: sense, redistribute, and stay connected."
        }
      >
        <span className="rv-map__head">Grapevine</span>
        <span />
        <span className="rv-map__head">Health system</span>
        {Array.from({ length: rows }).map((_, i) => (
          <Fragment key={i}>
            <span className="rv-map__cell">{bio[i]}</span>
            <span className="rv-map__arr" aria-hidden="true">
              →
            </span>
            <span className="rv-map__cell rv-map__cell--hs">{hs[i]}</span>
          </Fragment>
        ))}
      </div>

      {!decorative && (
        <>
          {domains.length > 0 && (
            <p className="rvisual__note">
              Need Score — {domains.join(" · ")}
            </p>
          )}
          <figcaption className="rvisual__cap">
            Root-system logic mapped onto three system functions. Schematic.
          </figcaption>
        </>
      )}
    </figure>
  );
}

const VISUALS = {
  "corneal-ring-depth": CornealRingDepth,
  "dual-optical-zone": DualOpticalZone,
  "runx1-cytosolic-trap": Runx1CytosolicTrap,
  "ocular-axis-map": OcularAxisMap,
  "secondary-iol-position": SecondaryIolPosition,
  "aso-rna-degradation": AsoRnaDegradation,
  "lung-fibrosis-function": LungFibrosisFunction,
  "grapevine-health-system": GrapevineHealthSystem,
};

export default function ResearchVisual({ type, data, groups, decorative = false }) {
  const Comp = type && VISUALS[type];
  if (Comp) return <Comp decorative={decorative} data={data} groups={groups} />;

  return (
    <div className="rq__plate-ph" aria-hidden="true">
      <ScientificDoodle name="cell" className="rq__plate-mark" />
      <span className="rq__plate-tag">figure</span>
    </div>
  );
}
