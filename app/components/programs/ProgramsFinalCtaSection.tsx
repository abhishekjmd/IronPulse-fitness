export default function ProgramsFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-center">
      <div className="hero-pattern absolute inset-0 bg-[#d4af35]/5 opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-4xl font-black uppercase italic tracking-tighter text-white md:text-6xl">
          Ready to Start Your
          <br />
          <span className="text-[#d4af35]">Transformation?</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-400">
          Join the IronPulse elite. Limited slots available for our personalized programs this month.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-[#d4af35] px-12 py-5 text-lg font-black uppercase tracking-widest text-white shadow-2xl shadow-[#d4af35]/30 transition-all hover:scale-105">
            Claim Your Free Day Pass
          </button>
          <button className="rounded-full border border-white/20 px-12 py-5 text-lg font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
