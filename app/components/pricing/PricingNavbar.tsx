export default function PricingNavbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e0b629]/10 bg-white/80 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold italic tracking-tighter">
            IRON<span className="text-[#e0b629]">PULSE</span>
          </span>
        </div>
        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-wide md:flex">
          <a className="transition-colors hover:text-[#e0b629]" href="#">Experience</a>
          <a className="text-[#e0b629]" href="#">Membership</a>
          <a className="transition-colors hover:text-[#e0b629]" href="#">Locations</a>
          <a className="transition-colors hover:text-[#e0b629]" href="#">Contact</a>
        </div>
        <button className="rounded bg-[#e0b629] px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#1a1814] transition-all hover:opacity-90">
          Join Now
        </button>
      </div>
    </nav>
  );
}
