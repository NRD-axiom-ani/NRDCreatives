import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { CustomCursor, ScrollProgress } from "@/components/site/Interactions";
import {
  ClientMarquee, Ecosystem, Services, Results, CaseStudies, Industries,
  Process, Founder, TechStack, Testimonials, AuditForm, FAQ, FinalCTA, Footer,
} from "@/components/site/Sections";
import { OutOfTheBox } from "@/components/site/OutOfTheBox";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <Hero />
      <ClientMarquee />
      <Ecosystem />
      <Services />
      <OutOfTheBox />
      <Results />
      <CaseStudies />
      <Industries />
      <Process />
      <Founder />
      <TechStack />
      <Testimonials />
      <AuditForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
