const items = [
  { icon: "star", value: "4.8 Rating", label: "Google Reviews" },
  { icon: "groups", value: "500+ Members", label: "Active Community" },
  { icon: "workspace_premium", value: "5+ Years", label: "Excellence in Fitness" },
];

export default function TrustIndicatorsSection() {
  return (
    <section className="border-b border-[#d4af35]/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          {items.map((item) => (
            <div className="flex flex-col items-center" key={item.value}>
              <span className="material-icons mb-2 text-4xl text-[#d4af35]">{item.icon}</span>
              <h2 className="font-serif text-4xl font-bold">{item.value}</h2>
              <p className="mt-1 text-sm uppercase tracking-widest text-neutral-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
