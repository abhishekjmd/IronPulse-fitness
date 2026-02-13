export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#201d12] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        <div className="mb-6 flex items-center space-x-2 md:mb-0">
          <span className="material-icons text-2xl text-[#d4af35]">fitness_center</span>
          <span className="font-serif text-xl font-bold uppercase tracking-tighter text-white">IronPulse</span>
        </div>

        <div className="text-sm uppercase tracking-widest text-neutral-500">© 2024 IronPulse Fitness. All Rights Reserved.</div>

        <div className="mt-6 flex space-x-6 md:mt-0">
          <a className="text-neutral-400 transition hover:text-[#d4af35]" href="#">
            <span className="material-icons">facebook</span>
          </a>
          <a className="text-neutral-400 transition hover:text-[#d4af35]" href="#">
            <span className="material-icons">camera_alt</span>
          </a>
          <a className="text-neutral-400 transition hover:text-[#d4af35]" href="#">
            <span className="material-icons">play_circle</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
