"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The optional scroll moment: RESEARCH · CARE · SYSTEMS appear one at a time
 * in the left margin as you scroll, then the thread connecting them draws in.
 * Reinforces the biography's idea that saving sight is a medical *and* a
 * systems problem. Extremely subtle; hidden on small screens and under
 * prefers-reduced-motion (it just renders at rest, faint).
 */
const STEPS = ["Research", "Care", "Systems"];

export default function BioRcs() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const items = node.querySelectorAll("[data-step]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = Number(entry.target.getAttribute("data-step"));
            setSeen((s) => Math.max(s, i + 1));
          }
        }
      },
      { threshold: 1, rootMargin: "-38% 0px -38% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <aside
      className={`bio__rcs${seen >= STEPS.length ? " is-linked" : ""}`}
      ref={ref}
      aria-hidden="true"
    >
      <span className="bio__rcs-line" />
      {STEPS.map((label, i) => (
        <span
          key={label}
          data-step={i}
          className={`bio__rcs-item${i < seen ? " is-in" : ""}`}
        >
          {label}
        </span>
      ))}
    </aside>
  );
}
