"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";
import { motionEasings } from "@/lib/motion/easings";

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
  const { scrollY } = useScroll();

  // On Scroll effects
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const shadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.05)"]
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: motionEasings.standard }}
      style={{ backgroundColor, backdropFilter: backdropBlur, boxShadow: shadow }}
      className="fixed top-0 z-50 w-full border-b border-[#d4af35]/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
                "relative transition duration-200 hover:text-[#d4af35]",
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: motionEasings.standard }}
          >
            <Link
              href="/join"
              className="rounded-full bg-[#d4af35] px-6 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#d4af35]/20 focus:outline-none focus:ring-2 focus:ring-[#d4af35] focus:ring-offset-2"
            >
              Join Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: motionEasings.standard }}
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
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  href="/join"
                  className="block rounded-full bg-[#d4af35] text-center py-3 text-xs font-bold uppercase tracking-widest text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
