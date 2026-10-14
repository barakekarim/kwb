"use client";

import { useEffect, useId, useRef } from "react";
import ScientificDoodle from "./ScientificDoodle";
import ResearchVisual from "./ResearchVisual";
import { ResearchInstitution, ResearchPublication } from "./ResearchContext";
import ResearchProjectExpanded from "./ResearchProjectExpanded";

const TILTS = [-0.8, 0.7, -0.5, 0.9, -0.7, 0.5, -0.9, 0.6];

/**
 * One research question as a coloured card.
 *
 *   face     number · year · field  /  QUESTION  /  illustration window
 *            journal · year                                    OPEN →
 *   detail   (open, full width) summary · publication · institution ·
 *            the full project framework
 */
export default function ResearchCard({ project, color, open, onToggle }) {
  const regionId = useId();
  const ref = useRef(null);
  const ctx = project.researchContext;

  // bring an opened card's top into view — it may have jumped rows
  useEffect(() => {
    if (open) ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [open]);

  return (
    <li
      ref={ref}
      className={`rcard rcard--${color}${open ? " is-open" : ""}`}
      style={{ "--tilt": `${TILTS[(Number(project.number) - 1) % TILTS.length]}deg` }}
    >
      <div className="rcard__face">
        <p className="rcard__top">
          <span className="rcard__num">{project.number}</span>
          {project.year && <span className="rcard__year">{project.year}</span>}
          <span className="rcard__field">{project.shortLabel}</span>
          {project.status === "current" && <span className="rcard__current">Current</span>}
        </p>

        <h3 className="rcard__q">{project.question}</h3>

        {project.visualType && (
          <div className="rcard__plate" aria-hidden="true">
            <ResearchVisual
              type={project.visualType}
              data={project.visualData}
              groups={project.groups}
              decorative
            />
          </div>
        )}

        <p className="rcard__foot">
          <span className="rcard__journal">{ctx?.journal}</span>
          {/* the button's ::after covers the whole face, so the card is the target */}
          <button
            type="button"
            className="rcard__open"
            aria-expanded={open}
            aria-controls={regionId}
            onClick={onToggle}
          >
            {open ? "Close" : "Open"}
            <span className="u-sr-only"> question {project.number}</span>
            <ScientificDoodle name="arrow" className="rcard__arrow" />
          </button>
        </p>
      </div>

      <div className="rcard__detail" id={regionId} role="region" hidden={!open}>
        {open && (
          <div className={`rq--${project.accent}`}>
            <p className="rcard__summary">{project.summary}</p>
            <div className="rcard__ctx">
              <ResearchPublication context={ctx} accent={project.accent} />
              <ResearchInstitution context={ctx} />
            </div>
            <ResearchProjectExpanded project={project} />
          </div>
        )}
      </div>
    </li>
  );
}
