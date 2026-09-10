import ResearchQuestionCard from "./ResearchQuestionCard";

/**
 * Section 2 — the main section. "I am interested in questions, not just
 * projects." Each entry expands its project framework in place.
 */
export default function ResearchQuestions({ projects, heading, line }) {
  return (
    <section className="rquestions" aria-labelledby="rq-h">
      <h2 className="r-heading" id="rq-h">
        {heading || "Published work and ongoing questions"}
      </h2>
      <p className="r-subline">{line}</p>

      <ol className="rquestions__list">
        {projects.map((p) => (
          <ResearchQuestionCard key={p.id} project={p} />
        ))}
      </ol>
    </section>
  );
}
