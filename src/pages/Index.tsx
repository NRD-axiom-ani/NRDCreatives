import { Nav } from "@/components/site/Nav";
import { HeroEngine } from "@/components/site/HeroEngine";
import { CustomCursor, ScrollProgress } from "@/components/site/Interactions";
import { ClientMarquee, Testimonials, AuditForm, FAQ, Footer } from "@/components/site/Sections";
import {
  AttentionEconomy,
  GrowthEngine,
  ResultsDashboard,
  CaseStudiesNetflix,
  RevenueCalculator,
  AIAudit,
  FounderJourney,
  FinalCTAStars,
  NoiseOverlay,
  FloatingBook,
} from "@/components/site/Premium";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NoiseOverlay />
      <ScrollProgress />
      <CustomCursor />
      <FloatingBook />
      <Nav />

      <HeroEngine />
      <ClientMarquee />
      <AttentionEconomy />
      <GrowthEngine />
      <ResultsDashboard />
      <CaseStudiesNetflix />
      <RevenueCalculator />
      <AIAudit />
      <FounderJourney />
      <Testimonials />
      <AuditForm />
      <FAQ />
      <FinalCTAStars />
      <Footer />
    </main>
  );
};

export default Index;
