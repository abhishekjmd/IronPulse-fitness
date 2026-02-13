export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-center text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRRQbwhRtU0HtYkLUA7zEtyy5yPVKT4swFtAA5nR0dPzbtHw9Dje9c6Px4dGW-dyRbbQAJX8sXBC8E6oF4KSCtTBvgSXYlIyBmZvRySyvPKxEAULH95c5a9ViDNut9hBAWc_ljtPzMv2FVJEUeaRWbtN6tQgywknyBtIO3aoHzHE49v6vXhfvzhYtSQV1eEl2I-NaaYMW2AuCMDVWBowMeWkGVa8_EOsR9nJlrxR8QH9m9o4kD0TLypKsll6dklItYIqFwgMhlDy8')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="font-serif mb-6 text-5xl">Your Fitness Journey Starts Today</h2>
        <p className="mb-10 text-xl font-light text-neutral-400">
          Join the most exclusive fitness community in the city and unlock your true potential.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <button className="rounded-full bg-[#d4af35] px-12 py-5 font-bold uppercase tracking-widest text-white transition duration-300 hover:scale-105">
            Book A Free Session
          </button>
          <button className="rounded-full border border-white/30 px-12 py-5 font-bold uppercase tracking-widest text-white transition duration-300 hover:border-white hover:bg-white hover:text-black">
            View All Plans
          </button>
        </div>
      </div>
    </section>
  );
}
