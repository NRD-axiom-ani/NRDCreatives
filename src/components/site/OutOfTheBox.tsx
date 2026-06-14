import { useEffect, useRef, useState } from "react";
import { Sparkles, Zap, Target, Bot, Rocket, LineChart } from "lucide-react";

const boxes = [
  { icon: Sparkles, t: "Brand Gravity", d: "We engineer presence so magnetic, attention finds you.", grad: "from-brand-blue to-brand-violet", tag: "01 · ATTENTION" },
  { icon: Target,   t: "Pipeline Physics", d: "Predictable inbound + outbound that fills calendars on autopilot.", grad: "from-brand-violet to-pink-500", tag: "02 · LEADS" },
  { icon: Zap,      t: "Conversion Craft", d: "Funnels, offers and creative tested until the math becomes unfair.", grad: "from-cyan-400 to-brand-blue", tag: "03 · CUSTOMERS" },
  { icon: Bot,      t: "AI Leverage", d: "Agents and automations that 10x output without 10x payroll.", grad: "from-emerald-400 to-cyan-400", tag: "04 · SYSTEMS" },
  { icon: LineChart,t: "Compounding Engine", d: "Weekly iteration loops that turn early wins into a moat.", grad: "from-amber-400 to-pink-500", tag: "05 · GROWTH" },
  { icon: Rocket,   t: "Category Escape Velocity", d: "From noisy market to category-defining brand.", grad: "from-fuchsia-500 to-brand-blue", tag: "06 · LEGACY" },
];

export const OutOfTheBox = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0..1 within section

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when section top hits bottom of viewport, 1 when bottom hits top
      const total = rect.height + vh;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      className="section-pad relative overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* ambient grid floor */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--brand-blue)/0.25) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--brand-violet)/0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `perspective(800px) rotateX(60deg) translateY(${20 - progress * 40}px)`,
          transformOrigin: "center bottom",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Out of the box</div>
          <h2 className="mt-5 text-balance text-4xl font-medium leading-tight md:text-6xl">
            <span className="text-gradient">Six boxes most agencies</span>{" "}
            <span className="font-display italic text-gradient-brand">never open.</span>
          </h2>
          <p className="mt-5 text-foreground-muted">
            Scroll. Each one literally lifts out of the page.
          </p>
        </div>

        <div
          className="relative mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          style={{ transformStyle: "preserve-3d" }}
        >
          {boxes.map((b, i) => {
            // Stagger each card's local progress
            const start = i * 0.08;
            const end = start + 0.55;
            const local = Math.min(1, Math.max(0, (progress - start) / (end - start)));
            const eased = 1 - Math.pow(1 - local, 3);

            const ty = (1 - eased) * 140 - 20; // drops from above into place
            const rx = (1 - eased) * -45;
            const rz = (1 - eased) * (i % 2 ? 8 : -8);
            const tz = eased * 40;
            const opacity = 0.15 + eased * 0.85;

            return (
              <article
                key={b.t}
                className="group relative"
                style={{
                  transform: `translate3d(0, ${ty}px, ${tz}px) rotateX(${rx}deg) rotateZ(${rz}deg)`,
                  opacity,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.15s linear, opacity 0.2s linear",
                }}
              >
                {/* Floating shadow */}
                <div
                  className="absolute inset-x-6 -bottom-4 h-8 rounded-full bg-black/60 blur-2xl"
                  style={{ opacity: 0.4 + eased * 0.4, transform: `scale(${0.7 + eased * 0.3})` }}
                />
                {/* The actual box */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 p-7 backdrop-blur-xl transition-colors hover:border-white/20">
                  {/* corner glow */}
                  <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${b.grad} opacity-30 blur-3xl transition-opacity group-hover:opacity-60`} />
                  {/* top-edge highlight to suggest a 3D lid */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  {/* side bevel */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/20 via-transparent to-white/10" />

                  <div className="relative">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-glow">
                      {b.tag}
                    </div>
                    <div className={`mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${b.grad} ring-1 ring-white/20 shadow-lg`}>
                      <b.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mt-5 text-xl font-medium">{b.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{b.d}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
