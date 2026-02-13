"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can I freeze my membership?",
    a: "Yes, all memberships can be frozen for up to 30 days per year for a nominal administrative fee of INR 500. Documentation for medical reasons may waive this fee.",
  },
  {
    q: "Are guest passes included in all plans?",
    a: "Guest passes are exclusively included in our Personal Training plan. Other members can purchase single-day guest passes at the front desk.",
  },
  {
    q: "Do you offer corporate discounts?",
    a: "Absolutely. We partner with several luxury corporate entities. Reach out to our concierge for a custom enterprise quote.",
  },
];

export default function PricingFaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="border-y border-neutral-100 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div className="border-b border-neutral-100 pb-6" key={item.q}>
                <button className="group flex w-full items-center justify-between text-left" onClick={() => setOpen(isOpen ? -1 : idx)} type="button">
                  <span className="font-serif text-lg font-bold">{item.q}</span>
                  <span className={`material-icons text-[#e0b629] transition-transform ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`}>
                    expand_more
                  </span>
                </button>
                {isOpen ? <div className="mt-4 text-sm font-light leading-relaxed text-neutral-500">{item.a}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
