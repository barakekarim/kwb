"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Minimal keyboard-friendly image lightbox. Sits above the music panel.
 * Escape / click-outside / the × close it; ‹ › (buttons + arrow keys) page
 * through when there's more than one image. `index === null` => closed.
 */
export default function Lightbox({ images, index, onClose, onIndex, label = "Photo viewer" }) {
  const closeRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const open = index !== null && index !== undefined;
  const count = images?.length ?? 0;

  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (delta) => {
      if (!count) return;
      onIndex((index + delta + count) % count);
    },
    [count, index, onIndex]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        go(1);
      } else if (e.key === "ArrowLeft") {
        go(-1);
      }
    };
    // capture so the panel's own Escape handler never sees it
    document.addEventListener("keydown", onKey, true);
    const t = setTimeout(() => closeRef.current?.focus(), 30);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      clearTimeout(t);
    };
  }, [open, onClose, go]);

  if (!open || !mounted) return null;
  const img = images[index];

  return createPortal(
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="lb__close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        ×
      </button>

      {count > 1 && (
        <button
          type="button"
          className="lb__nav lb__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      <figure className="lb__figure" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="lb__img" />
        {img.alt ? <figcaption className="lb__cap">{img.alt}</figcaption> : null}
      </figure>

      {count > 1 && (
        <button
          type="button"
          className="lb__nav lb__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next image"
        >
          ›
        </button>
      )}
    </div>,
    document.body
  );
}
