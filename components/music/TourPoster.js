"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

/**
 * Section 4 — the Fall 2026 flyer as artwork: pinned, tilted, taped, with a
 * paper shadow. Click to enlarge. If the asset isn't in place yet, a styled
 * placeholder stands in (the Tour Dates section above stays authoritative).
 */
export default function TourPoster({ poster }) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const usable = !failed && poster?.src;

  return (
    <section className="poster" aria-label="Fall 2026 tour poster">
      <div className="poster__stage">
        <button
          type="button"
          className="poster__frame"
          onClick={() => usable && setOpen(true)}
          aria-label={
            usable ? "Enlarge the Fall 2026 tour poster" : "Tour poster coming soon"
          }
          aria-disabled={!usable}
        >
          <span className="poster__tape poster__tape--a" aria-hidden="true" />
          <span className="poster__tape poster__tape--b" aria-hidden="true" />

          {usable ? (
            <img
              className="poster__img"
              src={poster.src}
              alt={poster.alt}
              onError={() => setFailed(true)}
            />
          ) : (
            <span className="poster__placeholder">
              <span className="poster__placeholder-kicker">Fall 2026</span>
              <span className="poster__placeholder-word">BARAKE</span>
              <span className="poster__placeholder-note">tour poster — coming soon</span>
            </span>
          )}
        </button>
      </div>

      {usable && (
        <Lightbox
          images={[{ src: poster.src, alt: poster.alt }]}
          index={open ? 0 : null}
          onClose={() => setOpen(false)}
          onIndex={() => {}}
          label="Fall 2026 tour poster"
        />
      )}
    </section>
  );
}
