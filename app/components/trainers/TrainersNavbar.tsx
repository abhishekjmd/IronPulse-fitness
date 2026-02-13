export default function TrainersNavbar() {
  return (
    <nav className="fixed z-50 w-full border-b border-[#edbc1d]/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#edbc1d]">
            <span className="material-icons text-xl text-[#221e10]">bolt</span>
          </div>
          <span className="text-xl font-bold uppercase tracking-widest">IronPulse</span>
        </div>

        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-tighter md:flex">
          <a className="transition-colors hover:text-[#edbc1d]" href="#">Programs</a>
          <a className="border-b-2 border-[#edbc1d] text-[#edbc1d]" href="#">Trainers</a>
          <a className="transition-colors hover:text-[#edbc1d]" href="#">Memberships</a>
          <a className="transition-colors hover:text-[#edbc1d]" href="#">Locations</a>
        </div>

        <button className="rounded bg-[#edbc1d] px-6 py-2 text-sm font-bold uppercase text-[#221e10] transition-all hover:opacity-90">
          Join Now
        </button>
      </div>
    </nav>
  );
}
