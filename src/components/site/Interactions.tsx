import { useEffect, useRef, useState } from "react";

/* ---------------- Comet tail cursor ---------------- */
export const CustomCursor = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const tailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const target = useRef({ x: -100, y: -100 });
  const nodes = useRef<{ x: number; y: number }[]>([]);
  const hoverRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  const TAIL = 18;

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("no-cursor");

    nodes.current = Array.from({ length: TAIL }, () => ({ x: -100, y: -100 }));

    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      hoverRef.current = !!el.closest("a, button, [data-cursor='hover']");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    let raf = 0;
    const tick = () => {
      // Head chases target
      const head = nodes.current[0];
      head.x += (target.current.x - head.x) * 0.35;
      head.y += (target.current.y - head.y) * 0.35;
      // Tail chain
      for (let i = 1; i < nodes.current.length; i++) {
        const prev = nodes.current[i - 1];
        const cur = nodes.current[i];
        cur.x += (prev.x - cur.x) * 0.32;
        cur.y += (prev.y - cur.y) * 0.32;
      }

      const hover = hoverRef.current;
      if (headRef.current) {
        const s = hover ? 2.2 : 1;
        headRef.current.style.transform = `translate3d(${head.x}px, ${head.y}px, 0) translate(-50%, -50%) scale(${s})`;
      }
      tailRefs.current.forEach((el, i) => {
        if (!el) return;
        const n = nodes.current[i + 1];
        const t = 1 - (i + 1) / TAIL;
        const size = Math.max(2, 10 * t * (hover ? 1.6 : 1));
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.opacity = `${t * 0.85}`;
        el.style.transform = `translate3d(${n.x}px, ${n.y}px, 0) translate(-50%, -50%)`;
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("no-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
      {Array.from({ length: TAIL - 1 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (tailRefs.current[i] = el)}
          className="absolute left-0 top-0 rounded-full bg-white will-change-transform"
          style={{ filter: "blur(0.5px)" }}
        />
      ))}
      <div
        ref={headRef}
        className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full bg-white will-change-transform"
        style={{ boxShadow: "0 0 14px rgba(255,255,255,0.9)" }}
      />
    </div>
  );
};

/* ---------------- Scroll progress ---------------- */
export const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[90] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-brand transition-[width] duration-150"
        style={{ width: `${p}%`, boxShadow: "0 0 12px hsl(var(--brand-blue))" }}
      />
    </div>
  );
};
