export default function ProgramsPersonalTrainingSection() {
  const features = [
    {
      title: "DNA-Based Diet Plan",
      description: "Personalized nutrition based on your unique genetic markers.",
    },
    {
      title: "24/7 Trainer Support",
      description: "Direct WhatsApp access to your coach for guidance anytime.",
    },
    {
      title: "Advanced Bio-Tracking",
      description: "Monthly body composition analysis and hormonal checks.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div
        className="absolute inset-0 bg-cover opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <span className="material-icons mb-6 block text-5xl text-[#d4af35]">person</span>
          <h2 className="mb-6 text-5xl font-black uppercase italic tracking-tighter">
            One-on-One
            <br />
            <span className="text-[#d4af35]">Mastery</span>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            The ultimate fast-track to your goals. Work directly with IronPulse Master Trainers who design every second of your journey around your physiology.
          </p>

          <div className="mb-10 flex items-center gap-4">
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Starting at</span>
            <span className="text-4xl font-black text-[#d4af35]">
              INR 3,999<span className="text-sm font-normal text-slate-400">/month</span>
            </span>
          </div>

          <button className="rounded border-2 border-[#d4af35] px-10 py-4 font-bold uppercase tracking-widest text-[#d4af35] transition-all hover:bg-[#d4af35] hover:text-white">
            Book Consultation
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">
          <h3 className="mb-6 text-xl font-bold uppercase tracking-widest text-[#d4af35]">Included Premium Features</h3>
          <ul className="space-y-6">
            {features.map((feature) => (
              <li className="flex gap-4" key={feature.title}>
                <span className="material-icons text-[#d4af35]">verified</span>
                <div>
                  <p className="font-bold">{feature.title}</p>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
