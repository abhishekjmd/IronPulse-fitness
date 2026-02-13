import type { Metadata } from "next";
import PricingAddOnsSection from "../components/pricing/PricingAddOnsSection";
import PricingComparisonSection from "../components/pricing/PricingComparisonSection";
import PricingCtaSection from "../components/pricing/PricingCtaSection";
import PricingFaqSection from "../components/pricing/PricingFaqSection";
import PricingGuaranteeSection from "../components/pricing/PricingGuaranteeSection";
import PricingHeroSection from "../components/pricing/PricingHeroSection";
import PricingPlansSection from "../components/pricing/PricingPlansSection";

export const metadata: Metadata = {
  title: "IronPulse Pricing & Plans | Luxury Fitness",
  description: "Simple and transparent pricing plans for premium fitness memberships.",
};

export default function PricingPage() {
  return (
    <main className="bg-[#f8f7f6] text-[#1a1814]">
      <PricingHeroSection />
      <PricingPlansSection />
      <PricingComparisonSection />
      <PricingAddOnsSection />
      <PricingFaqSection />
      <PricingGuaranteeSection />
      <PricingCtaSection />
    </main>
  );
}
