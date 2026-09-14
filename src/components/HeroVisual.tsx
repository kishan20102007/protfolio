"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export function HeroVisual() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const motionOk = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    const onMove = (event: MouseEvent) => {
      if (!motionOk.matches) return;
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      root.style.setProperty("--px", x.toFixed(3));
      root.style.setProperty("--py", y.toFixed(3));
    };

    const reset = () => {
      root.style.setProperty("--px", "0");
      root.style.setProperty("--py", "0");
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", reset);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[460px] lg:h-[520px]"
      style={{ "--px": "0", "--py": "0" } as CSSProperties}
      aria-hidden
    >
      <div className="absolute inset-8 rounded-full bg-accent/10 blur-3xl" />

      <div
        className="hero-layer-a absolute top-6 left-4 w-[72%] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl"
      >
        <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-2 text-[10px] tracking-wide text-muted">
            product-site.tsx
          </span>
        </div>
        <pre className="px-4 py-3 font-mono text-[11px] leading-5 text-muted">
          <span className="text-accent">const</span> build = {"{"}
          {"\n"}  stack: <span className="text-foreground">&quot;Next.js&quot;</span>,
          {"\n"}  design: <span className="text-foreground">&quot;UI/UX&quot;</span>,
          {"\n"}  motion: <span className="text-foreground">&quot;subtle&quot;</span>,
          {"\n"}  outcome: <span className="text-foreground">&quot;launch-ready&quot;</span>
          {"\n"}
          {"}"};
        </pre>
      </div>

      <div className="hero-layer-b absolute top-28 right-0 w-[58%] rounded-2xl border border-white/10 bg-surface-2 p-4 shadow-xl">
        <p className="text-[10px] tracking-[0.18em] text-accent uppercase">
          Website preview
        </p>
        <p className="mt-2 text-sm font-medium">Brand landing page</p>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-4/5 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/8" />
          <div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-accent/25 to-white/5" />
        </div>
      </div>

      <div className="hero-layer-c absolute bottom-16 left-2 w-[52%] rounded-2xl border border-white/10 bg-surface p-4 shadow-xl">
        <p className="text-[10px] tracking-[0.18em] text-accent uppercase">
          AI creative
        </p>
        <p className="mt-2 text-sm font-medium">Campaign visual</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-accent/20" />
          <div className="h-10 rounded-lg bg-white/8" />
          <div className="h-10 rounded-lg bg-white/12" />
        </div>
      </div>

      <div className="hero-layer-d absolute right-6 bottom-8 flex flex-wrap gap-2">
        {["React", "Next.js", "Figma", "AI"].map((label) => (
          <span
            key={label}
            className="rounded-full border border-white/10 bg-[#08090c]/80 px-3 py-1 text-[11px] text-muted backdrop-blur"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
