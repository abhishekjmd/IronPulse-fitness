"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you offer a free trial pass?",
    answer:
      "Yes, we offer a complimentary 3-day experience for Ahmedabad residents. You can book yours via the Quick Actions below or visit our reception.",
  },
  {
    question: "Is there dedicated parking available?",
    answer: "Yes, dedicated parking is available for members and trial visitors during all operating hours.",
  },
  {
    question: "How do I book a Personal Training session?",
    answer: "You can submit the form above or call us directly, and our consultant will assign your first PT assessment slot.",
  },
  {
    question: "What are your membership cancellation policies?",
    answer: "Membership cancellation depends on your selected plan tenure. Our front desk team will guide you through all policy terms.",
  },
];

export default function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-zinc-500">Quick answers to common inquiries about IronPulse.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div className="border-b border-zinc-200 pb-4" key={faq.question}>
              <button
                className="group flex w-full items-center justify-between py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span className="text-lg font-bold transition-colors group-hover:text-[#ecb913]">{faq.question}</span>
                <span className="material-icons text-zinc-400">{isOpen ? "remove" : "add"}</span>
              </button>
              {isOpen ? <div className="pb-4 text-zinc-500">{faq.answer}</div> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
