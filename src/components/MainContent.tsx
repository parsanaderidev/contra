import type { CSSProperties } from 'react';
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import BuildingCredit from "@/components/sections/BuildingCredit";
import BuildingMarquee from "@/components/sections/BuildingMarquee";
import ExpertsSection from "@/components/sections/ExpertsSection";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import SegmentsSection from "@/components/sections/SegmentsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function MainContent() {
  return (
    <div
      data-framer-name={"Main"}
      className={"framer-t0e5tt"}
    >
      <Hero />
      <AboutSection />
      <EcosystemSection />
      <BuildingCredit />
      <BuildingMarquee />
      <ExpertsSection />
      <StatsSection />
      <CtaSection />
      <SegmentsSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
