import type { Metadata } from "next";
import StoryCtaSection from "../components/story/StoryCtaSection";
import StoryFacilitySection from "../components/story/StoryFacilitySection";
import StoryHero from "../components/story/StoryHero";
import StoryMissionSection from "../components/story/StoryMissionSection";
import StoryOriginSection from "../components/story/StoryOriginSection";
import StoryStatsBar from "../components/story/StoryStatsBar";
import StoryTimeline from "../components/story/StoryTimeline";

export const metadata: Metadata = {
  title: "The IronPulse Story | Luxury Fitness",
  description: "Discover the journey, mission, and values behind IronPulse Fitness.",
};

export default function StoryPage() {
  return (
    <main className="bg-[#f8f8f6] text-slate-800">
      <StoryHero />
      <StoryOriginSection />
      <StoryTimeline />
      <StoryStatsBar />
      <StoryMissionSection />
      <StoryFacilitySection />
      <StoryCtaSection />
    </main>
  );
}
