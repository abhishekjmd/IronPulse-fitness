type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Group Classes",
    price: "$49",
    period: "/mo",
    features: ["Unlimited Yoga & Cardio", "Locker Access", "Community Events"],
    cta: "Get Started",
  },
  {
    name: "Personal Training",
    price: "$199",
    period: "/mo",
    features: [
      "1-on-1 Dedicated Coach",
      "Customized Nutrition Plan",
      "Monthly Body Scan",
      "Priority Support",
    ],
    cta: "Join Premium",
    featured: true,
  },
  {
    name: "General Training",
    price: "$89",
    period: "/mo",
    features: ["Full Gym Access", "Initial Assessment", "Strength Floor Access"],
    cta: "Get Started",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="font-serif mb-16 text-center text-5xl">Membership Tiers</h3>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const baseClasses = plan.featured
              ? "relative scale-105 rounded-2xl border-2 border-[#d4af35] bg-[#0a0a0a] p-12 text-center text-white shadow-2xl"
              : "rounded-2xl border-2 border-neutral-100 bg-white p-10 text-center";

            return (
              <div className={baseClasses} key={plan.name}>
                {plan.featured ? (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-[#d4af35] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Most Popular
                  </span>
                ) : null}

                <h4 className="font-serif mb-2 text-2xl">{plan.name}</h4>

                <div className={`mb-6 text-4xl font-bold ${plan.featured ? "text-[#d4af35]" : "text-black"}`}>
                  {plan.price}
                  <span className="text-lg font-normal text-neutral-400">{plan.period}</span>
                </div>

                <ul className={`mb-10 space-y-4 text-left ${plan.featured ? "text-neutral-300" : "text-neutral-600"}`}>
                  {plan.features.map((feature) => (
                    <li className="flex items-center" key={feature}>
                      <span className="material-icons mr-2 text-sm text-[#d4af35]">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className={`block w-full rounded py-3 font-bold uppercase tracking-widest transition ${
                    plan.featured
                      ? "bg-[#d4af35] hover:bg-white hover:text-[#d4af35]"
                      : "border-2 border-black hover:bg-black hover:text-white"
                  }`}
                  href="#"
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
