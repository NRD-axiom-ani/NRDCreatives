import { useEffect, useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

/**
 * Interactive growth engine — animated node network on a canvas.
 * Mouse repels nodes, connections pulse with energy.
 */
const NODES = [
  { label: "Content", x: 0.18, y: 0.28 },
  { label: "SEO", x: 0.32, y: 0.74 },
  { label: "Development", x: 0.50, y: 0.18 },
  { label: "Advertising", x: 0.68, y: 0.72 },
  { label: "Automation", x: 0.82, y: 0.30 },
  { label: "Lead Gen", x: 0.50, y: 0.86 },
  { label: "Branding", x: 0.50, y: 0.50 }, // core
];

export const HeroEngine = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let nodes: { x: number; y: number; bx: number; by: number; vx: number; vy: number; label: string }[] = [];

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = NODES.map((n) => ({
        x: n.x * w, y: n.y * h, bx: n.x * w, by: n.y * h, vx: 0, vy: 0, label: n.label,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.current.x = e.clientX - r.left;
      mouse.current.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.current.x = -9999; mouse.current.y = -9999; };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    let t = 0, raf = 0;
    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);

      // physics
      for (const n of nodes) {
        // spring to base
        const sx = (n.bx - n.x) * 0.04;
        const sy = (n.by - n.y) * 0.04;
        n.vx += sx; n.vy += sy;
        // mouse repulsion
        const dx = n.x - mouse.current.x;
        const dy = n.y - mouse.current.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 40000) {
          const f = (40000 - d2) / 40000;
          const d = Math.sqrt(d2) || 1;
          n.vx += (dx / d) * f * 2.5;
          n.vy += (dy / d) * f * 2.5;
        }
        n.vx *= 0.82; n.vy *= 0.82;
        n.x += n.vx; n.y += n.vy;
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const max = Math.max(w, h) * 0.55;
          if (d > max) continue;
          const alpha = (1 - d / max) * 0.35;
          // pulse traveling along the line
          const pulse = (Math.sin(t * 2 + i * 0.7 + j * 0.3) + 1) / 2;
          const px = a.x + (b.x - a.x) * pulse;
          const py = a.y + (b.y - a.y) * pulse;

          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `hsla(227, 98%, 65%, ${alpha})`);
          grad.addColorStop(1, `hsla(262, 83%, 58%, ${alpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          // pulse dot
          ctx.fillStyle = `hsla(230, 100%, 80%, ${alpha * 2})`;
          ctx.beginPath();
          ctx.arc(px, py, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isCore = i === nodes.length - 1;
        const r = isCore ? 7 : 4.2;
        // glow
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, isCore ? 60 : 30);
        glow.addColorStop(0, isCore ? "hsla(262, 83%, 60%, 0.45)" : "hsla(227, 98%, 65%, 0.35)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isCore ? 60 : 30, 0, Math.PI * 2);
        ctx.fill();
        // core dot
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
        // label
        ctx.font = "500 11px 'JetBrains Mono', monospace";
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.textAlign = "center";
        ctx.fillText(n.label.toUpperCase(), n.x, n.y - 14);
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative isolate min-h-screen overflow-hidden pt-32 md:pt-40"
    >
      {/* Canvas network */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" />
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-aurora opacity-25 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid opacity-30" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)]" />

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <Sparkles className="h-3 w-3 text-brand-blue" />
            <span>Digital Growth Systems · Engineered, Not Outsourced</span>
          </div>

          <h1
            className="mt-8 text-balance text-5xl font-medium leading-[0.98] tracking-tight md:text-7xl lg:text-[96px] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-gradient">Attention Is</span>
            <br />
            <span className="font-display italic text-gradient-brand">The New Currency.</span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-foreground-muted md:text-xl animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            We engineer digital growth systems that turn visibility into
            customers, leads, and revenue.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <MagneticButton onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}>
              Book A Growth Strategy Call <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => document.querySelector("#engine")?.scrollIntoView({ behavior: "smooth" })}>
              <Play className="h-4 w-4" /> See How It Works
            </MagneticButton>
          </div>

          {/* Metric strip */}
          <div
            className="mt-24 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl md:grid-cols-3 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { k: "100M+", v: "Views Generated" },
              { k: "100+", v: "Projects Delivered" },
              { k: "∞", v: "Industries Served" },
            ].map((s) => (
              <div key={s.v} className="bg-background/70 px-6 py-7 text-left">
                <div className="text-4xl font-medium tracking-tight md:text-5xl text-gradient">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-foreground-muted">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-foreground-muted opacity-70">
        scroll
      </div>
    </section>
  );
};
