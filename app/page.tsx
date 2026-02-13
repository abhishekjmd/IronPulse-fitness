import FinalCtaSection from "./components/FinalCtaSection";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ProgramsSection from "./components/ProgramsSection";
import TransformationsSection from "./components/TransformationsSection";
import TrustIndicatorsSection from "./components/TrustIndicatorsSection";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseSection from "./components/WhyChooseSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f8f7f6] text-[#0a0a0a]">
      <HeroSection />
      <TrustIndicatorsSection />
      <ProgramsSection />
      <WhyChooseSection />
      <TransformationsSection />
      <PricingSection />
      <FinalCtaSection />
      <WhatsAppButton />
    </main>
  );
}
