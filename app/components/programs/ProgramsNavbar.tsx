export default function ProgramsNavbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#d4af35]/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="material-icons text-3xl text-[#d4af35]">bolt</span>
          <span className="text-2xl font-black uppercase italic tracking-tighter">
            Iron<span className="text-[#d4af35]">Pulse</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest md:flex">
          <a className="transition-colors hover:text-[#d4af35]" href="#">Home</a>
          <a className="text-[#d4af35]" href="#">Programs</a>
          <a className="transition-colors hover:text-[#d4af35]" href="#">Schedule</a>
          <a className="transition-colors hover:text-[#d4af35]" href="#">Contact</a>
          <a className="rounded-full bg-[#d4af35] px-6 py-2 text-white shadow-lg shadow-[#d4af35]/20 transition-all hover:opacity-90" href="#">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
