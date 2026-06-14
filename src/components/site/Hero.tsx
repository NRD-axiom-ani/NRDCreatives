import { ArrowRight, Play, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { Particles } from "./Particles";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40">
      {/* Aurora orb */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60">
        <div className="absolute inset-0 animate-aurora rounded-full bg-gradient-aurora blur-3xl" />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      {/* Particles */}
      <Particles density={70} />
      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-violet/30 blur-3xl animate-float-slow" />

      <div className="container relative">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <Sparkles className="h-3 w-3 text-brand-blue" />
            <span>800M+ Views Generated · Trusted by Modern Brands</span>
          </div>

          <h1
            className="mt-8 text-balance text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-[88px] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-gradient">We Build Businesses</span>
            <br />
            <span className="font-display italic text-gradient-brand">People Can't Ignore.</span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-foreground-muted md:text-xl animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            We engineer attention, generate qualified leads, and compound revenue
            for ambitious brands — combining content, performance marketing, brand
            design, and AI automation into one growth engine.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <MagneticButton onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}>
              Book A Strategy Call <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}>
              <Play className="h-4 w-4" /> Explore Our Work
            </MagneticButton>
          </div>

          {/* Stat ribbon */}
          <div className="mt-20 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl md:grid-cols-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            {[
              { k: "800M+", v: "Views Generated" },
              { k: "$50M+", v: "Pipeline Created" },
              { k: "120+", v: "Brands Scaled" },
              { k: "7.4x", v: "Avg ROAS" },
            ].map((s) => (
              <div key={s.v} className="bg-background/80 px-6 py-6 text-left">
                <div className="text-3xl font-medium tracking-tight md:text-4xl text-gradient">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground-muted">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
