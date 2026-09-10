import ScientificDoodle from "./ScientificDoodle";

/* ---- author helpers ---------------------------------------------------- */
const surname = (a) => (a || "").split(",")[0].trim();
const meForm = (a) => {
  const [last, initials] = (a || "").split(",");
  return initials ? `${last.trim()}, ${initials.trim()}` : last.trim();
};

/**
 * Compact author line for a collapsed card.
 *   <= 6 authors  -> all surnames
 *   > 6 authors   -> first · second · … · Barake, K.W. · … · secondLast · last
 * A `compactAuthors` string in the data overrides this entirely.
 */
export function compactAuthorLine(ctx) {
  if (!ctx) return null;
  if (ctx.compactAuthors) return ctx.compactAuthors;
  const a = ctx.authors || [];
  if (a.length === 0) return null;
  if (a.length <= 6) return a.map(surname).join(" · ");

  const meIdx = a.findIndex((x) => /^barake\b/i.test(x));
  const head = a.slice(0, 2).map(surname).join(" · ");
  const tail = a.slice(-2).map(surname).join(" · ");
  if (meIdx > 1 && meIdx < a.length - 2) {
    return `${head} · … · ${meForm(a[meIdx])} · … · ${tail}`;
  }
  return `${head} · … · ${tail}`;
}

/** Render an author string with "Barake, K.W." brought forward. */
function AuthorText({ line, className, meClass }) {
  if (!line) return null;
  const parts = line.split(/(Barake,\s*K\.?\s*W\.?)/);
  return (
    <p className={className}>
      {parts.map((part, i) =>
        /^Barake/.test(part) ? (
          <strong key={i} className={meClass}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

const paperHref = (ctx) =>
  ctx ? ctx.publicationUrl || (ctx.doi ? `https://doi.org/${ctx.doi}` : null) : null;
const doiHref = (ctx) => (ctx && ctx.doi ? `https://doi.org/${ctx.doi}` : null);

/* ---- upper-right: where the work was done --------------------------- */
export function ResearchInstitution({ context }) {
  if (!context || !context.institution) return null;
  const lines = context.institution.split(" · ");
  return (
    <div className="rq-inst">
      <p className="r-label rq-inst__label">Institution</p>
      <p className="rq-inst__body">
        {lines.map((line, i) => (
          <span key={i} className="rq-inst__line">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

/* ---- bottom bar: where the work was published ---------------------- */
export function ResearchPublication({ context, accent }) {
  if (!context || !context.publicationTitle) return null;
  const href = paperHref(context);
  const cite = [context.journal, context.publicationYear]
    .filter(Boolean)
    .join(" · ");
  const showAuthors = context.showAuthors !== false;
  const compact = showAuthors ? compactAuthorLine(context) : null;

  return (
    <div className={`rq-pub rq-pub--${accent || "olive"}`}>
      <p className="r-label rq-pub__label">Publication</p>
      <p className="rq-pub__title">{context.publicationTitle}</p>

      {cite &&
        (href ? (
          <a
            className="rq-pub__journal"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{cite}</span>
            <ScientificDoodle name="arrow" className="rq-pub__arrow" />
            <span className="u-sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="rq-pub__journal is-static">{cite}</span>
        ))}

      {compact && (
        <AuthorText
          line={compact}
          className="rq-pub__authors"
          meClass="rq-pub__me"
        />
      )}
    </div>
  );
}

/* ---- expanded card: full citation --------------------------------- */
export function RelatedPublication({ context }) {
  if (!context || !context.publicationTitle) return null;
  const read = paperHref(context);
  const doi = doiHref(context);
  const showDoi =
    doi && read && context.doi && !read.includes(context.doi);
  const place = [context.lab, context.institution, context.secondaryInstitution].filter(Boolean);
  const leaders = context.leadership || [];
  const fullAuthors =
    context.showAuthors !== false &&
    context.authors &&
    context.authors.length > 0
      ? context.authors.join(", ")
      : null;
  const contextLine = [
    place.join(" · "),
    leaders.length
      ? `${leaders.join(", ")}${context.leadershipLabel ? ` — ${context.leadershipLabel}` : ""}`
      : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="rq-block">
      <p className="r-label rq-block__label">Related publication</p>
      <div className="rq-relpub">
        <p className="rq-relpub__title">{context.publicationTitle}</p>
        {fullAuthors && (
          <AuthorText
            line={fullAuthors}
            className="rq-relpub__authors"
            meClass="rq-relpub__me"
          />
        )}
        <p className="rq-relpub__meta">
          {[context.journal, context.publicationYear].filter(Boolean).join(" · ")}
        </p>
        {contextLine && <p className="rq-relpub__context">{contextLine}</p>}

        <p className="rq-relpub__links">
          {read && (
            <a
              className="r-textlink"
              href={read}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read paper
              <ScientificDoodle
                name="arrow"
                className="r-textlink__arrow r-textlink__arrow--up"
              />
              <span className="u-sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {showDoi && (
            <a
              className="r-textlink"
              href={doi}
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
              <ScientificDoodle
                name="arrow"
                className="r-textlink__arrow r-textlink__arrow--up"
              />
            </a>
          )}
        </p>
      </div>
    </div>
  );
}
