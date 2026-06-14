import {
  Eye, Users, ShoppingCart, TrendingUp, Sparkles, Megaphone, Code2, Search,
  Target, Bot, Palette, LineChart, CheckCircle2, ArrowUpRight, Quote, Plus,
  Minus, Mail, Instagram, Linkedin, Youtube, Twitter, MapPin, Phone,
  Briefcase, Building2, Rocket, ShieldCheck, Zap, Globe,
} from "lucide-react";
import { useState, FormEvent } from "react";
import { MagneticButton } from "./MagneticButton";
import { toast } from "sonner";

/* ---------------- Marquee ---------------- */
export const ClientMarquee = () => {
  const logos = ["Token2049", "Lamborghini", "Aibc.World", "Mall ofEmirates", "Rayup Realestate Inc.", "Cillioniare", "Mercedes-Benz", "Via Cibo", "Spice Bros", "Benelli"];
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-white/5 bg-surface/40 py-10 backdrop-blur-xl">
      <div className="container mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground-muted">
          Trusted by visionary teams worldwide
        </p>
      </div>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {row.map((l, i) => (
            <span key={i} className="font-display text-3xl text-white/40 tracking-wider whitespace-nowrap">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Growth Ecosystem ---------------- */
export const Ecosystem = () => {
  const pillars = [
    { icon: Eye, t: "Attention", d: "Stop the scroll. Build a magnetic brand presence that compounds." },
    { icon: Users, t: "Leads", d: "Predictable pipelines fueled by content, paid, and outbound systems." },
    { icon: ShoppingCart, t: "Customers", d: "Conversion-engineered funnels and offers that close at scale." },
    { icon: TrendingUp, t: "Revenue", d: "Optimize LTV, retention, and ROAS — turn customers into compounding growth." },
  ];
  return (
    <section className="section-pad relative">
      <div className="container">
        <SectionHeader
          eyebrow="The Growth Ecosystem"
          title={<>Four levers.<br /><span className="font-display italic text-gradient-brand">One unfair advantage.</span></>}
          subtitle="We architect every growth lever so they compound — not compete. The result: a brand the market can't ignore and a business that doesn't depend on luck."
        />
        <div className="relative mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.t}
              className="group relative bg-background/80 p-8 transition-colors hover:bg-white/[0.03]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand/20 ring-1 ring-white/10">
                <p.icon className="h-5 w-5 text-brand-glow" />
              </div>
              <div className="text-xs font-mono text-foreground-muted">0{i + 1}</div>
              <h3 className="mt-1 text-2xl font-medium">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Services ---------------- */
const services = [
  { icon: Megaphone, t: "Content & Social", d: "Short-form video, founder-led content, and platform-native systems engineered for distribution." },
  { icon: Palette, t: "Brand & Identity", d: "Visual systems and positioning that command premium pricing and emotional loyalty." },
  { icon: Code2, t: "Web Development", d: "High-conversion websites built on modern stacks — fast, beautiful, and built to scale." },
  { icon: Search, t: "SEO", d: "Technical, content, and authority strategies that compound organic traffic for years." },
  { icon: Target, t: "Paid Advertising", d: "Meta, Google, YouTube and TikTok ads with creative testing systems that print ROAS." },
  { icon: Users, t: "Lead Generation", d: "Outbound, inbound, and partnership pipelines that fill calendars with qualified leads." },
  { icon: Bot, t: "AI Automation", d: "Workflows, agents, and internal tooling that 10x your team without 10x the headcount." },
  { icon: LineChart, t: "Growth Strategy", d: "Quarterly roadmaps, offer engineering, and KPI architecture that align every team." },
  { icon: Mail, t: "Email & CRM", d: "Lifecycle flows, segmentation, and retention engines that turn one-time buyers into compounding revenue." },
  { icon: ShoppingCart, t: "E-Commerce Growth", d: "Shopify builds, CRO, and full-funnel scaling systems engineered to multiply AOV and LTV." },
  { icon: Rocket, t: "Launch Campaigns", d: "End-to-end launch architecture — offer, creative, traffic, and conversion — for products, brands, and founders." },
  { icon: Sparkles, t: "Creative Production", d: "Editorial photography, cinematic video, and ad creative built to stop scrolls and sell." },
  { icon: TrendingUp, t: "Conversion Optimization", d: "Funnel teardowns, landing page systems, and A/B testing that lift conversion across every touchpoint." },
  { icon: Building2, t: "Personal Branding", d: "Founder positioning, thought leadership, and presence engineering on LinkedIn, X, and YouTube." },
  { icon: Globe, t: "Influencer & Partnerships", d: "Curated creator collabs and strategic partnerships that unlock new audiences and trust at scale." },
  { icon: ShieldCheck, t: "Fractional CMO", d: "Embedded growth leadership — strategy, team building, and execution oversight without a full-time hire." },
];

export const Services = () => (
  <section id="services" className="section-pad relative">
    <div className="container">
      <SectionHeader
        eyebrow="What we do"
        title={<>A full-stack growth team<br /><span className="font-display italic text-gradient-brand">on demand.</span></>}
        subtitle="No agency hand-offs. No siloed specialists. One senior team executing every lever required to grow a modern business."
      />
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.t} className="group glass-card relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
            <div className="relative">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-brand-blue/40">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{s.d}</p>
              <ArrowUpRight className="mt-5 h-4 w-4 text-foreground-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-glow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Client Results ---------------- */
export const Results = () => {
  const stats = [
    { k: "+412%", v: "Inbound leads in 90 days", c: "B2B SaaS" },
    { k: "8.6x", v: "Return on ad spend", c: "DTC Beauty" },
    { k: "$2.4M", v: "Revenue from one funnel", c: "Coaching" },
    { k: "0 → 240K", v: "Organic followers", c: "Founder Brand" },
    { k: "-63%", v: "Cost per acquisition", c: "Fintech" },
    { k: "32%", v: "Increase in LTV", c: "Subscription" },
  ];
  return (
    <section className="section-pad relative">
      <div className="container">
        <SectionHeader
          eyebrow="Outcomes, not deliverables"
          title={<>Numbers our clients<br /><span className="font-display italic text-gradient-brand">brag about.</span></>}
        />
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.v} className="glass-card p-8 hover:shadow-glow transition-shadow">
              <div className="text-5xl font-medium tracking-tight text-gradient md:text-6xl">{s.k}</div>
              <div className="mt-4 text-sm text-white">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-foreground-muted">{s.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Case Studies ---------------- */
export const CaseStudies = () => {
  const items = [
    {
      tag: "DTC · Wellness",
      title: "Scaling a wellness brand from $80K to $1.4M/mo",
      desc: "Rebranded the offer, rebuilt creative engine, and architected a 4-stage paid funnel hitting 6.2x ROAS.",
      kpis: ["+1,650% MRR", "6.2x ROAS", "11M views"],
      grad: "from-brand-blue to-brand-violet",
    },
    {
      tag: "B2B · SaaS",
      title: "Building an inbound machine for a Series A SaaS",
      desc: "Content + SEO + LinkedIn engine generating 90+ qualified demos per month — entirely organic.",
      kpis: ["+412% leads", "90 demos/mo", "$2.1M ARR"],
      grad: "from-brand-violet to-pink-500",
    },
    {
      tag: "Personal Brand",
      title: "Launching a founder from 0 to category authority",
      desc: "Short-form content system, podcast positioning, and PR sequencing that compounded over 6 months.",
      kpis: ["0 → 240K", "63M views", "12 keynotes"],
      grad: "from-cyan-400 to-brand-blue",
    },
  ];
  return (
    <section id="work" className="section-pad relative">
      <div className="container">
        <SectionHeader
          eyebrow="Case Studies"
          title={<>Real brands.<br /><span className="font-display italic text-gradient-brand">Real compounding.</span></>}
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-3xl border border-white/5 bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-white/10">
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${c.grad}`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-2">
                  {c.kpis.map((k) => (
                    <span key={k} className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-7">
                <div className="text-[10px] font-mono uppercase tracking-widest text-brand-glow">{c.tag}</div>
                <h3 className="mt-3 text-xl font-medium leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-white">
                  Read case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Industries ---------------- */
export const Industries = () => {
  const items = [
    { icon: Rocket, t: "SaaS & Tech" },
    { icon: ShoppingCart, t: "E-commerce & DTC" },
    { icon: Briefcase, t: "Coaches & Consultants" },
    { icon: Building2, t: "Real Estate" },
    { icon: ShieldCheck, t: "Fintech" },
    { icon: Sparkles, t: "Beauty & Lifestyle" },
    { icon: Zap, t: "Health & Wellness" },
    { icon: Globe, t: "Agencies & Studios" },
  ];
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Industries Served"
          title={<>Built for ambitious operators<br /><span className="font-display italic text-gradient-brand">across categories.</span></>}
        />
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="glass-card flex items-center gap-3 p-5 hover:bg-white/[0.06] transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand/20 ring-1 ring-white/10">
                <it.icon className="h-4 w-4 text-brand-glow" />
              </div>
              <span className="text-sm font-medium">{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Process ---------------- */
export const Process = () => {
  const steps = [
    { t: "Diagnose", d: "We audit your funnel, brand, content, and acquisition — surfacing what's leaking revenue right now." },
    { t: "Strategize", d: "A bespoke 90-day growth roadmap with clear KPIs, owners, and revenue targets — not vibes." },
    { t: "Execute", d: "Our team produces content, campaigns, automation, and creative at agency speed with in-house quality." },
    { t: "Compound", d: "Weekly reporting, iteration, and creative testing turn early wins into a self-reinforcing growth engine." },
  ];
  return (
    <section id="process" className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="The Process"
          title={<>From chaos to<br /><span className="font-display italic text-gradient-brand">compounding growth.</span></>}
        />
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent md:block" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={s.t} className={`grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="glass-card p-8">
                  <div className="font-mono text-xs text-brand-glow">STEP 0{i + 1}</div>
                  <h3 className="mt-2 text-2xl font-medium">{s.t}</h3>
                  <p className="mt-3 text-foreground-muted leading-relaxed">{s.d}</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-32 w-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-2xl animate-pulse-glow" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-surface text-4xl font-display text-gradient-brand">
                      0{i + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Founder ---------------- */
export const Founder = () => (
  <section id="founder" className="section-pad relative">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue/40 via-brand-violet/30 to-background">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="font-display text-7xl text-gradient md:text-8xl">AB</div>
              <div className="mt-2 text-sm text-foreground-muted">Anirudh Bhadwal · Founder</div>
            </div>
            <div className="absolute right-6 top-6 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
              Founder
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-5 max-w-[220px]">
            <div className="text-3xl font-medium text-gradient">800M+</div>
            <div className="text-xs uppercase tracking-widest text-foreground-muted">Views generated under his playbook</div>
          </div>
        </div>

        <div>
          <div className="eyebrow">Founder Story</div>
          <h2 className="mt-5 text-balance text-4xl font-medium leading-tight md:text-5xl">
            <span className="text-gradient">From obsessed creator to</span>{" "}
            <span className="font-display italic text-gradient-brand">growth architect.</span>
          </h2>
          <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
            <p>
              Anirudh started NRD Creatives with a single conviction: most businesses
              don't have a marketing problem — they have an <span className="text-white">attention</span> problem.
            </p>
            <p>
              After scaling personal brands, DTC labels, and SaaS companies past 100M+
              cumulative views and tens of millions in tracked pipeline, he built NRD
              as the team he wished existed — strategists, creators, engineers, and
              media buyers operating as one growth unit.
            </p>
            <p>
              Today, NRD partners with a select group of founders ready to become
              category-defining brands.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-brand-blue/60 pl-5 italic text-white/90">
            "Attention is the asset. Everything else is a function of it."
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Tech Stack ---------------- */
export const TechStack = () => {
  const stack = [
    "React", "Next.js", "TypeScript", "Tailwind", "Framer", "Figma",
    "Webflow", "Shopify", "HubSpot", "Salesforce", "Meta Ads", "Google Ads",
    "GA4", "Mixpanel", "Hotjar", "Notion", "Make", "Zapier", "n8n", "OpenAI",
    "Anthropic", "ElevenLabs", "Runway", "Descript",
  ];
  return (
    <section className="section-pad relative">
      <div className="container">
        <SectionHeader
          eyebrow="Technology Stack"
          title={<>The arsenal behind<br /><span className="font-display italic text-gradient-brand">every growth win.</span></>}
          subtitle="Best-in-class tools, custom AI agents, and proprietary playbooks — calibrated to your stack."
        />
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {stack.map((s) => (
            <span
              key={s}
              className="glass rounded-full px-5 py-2.5 text-sm text-foreground-muted transition-all hover:text-white hover:border-brand-blue/40"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Testimonials ---------------- */
export const Testimonials = () => {
  const items = [
    { q: "NRD's methods are business and Extraordinary. They know exactly what you need and they’ll tell you to pursue only what you need. Impressed with their services..", n: "Brand Manager", r: "Mercedes-Benz, India" },
    { q: "It was incredible to reconnect in person with the crypto community at TOKEN2049 in Singapore. Good Job done by NRD & Team..", n: "Token 2049", r: "Organiser" },
    { q: "Anirudh's Artistry embarked on a comprehensive digital marketing campaign that would encompass the entire spectrum of Sigma Group's ventures.", n: "Sigma Group", r: "CEO" },
    { q: "Best investment we've made in the business. Period. The team operates at a level I didn't think existed.", n: "Jordan Mills", r: "Founder, Aether Studio" },
  ];
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Founders who<br /><span className="font-display italic text-gradient-brand">stopped guessing.</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((t) => (
            <figure key={t.n} className="glass-card relative p-8">
              <Quote className="h-6 w-6 text-brand-blue/60" />
              <blockquote className="mt-5 text-lg leading-relaxed text-white/90">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-medium">
                  {t.n.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.n}</div>
                  <div className="text-xs text-foreground-muted">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Audit Form + Calendly ---------------- */
export const AuditForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", revenue: "", goal: "" });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.goal.trim()) {
      toast.error("Please fill in your name, email, and primary goal.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setSubmitting(true);

try {
  const response = await fetch(
    "https://formspree.io/f/mykalvwl",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    }
  );

  if (response.ok) {
    toast.success(
      "Audit request received. We'll reach out within 24 hours."
    );

    setForm({
      name: "",
      email: "",
      company: "",
      website: "",
      revenue: "",
      goal: "",
    });
  } else {
    toast.error("Something went wrong. Please try again.");
  }
} catch (error) {
  toast.error("Network error. Please try again.");
}

setSubmitting(false);
    setForm({ name: "", email: "", company: "", website: "", revenue: "", goal: "" });
  };

  return (
    <section id="book" className="section-pad relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-radial" />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="glass-card relative overflow-hidden p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-blue/30 blur-3xl" />
            <div className="relative">
              <div className="eyebrow">Free Growth Audit</div>
              <h3 className="mt-5 text-3xl font-medium md:text-4xl">
                Get a custom <span className="font-display italic text-gradient-brand">growth audit</span>.
              </h3>
              <p className="mt-3 text-foreground-muted">
                Tell us where you are. We'll send a tailored teardown plus 3 specific moves you can make this quarter.
              </p>

              <form onSubmit={submit} className="mt-8 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={100} />
                  <Field label="Work email" required type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={255} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} maxLength={120} />
                  <Field label="Website" value={form.website} onChange={(v) => setForm({ ...form, website: v })} maxLength={200} />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-foreground-muted">Monthly revenue</label>
                  <select value={form.revenue}
  onChange={(e) => setForm({ ...form, revenue: e.target.value })}
  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-brand-blue/60"
>
                    <option value="">Select range</option>
                    <option>Pre-revenue</option>
                    <option>$0 – $10K / mo</option>
                    <option>$10K – $50K / mo</option>
                    <option>$50K – $250K / mo</option>
                    <option>$250K – $1M / mo</option>
                    <option>$1M+ / mo</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-foreground-muted">Primary growth goal *</label>
                  <textarea
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value.slice(0, 1000) })}
                    rows={4}
                    required
                    placeholder="What outcome are you chasing in the next 90 days?"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand-blue/60"
                  />
                </div>
                <MagneticButton type="submit" disabled={submitting} className="mt-2 w-full justify-center">
                  {submitting ? "Sending…" : "Request My Audit"} <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <p className="text-center text-xs text-foreground-muted">We respond within 24 hours. No spam, ever.</p>
              </form>
            </div>
          </div>

          {/* Calendly area */}
          <div className="glass-card relative flex flex-col overflow-hidden p-8 md:p-10">
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-violet/30 blur-3xl" />
            <div className="relative flex flex-1 flex-col">
              <div className="eyebrow">Book A Strategy Call</div>
              <h3 className="mt-5 text-3xl font-medium md:text-4xl">
                Skip the form.<br /><span className="font-display italic text-gradient-brand">Talk to us directly.</span>
              </h3>
              <p className="mt-3 text-foreground-muted">
                A focused 30-minute call to map your bottleneck and outline what a partnership with NRD would look like.
              </p>

              {/* Calendly placeholder — drop in your scheduling link */}
              <div className="mt-8 flex flex-1 flex-col justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h4 className="mt-5 text-lg font-medium">Calendly Integration</h4>
                <p className="mt-2 text-sm text-foreground-muted">
                Book a complimentary strategy session to uncover growth opportunities, identify bottlenecks, and build a clear roadmap for scaling your business.
                </p>
                <a
                  href="https://calendly.com/anirudhbhadwal242/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-6 self-center"
                >
                  Book My Free Strategy Call <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="mt-6 grid grid-cols-3 gap-3 text-left text-xs text-foreground-muted">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3"><div className="font-mono text-white">30m</div>Discovery call</div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3"><div className="font-mono text-white">Free</div>No obligation</div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3"><div className="font-mono text-white">24h</div>Avg response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FAQ ---------------- */
export const FAQ = () => {
  const items = [
    { q: "Who do you work best with?", a: "Founders and growth leaders at $30K+/mo who are ready to invest in a real growth engine — not a freelancer juggling tasks." },
    { q: "How is NRD different from a typical agency?", a: "We operate as an embedded growth team — strategy, creative, paid, content, and engineering under one roof, with senior operators on every account." },
    { q: "How fast will I see results?", a: "Foundational systems ship in the first 30 days. Most clients see measurable lift in pipeline or revenue within 60–90 days." },
    { q: "Do you offer one-off projects?", a: "Occasionally — usually brand sprints or website builds. Our highest-impact work is 6+ month growth partnerships." },
    { q: "What does pricing look like?", a: "Engagements start at $8K/mo and scale based on scope. We'll quote precisely on the strategy call." },
    { q: "Can you work with our in-house team?", a: "Absolutely. We frequently plug in alongside in-house marketing, design, and product teams to accelerate output." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad">
      <div className="container max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Answers before<br /><span className="font-display italic text-gradient-brand">you ask.</span></>}
        />
        <div className="mt-14 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium md:text-lg">{it.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid overflow-hidden px-6 transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pb-6 text-foreground-muted leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Final CTA ---------------- */
export const FinalCTA = () => (
  <section className="section-pad">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-10 text-center md:p-20">
        <div className="absolute inset-0 -z-10 bg-gradient-aurora opacity-20 blur-3xl animate-aurora" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="eyebrow mx-auto">Ready when you are</div>
        <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-medium leading-tight md:text-6xl lg:text-7xl">
          <span className="text-gradient">Become a brand</span>{" "}
          <span className="font-display italic text-gradient-brand">people can't ignore.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-foreground-muted">
          One strategy call. One clear plan. One unfair growth advantage.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}>
            Book A Strategy Call <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Our Work
          </MagneticButton>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Footer ---------------- */
export const Footer = () => {
  const [email, setEmail] = useState("");
  const sub = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Subscribed. Welcome to the inside list.");
    setEmail("");
  };
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/5 bg-surface/40 pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-xl bg-gradient-brand shadow-glow">
                <div className="absolute inset-[2px] rounded-[10px] bg-background flex items-center justify-center text-[11px] font-bold text-gradient-brand">
                  NRD
                </div>
              </div>
              <span className="text-base font-medium">NRD Creatives</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground-muted">
              The digital growth partner for ambitious brands. Attention, leads, customers, revenue — engineered.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground-muted transition-all hover:border-brand-blue/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Services" links={["Content & Social", "Branding", "Web Development", "SEO", "Paid Ads", "AI Automation"]} />
          <FooterCol title="Company" links={["About", "Case Studies", "Process", "Founder", "Careers", "Contact"]} />

          <div>
            <h4 className="text-sm font-medium">Get the growth letter</h4>
            <p className="mt-2 text-sm text-foreground-muted">
              Weekly playbooks, breakdowns, and frameworks. No fluff.
            </p>
            <form onSubmit={sub} className="mt-5 flex gap-2">
              <input
                type="email"
                value={email}
                maxLength={255}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@brand.com"
                className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand-blue/60"
              />
              <button type="submit" aria-label="Subscribe" className="rounded-full bg-gradient-brand p-2.5 text-white shadow-glow transition-transform hover:scale-105">
                <Mail className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-foreground-muted">
              <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@nrdcreatives.com</div>
              <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +1 (415) 555-0199</div>
              <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Remote · Worldwide</div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 text-xs text-foreground-muted md:flex-row">
          <div>© {new Date().getFullYear()} NRD Creatives. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-sm font-medium">{title}</h4>
    <ul className="mt-5 space-y-3 text-sm text-foreground-muted">
      {links.map((l) => (
        <li key={l}>
          <a href="#" className="transition-colors hover:text-white">{l}</a>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------- Shared bits ---------------- */
const SectionHeader = ({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: React.ReactNode; subtitle?: string }) => (
  <div className="mx-auto max-w-3xl text-center">
    <div className="eyebrow">{eyebrow}</div>
    <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
      {title}
    </h2>
    {subtitle && <p className="mx-auto mt-6 max-w-2xl text-foreground-muted">{subtitle}</p>}
  </div>
);

const Field = ({
  label, required, type = "text", value, onChange, maxLength,
}: { label: string; required?: boolean; type?: string; value: string; onChange: (v: string) => void; maxLength?: number }) => (
  <div>
    <label className="mb-2 block text-xs uppercase tracking-widest text-foreground-muted">
      {label} {required && <span className="text-brand-glow">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      maxLength={maxLength}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand-blue/60"
    />
  </div>
);
