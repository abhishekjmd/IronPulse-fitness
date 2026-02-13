const programs = [
  { icon: "fitness_center", title: "Weight Training" },
  { icon: "speed", title: "Fat Loss" },
  { icon: "favorite", title: "Cardio" },
  { icon: "person", title: "Personal Training" },
  { icon: "self_improvement", title: "Yoga" },
];

export default function ProgramsSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d4af35]">Our Specializations</h2>
        <h3 className="font-serif mb-16 text-5xl">Transform Your Body</h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {programs.map((program) => (
            <div
              className="group rounded-xl border-b-4 border-transparent bg-white p-8 shadow-sm transition hover:border-[#d4af35] hover:shadow-xl"
              key={program.title}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af35]/10 transition group-hover:bg-[#d4af35]">
                <span className="material-icons text-[#d4af35] group-hover:text-white">{program.icon}</span>
              </div>
              <h4 className="font-serif mb-3 text-xl">{program.title}</h4>
              <a
                className="flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#d4af35]"
                href="#"
              >
                Learn More <span className="material-icons ml-1 text-xs">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
