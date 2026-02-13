const actions = [
  {
    icon: "event_available",
    title: "Book Free Trial",
    description: "Start your journey with a 3-day premium access pass.",
    cta: "Reserve Now",
    buttonClass: "bg-[#ecb913] text-black",
  },
  {
    icon: "chat",
    title: "Chat on WhatsApp",
    description: "Instant answers from our support team on WhatsApp.",
    cta: "Start Chat",
    buttonClass: "bg-white text-black",
  },
  {
    icon: "call",
    title: "Call Directly",
    description: "Speak with a membership specialist immediately.",
    cta: "Call Now",
    buttonClass: "bg-zinc-800 text-white",
  },
];

export default function ContactQuickActions() {
  return (
    <section className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {actions.map((action) => (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all hover:border-[#ecb913]" key={action.title}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ecb913]/10">
                <span className="material-icons text-3xl text-[#ecb913]">{action.icon}</span>
              </div>
              <h4 className="mb-2 text-xl font-bold">{action.title}</h4>
              <p className="mb-8 text-zinc-400">{action.description}</p>
              <button className={`w-full rounded py-3 text-sm font-bold uppercase tracking-widest ${action.buttonClass}`}>{action.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
