import Link from "next/link";
import { Dumbbell } from "lucide-react";
const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Our Story", href: "/story" },
      { name: "Programs", href: "/programs" },
      { name: "Pricing", href: "/pricing" },
      { name: "Trainers", href: "/trainers" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Schedule", href: "/schedule" },
      { name: "Join Now", href: "/join" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#201d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-[#d4af35]" />
              <span className="font-serif text-2xl font-bold uppercase tracking-tighter">
                IronPulse
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Elevate your fitness journey with precision training and exclusive amenities. Join the elite community at IronPulse.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#d4af35]">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/5 pt-10 md:flex-row">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            © {new Date().getFullYear()} IronPulse Fitness. All Rights Reserved.
          </p>

          <div className="mt-6 flex space-x-6 md:mt-0">
            {["facebook", "instagram", "youtube", "twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-neutral-500 transition hover:text-[#d4af35]"
                aria-label={social}
              >
                {/* Simplified social icons using placeholders/labels for now */}
                <span className="text-xs uppercase font-bold">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
