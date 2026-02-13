export default function Navbar() {
  return (
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-[#d4af35]/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <span className="material-icons text-3xl text-[#d4af35]">fitness_center</span>
          <span className="font-serif text-2xl font-bold uppercase tracking-tighter">IronPulse</span>
        </div>

        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
          <a className="transition hover:text-[#d4af35]" href="#">Programs</a>
          <a className="transition hover:text-[#d4af35]" href="#">About Us</a>
          <a className="transition hover:text-[#d4af35]" href="#">Transformations</a>
          <a className="transition hover:text-[#d4af35]" href="#">Pricing</a>
        </div>

        <a
          className="rounded-full bg-[#d4af35] px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#d4af35]/90"
          href="#"
        >
          Join Now
        </a>
      </div>
    </nav>
  );
}
