import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight, Eye, MousePointerClick, Users, ShoppingCart, TrendingUp,
  Sparkles, Megaphone, Search, Palette, Code2, GitBranch, Target, Bot, Workflow,
  ChevronRight, Calculator, Cpu, BarChart3,
} from "lucide-react";
import { MagneticButton } from "./MagneticButton";

/* ------------------------------------------------------------------ */
/* Shared eyebrow + heading                                            */
/* ------------------------------------------------------------------ */
export const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.3em] text-foreground-muted backdrop-blur">
    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_hsl(var(--brand-blue))]" />
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/* 1. The Attention Economy — scroll storytelling                      */
/* ------------------------------------------------------------------ */
const STAGES = [
  { k: "Content",   icon: Megaphone,        d: "Magnetic creative engineered for the platform, not the brief." },
  { k: "Traffic",   icon: Eye,              d: "Distribution loops that compound — paid, organic, owned, earned." },
  { k: "Leads",     icon: MousePointerClick, d: "Captured intent: forms, calls, demos, qualified pipeline." },
  { k: "Sales",     icon: ShoppingCart,     d: "Conversion-engineered journeys that close at scale." },
  { k: "Growth",    icon: TrendingUp,       d: "LTV, retention, and reinvestment — the compounding flywheel." },
];

