"use client";

import { useId, useState } from "react";
import ScientificDoodle from "./ScientificDoodle";
import ResearchVisual from "./ResearchVisual";
import { ResearchInstitution, ResearchPublication } from "./ResearchContext";
import ResearchProjectExpanded from "./ResearchProjectExpanded";

/**
 * One research question as a notebook plate.
 *
 *   main column   number/year · QUESTION · category · summary
 *   right rail    scientific illustration · INSTITUTION (where it was done)
 *   bottom bar    PUBLICATION (where it was published) · VIEW QUESTION →
 *
 * The question is the intellectual content; the rail and bottom bar are
 * deliberately quiet. VIEW QUESTION expands the project framework in place.
 */
export default function ResearchQuestionCard({ project }) {
  const [open, setOpen] = useState(false);
  const regionId = useId();

  return (
    <li className={`rq rq--${project.accent}${open ? " is-open" : ""}`}>
      <div className="rq__face">
        <div className="rq__main">
          <span className="rq__index">
            <span className="rq__num">{project.number}</span>
            {project.year ? <span className="rq__year">{project.year}</span> : null}
            {project.status === "current" ? (
              <span className="rq__current">Current</span>
            ) : null}
          </span>

          <p className="r-label rq__kicker">Question</p>
          <h3 className="rq__q">{project.question}</h3>
          <p className="rq__tag">{project.shortLabel}</p>
          <p className="rq__summary">{project.summary}</p>
        </div>

        <div className="rq__rail">
          <div className="rq__plate">
            <ResearchVisual
              type={project.visualType}
              data={project.visualData}
              groups={project.groups}
              decorative
            />
          </div>
          <ResearchInstitution context={project.researchContext} />
        </div>
      </div>

      <div className="rq__pub">
        <ResearchPublication
          context={project.researchContext}
          accent={project.accent}
        />
        <button
          type="button"
          className="rq__toggle"
          aria-expanded={open}
          aria-controls={regionId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Hide question" : "View question"}
          <ScientificDoodle name="arrow" className="rq__toggle-arrow" />
        </button>
      </div>

      <div className="rq__expand" id={regionId} role="region" aria-hidden={!open}>
        <div className="rq__expand-inner">
          <ResearchProjectExpanded project={project} />
        </div>
      </div>
    </li>
  );
}
