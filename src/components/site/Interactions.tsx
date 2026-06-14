import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("no-cursor");
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("no-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%,-50%) scale(${hovering ? 2.4 : 1})`,
        }}
      >
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>
      <div
        className="pointer-events-none fixed z-[99] transition-all duration-500 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%,-50%) scale(${hovering ? 1.6 : 1})`,
        }}
      >
        <div className="h-10 w-10 rounded-full border border-white/30 backdrop-blur-sm" />
      </div>
    </>
  );
};

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
