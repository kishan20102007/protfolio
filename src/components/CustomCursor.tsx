"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const motionOk = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setEnabled(motionOk.matches);
    update();
    motionOk.addEventListener("change", update);

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      motionOk.removeEventListener("change", update);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80] hidden h-8 w-8 rounded-full border border-accent/40 bg-accent/10 mix-blend-screen lg:block"
      style={{ transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)` }}
    />
  );
}
