export default function ContactNavbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#ecb913]/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#ecb913]">
            <span className="font-bold italic text-white">IP</span>
          </div>
          <span className="text-xl font-bold uppercase italic tracking-tighter">IronPulse</span>
        </div>
        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
          <a className="transition-colors hover:text-[#ecb913]" href="#">Memberships</a>
          <a className="transition-colors hover:text-[#ecb913]" href="#">Programs</a>
          <a className="transition-colors hover:text-[#ecb913]" href="#">Locations</a>
          <a className="text-[#ecb913]" href="#">Contact</a>
        </div>
        <button className="rounded bg-black px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-zinc-800">
          Join Now
        </button>
      </div>
    </nav>
  );
}
