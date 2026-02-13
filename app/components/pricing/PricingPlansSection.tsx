const plans = [
  {
    name: "General",
    price: "INR 1,499",
    period: "/month",
    cta: "Get Started",
    featured: false,
    items: [
      { label: "Unlimited Gym Access", included: true },
      { label: "Standard Locker Access", included: true },
      { label: "Shower & Sauna Facilities", included: true },
      { label: "Personal Coach Support", included: false },
    ],
  },
  {
    name: "Personal Training",
    price: "INR 3,999",
    period: "/month",
    cta: "Elevate Now",
    featured: true,
    items: [
      { label: "1-on-1 Bespoke Coaching", included: true },
      { label: "Custom Nutrition Planning", included: true },
      { label: "Priority Support 24/7", included: true },
      { label: "Bi-weekly Body Composition", included: true },
      { label: "Guest Passes (2 per month)", included: true },
    ],
  },
  {
    name: "Group Classes",
    price: "INR 3,999",
    period: "/3 months",
    cta: "Explore Classes",
    featured: false,
    items: [
      { label: "All Group Studio Sessions", included: true },
      { label: "Yoga & Pilates Access", included: true },
      { label: "Wellness Community Events", included: true },
      { label: "Personal Trainer access", included: false },
    ],
  },
];

export default function PricingPlansSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              className={
                plan.featured
                  ? "relative z-10 flex h-[600px] scale-105 flex-col rounded-xl border-2 border-[#e0b629] bg-[#1a1814] p-10 text-white shadow-2xl"
                  : "flex h-full flex-col rounded-xl border border-neutral-100 bg-white p-10 shadow-sm"
              }
              key={plan.name}
            >
              {plan.featured ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#e0b629] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-[#1a1814]">
                  Most Popular
                </div>
              ) : null}

              <h3 className="font-serif mb-2 text-xl font-bold">{plan.name}</h3>
              <div className="mb-6">
                <span className={plan.featured ? "text-4xl font-bold text-[#e0b629]" : "text-4xl font-bold"}>{plan.price}</span>
                <span className="text-sm italic text-neutral-400">{plan.period}</span>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                {plan.items.map((item) => (
                  <li
                    className={`flex items-center text-sm ${
                      item.included ? (plan.featured ? "text-neutral-300" : "text-neutral-600") : "text-neutral-400 line-through"
                    }`}
                    key={item.label}
                  >
                    <span
                      className={`material-icons mr-3 text-sm ${
                        item.included ? "text-[#e0b629]" : "text-neutral-300"
                      }`}
                    >
                      {item.included ? (plan.featured ? "star" : "check") : "close"}
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <button
                className={
                  plan.featured
                    ? "w-full rounded bg-[#e0b629] py-4 text-xs font-black uppercase tracking-widest text-[#1a1814] transition-transform hover:scale-[1.02]"
                    : "w-full rounded border-2 border-[#e0b629] py-4 text-xs font-bold uppercase tracking-widest text-[#e0b629] transition-all hover:bg-[#e0b629] hover:text-white"
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
