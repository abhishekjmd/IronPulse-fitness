"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I switch programs later?",
    answer: "Yes, our flexible membership allows you to pivot between programs based on your evolving goals.",
  },
  {
    question: "Are the nutrition plans included?",
    answer: "Nutrition support is included in Fat Loss and Personal Training, with optional add-ons for other programs.",
  },
  {
    question: "Is there a trial period for personal training?",
    answer: "Yes, you can start with a trial consultation and a guided session before committing to the full plan.",
  },
  {
    question: "Do you offer locker and steam room access?",
    answer: "Yes, premium amenities including lockers and steam access are available with select plans.",
  },
];

export default function ProgramsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-black uppercase italic tracking-tighter">
          Common <span className="text-[#d4af35]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div className="overflow-hidden rounded-lg border border-[#d4af35]/10 bg-white" key={faq.question}>
                <button
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#d4af35]/5"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <span className="font-bold">{faq.question}</span>
                  <span className="material-icons text-[#d4af35]">{isOpen ? "remove" : "add"}</span>
                </button>

                {isOpen ? <div className="px-6 pb-6 text-slate-500">{faq.answer}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
