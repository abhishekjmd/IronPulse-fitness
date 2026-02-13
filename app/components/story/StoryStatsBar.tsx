const stats = [
  { value: "500+", label: "Active Members" },
  { value: "5+", label: "Years Excellence" },
  { value: "12+", label: "Master Trainers" },
  { value: "10k+", label: "PRs Reached" },
];

export default function StoryStatsBar() {
  return (
    <section className="border-y border-[#eec02b]/10 bg-slate-200 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <div className="font-serif mb-2 text-4xl font-bold text-[#eec02b] md:text-5xl">{item.value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
