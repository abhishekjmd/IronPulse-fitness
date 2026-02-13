import type { Metadata } from "next";
import TrainersHero from "../components/trainers/TrainersHero";
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
      <TrainersHero />
      <TrainersStatsBar />
      <TrainersGrid />
      <TrainersTimeline />
      <TrainersStories />
    </main>
  );
}
