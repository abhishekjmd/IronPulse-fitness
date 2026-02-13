import type { Metadata } from "next";
import ProgramsCardioSection from "../components/programs/ProgramsCardioSection";
import ProgramsComparisonSection from "../components/programs/ProgramsComparisonSection";
import ProgramsFaqSection from "../components/programs/ProgramsFaqSection";
import ProgramsFatLossSection from "../components/programs/ProgramsFatLossSection";
import ProgramsFinalCtaSection from "../components/programs/ProgramsFinalCtaSection";
import ProgramsFooter from "../components/programs/ProgramsFooter";
import ProgramsHeroSection from "../components/programs/ProgramsHeroSection";
import ProgramsNavbar from "../components/programs/ProgramsNavbar";
import ProgramsPersonalTrainingSection from "../components/programs/ProgramsPersonalTrainingSection";
import ProgramsWeightTrainingSection from "../components/programs/ProgramsWeightTrainingSection";
import ProgramsYogaSection from "../components/programs/ProgramsYogaSection";

export const metadata: Metadata = {
  title: "IronPulse Fitness | Premium Programs",
  description: "Explore IronPulse premium training programs for strength, fat loss, cardio, personal training, and yoga.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-[#f8f7f6] text-slate-900 transition-colors duration-300">
      <ProgramsNavbar />
      <ProgramsHeroSection />
      <ProgramsWeightTrainingSection />
      <ProgramsFatLossSection />
      <ProgramsCardioSection />
      <ProgramsPersonalTrainingSection />
      <ProgramsYogaSection />
      <ProgramsComparisonSection />
      <ProgramsFaqSection />
      <ProgramsFinalCtaSection />
      <ProgramsFooter />
    </main>
  );
}