export const AttentionEconomy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 at top of viewport, 1 when section bottom passes top
      const total = r.height + vh * 0.6;
      const p = Math.max(0, Math.min(1, (vh - r.top) / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length * 1.05));

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The Attention Economy</SectionEyebrow>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
            Every dollar of growth<br />
            <span className="font-display italic text-gradient-brand">starts with attention.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground-muted">
            Five stages. One continuous system. We build the machinery that moves a stranger from scroll to signed contract.
          </p>
        </div>

        <div className="relative mx-auto mt-24 max-w-5xl">
          {/* vertical line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 md:block" />
          <div
            className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-brand-blue via-brand-violet to-transparent shadow-[0_0_20px_hsl(var(--brand-blue))] md:block"
            style={{ height: `${progress * 100}%` }}
          />

          <ol className="space-y-10 md:space-y-20">
            {STAGES.map((s, i) => {
              const reached = i <= active;
              const Icon = s.icon;
              return (
                <li
                  key={s.k}
                  className={`relative grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] ${i % 2 ? "md:[&>.copy]:order-3" : ""}`}
                >
                  <div className={`copy ${i % 2 ? "md:text-left" : "md:text-right"} transition-all duration-700 ${reached ? "opacity-100 translate-y-0" : "opacity-30 translate-y-3"}`}>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-glow">Stage 0{i + 1}</div>
                    <h3 className="mt-2 text-3xl font-medium md:text-4xl">{s.k}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted md:ml-auto">
                      {s.d}
                    </p>
                  </div>

                  {/* node */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-brand blur-xl transition-opacity duration-700 ${reached ? "opacity-60" : "opacity-0"}`}
                    />
                    <div
                      className={`relative flex h-full w-full items-center justify-center rounded-full border bg-background transition-all duration-700 ${
                        reached ? "border-brand-blue/60 scale-100" : "border-white/10 scale-90"
                      }`}
                    >
                      <Icon className={`h-6 w-6 transition-colors ${reached ? "text-white" : "text-foreground-muted"}`} />
                    </div>
                  </div>

                  <div className="hidden md:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 2. The NRD Growth Engine — three pillars                            */
/* ------------------------------------------------------------------ */
const PILLARS = [
  {
    k: "Attract",
    n: "01",
    tagline: "Become impossible to scroll past.",
    color: "from-brand-blue/70 to-cyan-400/30",
    items: [
      { t: "Content Systems", d: "Short-form, long-form, founder-led — production engines that ship daily." },
      { t: "Personal Branding", d: "Position founders as the inevitable voice in their category." },
      { t: "SEO", d: "Technical + topical authority that compounds organic demand for years." },
    ],
  },
  {
    k: "Convert",
    n: "02",
    tagline: "Turn attention into intent into action.",
    color: "from-brand-violet/70 to-pink-500/30",
    items: [
      { t: "Websites", d: "Conversion-engineered builds on modern stacks — fast, beautiful, measurable." },
      { t: "Funnels", d: "Offer architecture and journeys that move strangers to closed revenue." },
      { t: "CRO", d: "Experimentation systems that turn every page into a learning machine." },
    ],
  },
  {
    k: "Scale",
    n: "03",
    tagline: "Engineer the flywheel that doesn't stop.",
    color: "from-emerald-400/60 to-brand-blue/40",
    items: [
      { t: "Paid Advertising", d: "Meta, Google, YouTube, TikTok — creative-first systems that print ROAS." },
      { t: "AI Automation", d: "Agents and workflows that 10x your team without 10x the headcount." },
      { t: "Lead Generation", d: "Outbound + inbound + partnerships filling calendars with qualified intent." },
    ],
  },
];

export const GrowthEngine = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="engine" className="relative py-32 md:py-48">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>The NRD Growth Engine</SectionEyebrow>
            <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
              Three pillars.<br />
              <span className="font-display italic text-gradient-brand">One operating system.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground-muted">
            Each pillar is a complete subsystem. Together, they form the operating system behind every brand we partner with.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => {
            const isActive = active === i;
            return (
              <button
                key={p.k}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group relative overflow-hidden rounded-3xl border bg-surface text-left transition-all duration-500 ${
                  isActive ? "border-white/20 lg:scale-[1.02]" : "border-white/5"
                }`}
              >
                {/* gradient halo */}
                <div className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${p.color} opacity-0 blur-2xl transition-opacity duration-700 ${isActive ? "opacity-40" : ""}`} />
                {/* grid texture */}
                <div className="absolute inset-0 bg-grid opacity-30" />
                {/* shimmer line */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />

                <div className="relative p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-xs text-brand-glow">{p.n}</div>
                    <ArrowUpRight className={`h-4 w-4 transition-all duration-500 ${isActive ? "translate-x-0.5 -translate-y-0.5 text-white" : "text-foreground-muted"}`} />
                  </div>
                  <h3 className="mt-6 text-5xl font-display italic text-gradient md:text-6xl">{p.k}</h3>
                  <p className="mt-3 text-sm text-foreground-muted">{p.tagline}</p>

                  <div className="mt-8 space-y-3 border-t border-white/5 pt-6">
                    {p.items.map((it) => (
                      <div key={it.t} className="group/item flex items-start gap-3">
                        <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-glow" />
                        <div>
                          <div className="text-sm font-medium text-white">{it.t}</div>
                          <div className={`overflow-hidden text-xs leading-relaxed text-foreground-muted transition-all duration-500 ${isActive ? "mt-1 max-h-20 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"}`}>
                            {it.d}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 3. Results Dashboard — floating data viz                            */
/* ------------------------------------------------------------------ */
const useCountUp = (target: number, active: boolean, duration = 1600) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setV(target * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return v;
};

const fmt = (n: number, suffix = "") => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M${suffix}`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K${suffix}`;
  return `${Math.round(n)}${suffix}`;
};

const ResultTile = ({ label, target, suffix, sub, active, big }: {
  label: string; target: number; suffix?: string; sub: string; active: boolean; big?: boolean;
}) => {
  const v = useCountUp(target, active);
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-7 ${big ? "md:row-span-2" : ""}`}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="relative">
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground-muted">{label}</div>
        <div className={`mt-4 font-medium tracking-tight text-gradient ${big ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"}`}>
          {fmt(v, suffix)}
        </div>
        <div className="mt-3 text-sm text-white/80">{sub}</div>
        {/* mini sparkline */}
        <svg viewBox="0 0 200 40" className="mt-6 h-10 w-full text-brand-blue">
          <defs>
            <linearGradient id={`sg-${label}`} x1="0" x2="1">
              <stop offset="0" stopColor="hsl(var(--brand-blue))" />
              <stop offset="1" stopColor="hsl(var(--brand-violet))" />
            </linearGradient>
          </defs>
          <path
            d="M0 32 L20 28 L40 30 L60 22 L80 24 L100 16 L120 18 L140 10 L160 12 L180 6 L200 4"
            fill="none"
            stroke={`url(#sg-${label})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export const ResultsDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Client Results · Live Dashboard</SectionEyebrow>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
            Numbers we've moved.<br />
            <span className="font-display italic text-gradient-brand">Receipts attached.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <ResultTile big label="Total Views" target={100_000_000} suffix="+" sub="Across founder & brand accounts" active={seen} />
          <ResultTile label="Reach" target={10_000_000} suffix="+" sub="Unique humans, last 24 months" active={seen} />
          <ResultTile label="Projects" target={100} suffix="+" sub="Delivered end-to-end" active={seen} />
          <ResultTile label="Industries" target={14} suffix="" sub="Verticals served & dominated" active={seen} />
          <ResultTile label="Avg Lift" target={312} suffix="%" sub="Inbound pipeline in 90 days" active={seen} />
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 4. Netflix-style Case Studies                                       */
/* ------------------------------------------------------------------ */
const CASES = [
  {
    tag: "DTC · Wellness",
    title: "Lumen Skincare",
    headline: "From $80K to $1.4M / mo in 7 months.",
    challenge: "A category-crowded skincare brand stuck in a creative plateau, burning paid spend without scaling profitably.",
    strategy: "Rebuilt the creative engine around founder-led short-form, repositioned the hero offer, and engineered a 4-stage paid funnel.",
    execution: "Daily UGC pipeline, 60+ creative tests / month, conversion sprints on PDP and checkout, retention email + SMS flows.",
    results: ["+1,650% MRR", "6.2x ROAS", "11M views", "44% repeat rate"],
    chart: [12, 14, 20, 28, 36, 52, 71, 88, 100],
    grad: "from-brand-blue to-brand-violet",
  },
  {
    tag: "B2B · SaaS",
    title: "Northwind",
    headline: "90 qualified demos / month. Entirely organic.",
    challenge: "Series A SaaS with great product, zero distribution. Sales team starving for pipeline.",
    strategy: "Built an inbound engine: SEO + thought-leadership content + LinkedIn founder brand + tight sales handoff.",
    execution: "8 pillar pages, 32 supporting articles, 5 posts / week on LinkedIn, automated lead scoring & routing.",
    results: ["+412% leads", "90 demos/mo", "$2.1M ARR", "$0 paid spend"],
    chart: [8, 10, 14, 22, 30, 44, 60, 76, 92],
    grad: "from-brand-violet to-pink-500",
  },
  {
    tag: "Personal Brand",
    title: "Founder X",
    headline: "0 to category authority in 6 months.",
    challenge: "Operator with zero audience trying to launch a premium offer into a noisy market.",
    strategy: "Short-form content system + podcast positioning + PR sequencing + offer architecture for high-ticket conversion.",
    execution: "5 reels/week, 3 podcast guest slots/month, narrative repositioning, sales asset suite.",
    results: ["0 → 240K", "63M views", "12 keynotes", "$1.2M offer launch"],
    chart: [2, 5, 9, 18, 30, 48, 65, 82, 100],
    grad: "from-cyan-400 to-brand-blue",
  },
];

const GrowthChart = ({ data, grad }: { data: number[]; grad: string }) => {
  const path = useMemo(() => {
    const w = 100, h = 40, step = w / (data.length - 1);
    const max = Math.max(...data);
    return data.map((d, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (d / max) * h}`).join(" ");
  }, [data]);
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id={`gc-${grad}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.6" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 40 L 0 40 Z`} fill={`url(#gc-${grad})`} />
      <path d={path} fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
};

