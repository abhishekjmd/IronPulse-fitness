const items = [
  {
    year: "2019",
    title: "The Genesis",
    text: "IronPulse opens its doors in a repurposed industrial loft with 20 original members.",
    align: "right",
  },
  {
    year: "2021",
    title: "Growth & Evolution",
    text: "Expanding to our first flagship location, integrating biomechanical testing labs.",
    align: "left",
  },
  {
    year: "2023",
    title: "Holistic Launch",
    text: "Introduction of our recovery suite and the Pulse Plate nutrition program.",
    align: "right",
  },
  {
    year: "2025",
    title: "Global Vision",
    text: "Opening our third flagship hub and launching the IronPulse Digital Experience.",
    align: "left",
  },
];

export default function StoryTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#221e10] py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-[#eec02b]/30 md:block" />

        {items.map((item) => (
          <div className="mb-16 w-full items-center justify-between md:flex" key={item.year}>
            {item.align === "right" ? <div className="order-1 w-full md:w-5/12" /> : null}

            {item.align === "left" ? (
              <div className="order-1 w-full rounded-xl border border-[#eec02b]/20 bg-[#eec02b]/5 p-6 text-right md:w-5/12">
                <span className="mb-2 block text-xl font-bold text-[#eec02b]">{item.year}</span>
                <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.text}</p>
              </div>
            ) : null}

            <div className="z-20 order-1 hidden h-8 w-8 items-center justify-center rounded-full bg-[#eec02b] shadow-xl md:flex">
              <span className="text-lg font-semibold text-[#221e10]">•</span>
            </div>

            {item.align === "right" ? (
              <div className="order-1 w-full rounded-xl border border-[#eec02b]/20 bg-[#eec02b]/5 p-6 md:w-5/12">
                <span className="mb-2 block text-xl font-bold text-[#eec02b]">{item.year}</span>
                <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.text}</p>
              </div>
            ) : null}

            {item.align === "left" ? <div className="order-1 w-full md:w-5/12" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
