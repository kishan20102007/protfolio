"use client";

import { useEffect, useRef } from "react";

export function InteractiveScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const nodes = Array.from({ length: 18 }, (_, i) => ({
      a: (i / 18) * Math.PI * 2,
      r: 70 + (i % 4) * 18,
      z: (i % 5) - 2,
    }));

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const t = reduce ? 0.4 : frame / 90;

      ctx.strokeStyle = "rgba(92, 200, 255, 0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 108, 0, Math.PI * 2);
      ctx.stroke();

      const points = nodes.map((node) => {
        const x = Math.cos(node.a + t) * node.r;
        const y = Math.sin(node.a + t * 0.8) * (node.r * 0.42) + node.z * 8;
        return { x: cx + x, y: cy + y };
      });

      ctx.strokeStyle = "rgba(92, 200, 255, 0.22)";
      points.forEach((point, i) => {
        const next = points[(i + 3) % points.length];
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
      });

      points.forEach((point) => {
        ctx.fillStyle = "#5cc8ff";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = "rgba(244, 246, 248, 0.9)";
      ctx.font = "12px Geist, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Interactive layer", cx, cy + 4);

      if (!reduce) {
        frame += 1;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-[320px] w-full rounded-3xl border border-white/8 bg-[#0c1016] sm:h-[380px]"
      aria-label="Abstract interactive network visualization"
      role="img"
    />
  );
}