export const CaseStudiesNetflix = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Case Studies</SectionEyebrow>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
            Real brands.<br />
            <span className="font-display italic text-gradient-brand">Real compounding.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {CASES.map((c, i) => {
            const isOpen = open === i;
            return (
              <article
                key={c.title}
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen(null)}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-surface transition-all duration-500 ${isOpen ? "lg:-translate-y-2 border-white/20" : ""}`}
              >
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${c.grad}`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3">
                    <GrowthChart data={c.chart} grad={c.title} />
                  </div>
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white backdrop-blur-md ring-1 ring-white/20">
                    {c.tag}
                  </div>
                  <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-emerald-300 backdrop-blur-md ring-1 ring-emerald-300/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_currentColor]" />
                    LIVE
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-medium leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm text-foreground-muted">{c.headline}</p>

                  {/* Expand panel */}
                  <div
                    className="grid overflow-hidden transition-all duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <div className="mt-6 space-y-4 border-t border-white/5 pt-5 text-sm">
                        {[
                          ["Challenge", c.challenge],
                          ["Strategy", c.strategy],
                          ["Execution", c.execution],
                        ].map(([k, v]) => (
                          <div key={k as string}>
                            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-glow">{k}</div>
                            <p className="mt-1 leading-relaxed text-foreground-muted">{v}</p>
                          </div>
                        ))}
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-glow">Results</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {c.results.map((r) => (
                              <span key={r} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white">
                                {r}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] transition-colors ${isOpen ? "text-white" : "text-foreground-muted"}`}>
                    {isOpen ? "Tap to collapse" : "Hover to expand"}
                    <ArrowUpRight className="h-3.5 w-3.5" />
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

/* ------------------------------------------------------------------ */
/* 5. Revenue Calculator                                               */
/* ------------------------------------------------------------------ */
export const RevenueCalculator = () => {
  const [traffic, setTraffic] = useState(10_000);
  const [conv, setConv] = useState(1.5);
  const [aov, setAov] = useState(250);

  // potential = 2.4x conversion uplift, 1.4x AOV uplift (illustrative)
  const current = traffic * (conv / 100) * aov;
  const potential = traffic * ((conv * 2.4) / 100) * (aov * 1.4);
  const opportunity = potential - current;

  return (
    <section className="relative py-32 md:py-48">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow><Calculator className="h-3 w-3" /> Revenue Calculator</SectionEyebrow>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
            What's the cost<br />
            <span className="font-display italic text-gradient-brand">of doing nothing?</span>
          </h2>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* inputs */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 md:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="relative space-y-8">
              <Slider label="Monthly Website Traffic" suffix=" visits" min={500} max={500_000} step={500} value={traffic} onChange={setTraffic} />
              <Slider label="Conversion Rate" suffix="%" min={0.1} max={10} step={0.1} value={conv} onChange={setConv} format={(v) => v.toFixed(1)} />
              <Slider label="Average Customer Value" prefix="$" min={20} max={5000} step={10} value={aov} onChange={setAov} />
            </div>
          </div>

          {/* output */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue/15 via-surface to-brand-violet/15 p-8 md:p-10">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />
            <div className="relative grid h-full grid-rows-3 gap-6">
              <Stat label="Current Monthly Revenue" value={current} tone="muted" />
              <Stat label="Potential With NRD" value={potential} tone="brand" />
              <div className="relative overflow-hidden rounded-2xl border border-brand-blue/30 bg-background/60 p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-glow">Revenue Opportunity</div>
                <div className="mt-2 text-5xl font-medium tracking-tight text-gradient-brand md:text-6xl">
                  ${Math.round(opportunity).toLocaleString()}
                  <span className="ml-2 align-middle text-base font-mono text-foreground-muted">/ mo</span>
                </div>
                <div className="mt-2 text-xs text-foreground-muted">
                  ${Math.round(opportunity * 12).toLocaleString()} / year left on the table.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Slider = ({
  label, value, onChange, min, max, step, prefix = "", suffix = "", format,
}: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; prefix?: string; suffix?: string;
  format?: (v: number) => string;
}) => (
  <div>
    <div className="flex items-end justify-between">
      <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground-muted">{label}</label>
      <div className="text-xl font-medium text-white">
        {prefix}{format ? format(value) : value.toLocaleString()}{suffix}
      </div>
    </div>
    <input
      type="range" min={min} max={max} step={step} value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="mt-4 w-full accent-[hsl(var(--brand-blue))]"
    />
  </div>
);

const Stat = ({ label, value, tone }: { label: string; value: number; tone: "muted" | "brand" }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/40 p-6">
    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground-muted">{label}</div>
    <div className={`mt-2 text-4xl font-medium tracking-tight md:text-5xl ${tone === "brand" ? "text-gradient-brand" : "text-white/80"}`}>
      ${Math.round(value).toLocaleString()}
      <span className="ml-2 align-middle text-sm font-mono text-foreground-muted">/ mo</span>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* 6. AI Growth Audit                                                  */
/* ------------------------------------------------------------------ */
export const AIAudit = () => {
  const [form, setForm] = useState({ url: "", ig: "", brand: "" });
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);

  const run = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.url.trim() && !form.ig.trim() && !form.brand.trim()) return;
    setAnalyzing(true); setDone(false);
    setTimeout(() => { setAnalyzing(false); setDone(true); }, 2200);
  };

  // Deterministic pseudo-scores based on inputs so result feels "live"
  const seed = (form.url + form.ig + form.brand).length || 7;
  const seo = 38 + (seed * 7) % 50;
  const content = 42 + (seed * 11) % 45;
  const conv = 35 + (seed * 13) % 55;

  return (
    <section className="relative py-32 md:py-48">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow><Cpu className="h-3 w-3" /> AI Growth Audit · Preview</SectionEyebrow>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
            See your growth gaps<br />
            <span className="font-display italic text-gradient-brand">in 60 seconds.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* form */}
          <form
            onSubmit={run}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="relative space-y-5">
              <FuturisticInput label="Website URL" placeholder="https://yourbrand.com" value={form.url} onChange={(v) => setForm({ ...form, url: v })} />
              <FuturisticInput label="Instagram Handle" placeholder="@yourbrand" value={form.ig} onChange={(v) => setForm({ ...form, ig: v })} />
              <FuturisticInput label="Business Name" placeholder="Your Brand, Inc." value={form.brand} onChange={(v) => setForm({ ...form, brand: v })} />

              <MagneticButton type="submit" disabled={analyzing} className="mt-3 w-full justify-center">
                {analyzing ? "Analyzing…" : "Run Audit"} <Sparkles className="h-4 w-4" />
              </MagneticButton>
              <p className="text-center text-[10px] font-mono uppercase tracking-[0.25em] text-foreground-muted">
                Powered by NRD's growth diagnostic engine
              </p>
            </div>
          </form>

          {/* output */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-background p-8 md:p-10">
            <div className="absolute inset-0 bg-grid opacity-25" />
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-brand opacity-10 blur-2xl" />

            {/* terminal header */}
            <div className="relative flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground-muted">
                nrd · audit · {analyzing ? "running" : done ? "complete" : "idle"}
              </div>
              <BarChart3 className="h-3.5 w-3.5 text-foreground-muted" />
            </div>

            <div className="relative mt-6 grid grid-cols-3 gap-4">
              <ScoreRing label="SEO" score={done ? seo : 0} />
              <ScoreRing label="Content" score={done ? content : 0} />
              <ScoreRing label="Conversion" score={done ? conv : 0} />
            </div>

            <div className="relative mt-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-glow">Growth Opportunities</div>
              <ul className="mt-4 space-y-2 font-mono text-xs leading-relaxed text-foreground-muted">
                {(done
                  ? [
                      "✓  Title & meta architecture: 12 high-intent keywords missing",
                      "✓  Content velocity below category median by 4.2x",
                      "✓  PDP CTA placement: A/B candidate (est. +18% CVR)",
                      "✓  IG hook strategy: low retention in first 1.5s",
                      "✓  Funnel: no nurture sequence after lead capture",
                    ]
                  : [
                      "›  Awaiting input…",
                      "›  Diagnostic engine standing by.",
                      "›  Submit a URL, handle, or brand name to begin.",
                    ]
                ).map((line) => (
                  <li key={line} className={done ? "text-white/85" : ""}>{line}</li>
                ))}
              </ul>
            </div>

            {analyzing && (
              <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-1/3 animate-[shimmer_1.2s_linear_infinite] bg-gradient-brand" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FuturisticInput = ({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) => (
  <div>
    <label className="mb-2 block text-[10px] font-mono uppercase tracking-[0.3em] text-foreground-muted">{label}</label>
    <div className="group relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, 200))}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-brand-blue/60"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-brand-blue/40 transition-opacity group-focus-within:opacity-100" />
    </div>
  </div>
);

const ScoreRing = ({ label, score }: { label: string; score: number }) => {
  const r = 32, c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const color = score >= 70 ? "hsl(var(--brand-blue))" : score >= 40 ? "hsl(var(--brand-violet))" : "hsl(0 84% 60%)";
  return (
    <div className="flex flex-col items-center">
      <svg width="84" height="84" className="-rotate-90">
        <circle cx="42" cy="42" r={r} fill="none" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="6" />
        <circle
          cx="42" cy="42" r={r} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <div className="-mt-[58px] text-xl font-medium tabular-nums">{Math.round(score)}</div>
      <div className="mt-9 text-[10px] font-mono uppercase tracking-[0.25em] text-foreground-muted">{label}</div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 7. Founder Journey — cinematic timeline                              */
/* ------------------------------------------------------------------ */
const JOURNEY = [
  { y: "2021", t: "Content Creation", d: "First reps. First hooks. First taste of what attention compounds into." },
  { y: "2022", t: "Social Media Growth", d: "Cracked the algo for short-form. Audiences from 0 → 6 figures." },
  { y: "2023", t: "Agency Building", d: "Operationalized the playbook. Built the first real growth team." },
  { y: "2024", t: "Millions of Views", d: "100M+ views generated under one repeatable creative system." },
  { y: "2025", t: "Trading & Business Systems", d: "Compounded capital, sharpened operating instincts, scaled discipline." },
  { y: "2026", t: "NRD Creatives", d: "A digital growth systems company built for category-defining brands." },
];

export const FounderJourney = () => {
  return (
    <section id="founder" className="relative py-32 md:py-48">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Built From The Front Lines</SectionEyebrow>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
            Not theory.<br />
            <span className="font-display italic text-gradient-brand">Five years of receipts.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground-muted">
            NRD is the team Anirudh Bhadwal wished existed when he started. Every step on this timeline is a system we still run today.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* center spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-blue/60 via-brand-violet/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-12 md:space-y-20">
            {JOURNEY.map((j, i) => (
              <li
                key={j.y}
                className={`relative grid items-center gap-6 pl-14 md:grid-cols-2 md:pl-0 ${i % 2 ? "md:[&>.card]:order-2 md:[&>.year]:order-1 md:text-right" : "md:[&>.year]:text-right"}`}
              >
                {/* dot */}
                <span className="absolute left-2 top-3 h-4 w-4 rounded-full border border-white/20 bg-background md:left-1/2 md:-translate-x-1/2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand-blue/40" />
                  <span className="absolute inset-1 rounded-full bg-gradient-brand shadow-[0_0_18px_hsl(var(--brand-blue))]" />
                </span>

                <div className="year font-display text-5xl text-gradient-brand md:text-6xl">{j.y}</div>
                <div className="card relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 md:p-7">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="relative">
                    <h3 className="text-xl font-medium md:text-2xl">{j.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{j.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 8. Cinematic Final CTA — stars                                       */
/* ------------------------------------------------------------------ */
export const FinalCTAStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let stars: { x: number; y: number; z: number; r: number; tw: number }[] = [];

    const resize = () => {
      const r = c.getBoundingClientRect();
      w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr;
      c.style.width = `${w}px`; c.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * w, y: Math.random() * h, z: Math.random(),
        r: Math.random() * 1.2 + 0.2, tw: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(c);

    let raf = 0, t = 0;
    const tick = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.y += 0.05 + s.z * 0.15;
        if (s.y > h) { s.y = 0; s.x = Math.random() * w; }
        const a = 0.4 + Math.sin(t * 2 + s.tw) * 0.4;
        ctx.fillStyle = `hsla(0, 0%, 100%, ${a * (0.5 + s.z * 0.5)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.6 + s.z), 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-background p-10 text-center md:p-24">
          <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" />
          <div className="absolute inset-0 -z-10 bg-gradient-aurora opacity-30 blur-3xl animate-aurora" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--brand-blue)/0.25),transparent_70%)]" />

          <SectionEyebrow>Ready when you are</SectionEyebrow>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-medium leading-[1.02] md:text-6xl lg:text-7xl">
            <span className="text-gradient">Your next customer is</span>{" "}
            <span className="font-display italic text-gradient-brand">already looking for you.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-foreground-muted md:text-lg">
            Let's make sure they find you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}>
              Book A Growth Strategy Call <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}>
              Get A Free Audit
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 9. Site-wide noise overlay                                          */
/* ------------------------------------------------------------------ */
export const NoiseOverlay = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 z-[80] opacity-[0.035] mix-blend-overlay"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
    }}
  />
);

/* ------------------------------------------------------------------ */
/* 10. Floating Book CTA                                                */
/* ------------------------------------------------------------------ */
export const FloatingBook = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-6 right-6 z-[85] transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
    >
      <a
        href="#book"
        className="group flex items-center gap-3 rounded-full border border-white/15 bg-background/70 px-5 py-3 text-sm font-medium text-white shadow-[0_20px_60px_-10px_hsl(var(--brand-blue)/0.6)] backdrop-blur-xl transition-all hover:border-brand-blue/40"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Book a strategy call
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
};
