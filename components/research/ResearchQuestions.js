"use client";

import { useState } from "react";
import ResearchCard from "./ResearchCard";

// one colour per field — the BARAKE palette, so the panels feel related
export const FIELD_COLORS = {
  Cornea: "acid",
  Retina: "cobalt",
  Optics: "lavender",
  Surgery: "orange",
  Fibrosis: "pink",
  "Health systems": "yellow",
};

/**
 * Section 2 — the main section. Every question is a coloured card; chips
 * filter by field and a card opens full-width to its project framework.
 */
export default function ResearchQuestions({ projects, heading, line }) {
  const [field, setField] = useState("All");
  const [openId, setOpenId] = useState(null);

  const fields = [...new Set(projects.map((p) => p.shortLabel))];
  const shown = field === "All" ? projects : projects.filter((p) => p.shortLabel === field);

  return (
    <section className="rquestions" aria-label={heading || "Research questions"}>
      {heading && <h2 className="r-heading">{heading}</h2>}
      {line && <p className="r-subline">{line}</p>}

      <div className="rfilter" role="group" aria-label="Filter by field">
        {["All", ...fields].map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.shortLabel === f).length;
          return (
            <button
              key={f}
              type="button"
              className={`rfilter__chip rfilter__chip--${FIELD_COLORS[f] || "all"}`}
              aria-pressed={field === f}
              onClick={() => {
                setField(f);
                setOpenId(null);
              }}
            >
              {f}
              <span className="rfilter__n">{count}</span>
            </button>
          );
        })}
      </div>

      <ol className="rcards">
        {shown.map((p) => (
          <ResearchCard
            key={p.id}
            project={p}
            color={FIELD_COLORS[p.shortLabel] || "acid"}
            open={openId === p.id}
            onToggle={() => setOpenId((id) => (id === p.id ? null : p.id))}
          />
        ))}
      </ol>
    </section>
  );
}
