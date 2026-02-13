import type { Metadata } from "next";
import ContactFaqSection from "../components/contact/ContactFaqSection";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactHero from "../components/contact/ContactHero";
import ContactMapSection from "../components/contact/ContactMapSection";
import ContactQuickActions from "../components/contact/ContactQuickActions";

export const metadata: Metadata = {
  title: "Contact IronPulse Fitness | Premium Luxury Gym",
  description: "Get in touch with IronPulse Fitness for memberships, personal training, and premium gym access.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f8f8f6] text-slate-900 antialiased">
      <ContactHero />
      <ContactFormSection />
      <ContactMapSection />
      <ContactFaqSection />
      <ContactQuickActions />
    </main>
  );
}
