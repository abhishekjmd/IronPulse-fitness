const steps = [
  {
    icon: "calendar_today",
    title: "Book a Consultation",
    text: "Schedule a 15-minute intro call to discuss your fitness goals and history.",
  },
  {
    icon: "psychology",
    title: "Get Matched",
    text: "We pair you with the trainer who best suits your specific needs and personality.",
  },
  {
    icon: "play_circle_filled",
    title: "Start Training",
    text: "Begin your customized program with 1-on-1 guidance and weekly check-ins.",
  },
];

export default function TrainersTimeline() {
  return (
    <section className="border-t border-[#edbc1d]/10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif mb-4 text-4xl">Start Your Journey</h2>
          <p className="text-sm font-bold uppercase tracking-widest text-[#edbc1d]">Three Simple Steps to Success</p>
        </div>

        <div className="relative flex flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0">
          <div className="absolute top-1/2 left-0 z-0 hidden h-0.5 w-full -translate-y-1/2 bg-[#edbc1d]/20 md:block" />
          {steps.map((step) => (
            <div className="group relative z-10 flex max-w-xs flex-col items-center text-center" key={step.title}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#edbc1d] text-[#221e10] shadow-lg shadow-[#edbc1d]/20 transition-transform group-hover:scale-110">
                <span className="material-icons text-3xl">{step.icon}</span>
              </div>
              <h4 className="mb-2 text-xl font-bold">{step.title}</h4>
              <p className="text-sm opacity-70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
