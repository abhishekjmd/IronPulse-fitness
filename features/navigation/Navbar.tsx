"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Programs", href: "/programs" },
  { name: "Trainers", href: "/trainers" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/story" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-[#d4af35]/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Dumbbell className="h-8 w-8 text-[#d4af35]" />
          </motion.div>
          <span className="font-serif text-2xl font-bold uppercase tracking-tighter">
            IronPulse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative transition hover:text-[#d4af35]",
                pathname === link.href ? "text-[#d4af35]" : "text-neutral-700"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#d4af35]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Join Now CTA */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            href="/join"
            className="rounded-full bg-[#d4af35] px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#c09d2d] active:scale-95 shadow-lg shadow-[#d4af35]/20"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white border-b border-[#d4af35]/10 p-6 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest",
                  pathname === link.href ? "text-[#d4af35]" : "text-neutral-700"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/join"
              className="rounded-full bg-[#d4af35] text-center py-3 text-xs font-bold uppercase tracking-widest text-white"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
