export default function StoryNavbar() {
  return (
    <nav className="fixed z-50 w-full border-b border-[#eec02b]/10 bg-[#221e10]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold uppercase tracking-tighter text-[#eec02b]">IronPulse</div>
        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest text-slate-300 md:flex">
          <a className="transition-colors hover:text-[#eec02b]" href="#">Experience</a>
          <a className="text-[#eec02b]" href="#">Our Story</a>
          <a className="transition-colors hover:text-[#eec02b]" href="#">Facilities</a>
          <a className="transition-colors hover:text-[#eec02b]" href="#">Membership</a>
        </div>
        <a className="rounded-full bg-[#eec02b] px-6 py-2 text-xs font-bold uppercase text-[#221e10] transition-all hover:bg-[#eec02b]/90" href="#">
          Join Now
        </a>
      </div>
    </nav>
  );
}
