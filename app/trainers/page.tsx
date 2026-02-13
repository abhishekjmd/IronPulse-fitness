import type { Metadata } from "next";
import TrainersFooter from "../components/trainers/TrainersFooter";
import TrainersHero from "../components/trainers/TrainersHero";
import TrainersNavbar from "../components/trainers/TrainersNavbar";
import TrainersStatsBar from "../components/trainers/TrainersStatsBar";
import TrainersStories from "../components/trainers/TrainersStories";
import TrainersTimeline from "../components/trainers/TrainersTimeline";
import TrainersGrid from "../components/trainers/TrainersGrid";

export const metadata: Metadata = {
  title: "Expert Training Team | IronPulse Fitness",
  description: "Meet IronPulse elite trainers across strength, yoga, fat loss, cardio, and rehab.",
};

export default function TrainersPage() {
  return (
    <main className="bg-[#f8f8f6] text-[#1a170c]">
      <TrainersNavbar />
      <TrainersHero />
      <TrainersStatsBar />
      <TrainersGrid />
      <TrainersTimeline />
      <TrainersStories />
      <TrainersFooter />
    </main>
  );
}
