"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 72;
const frameUrl = (index: number) => `/hero-frames/frame-${String(index).padStart(3, "0")}.webp`;

export default function HeroSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!container || !canvas || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frames = new Map<number, HTMLImageElement>();
    const requested = new Set<number>();
    let disposed = false;
    let visible = false;
    let activeLoads = 0;
    let target = 0;
    let painted = -1;
    let raf = 0;

    const draw = () => {
      // Keep the closest decoded frame visible while the requested frame loads.
      let nearest = -1;
      for (const index of frames.keys()) {
        if (nearest === -1 || Math.abs(index - target) < Math.abs(nearest - target)) nearest = index;
      }
      const image = frames.get(nearest);
      if (!image || nearest === painted) return;
      if (canvas.width !== image.naturalWidth || canvas.height !== image.naturalHeight) {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      painted = nearest;
    };

    const load = () => {
      if (disposed) return;
      const candidates = motion.matches || !visible
        ? [0]
        : Array.from({ length: FRAME_COUNT }, (_, index) => index).sort((a, b) => Math.abs(a - target) - Math.abs(b - target));
      for (const index of candidates) {
        if (activeLoads >= 3) break;
        if (requested.has(index)) continue;
        requested.add(index);
        activeLoads++;
        const image = new window.Image();
        image.decoding = "async";
        image.onload = () => {
          activeLoads--;
          if (disposed) return;
          frames.set(index, image);
          draw();
          load();
        };
        image.onerror = () => { activeLoads--; if (!disposed) load(); };
        image.src = frameUrl(index);
      }
    };

    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const start = Math.max(0, top - window.innerHeight * 0.7);
      const end = top + rect.height * 0.45;
      const progress = motion.matches ? 0 : Math.min(1, Math.max(0, (window.scrollY - start) / Math.max(1, end - start)));
      target = Math.round(progress * (FRAME_COUNT - 1));
      draw();
      load();
    };
    const schedule = () => { if (!raf) raf = window.requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    }, { rootMargin: "200px" });
    observer.observe(container);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    schedule();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      frames.clear();
    };
  }, []);

  return (
    <div className="hero-sequence" ref={containerRef}>
      <canvas ref={canvasRef} width={640} height={360} role="img" aria-label="Animated character with a floating hat, moving as you scroll" style={{ backgroundImage: `url(${frameUrl(0)})` }} />
      <span className="hero-sequence-hint">SCROLL TO EXPLORE ↓</span>
    </div>
  );
}
