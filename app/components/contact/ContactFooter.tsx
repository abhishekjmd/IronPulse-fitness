export default function ContactFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-6 px-6 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#ecb913]">
            <span className="text-[10px] font-bold italic text-white">IP</span>
          </div>
          <span className="text-sm font-bold uppercase italic tracking-tighter">IronPulse</span>
        </div>

        <div className="text-xs text-zinc-400">© 2024 IronPulse Fitness. All Rights Reserved. Designed for Excellence.</div>

        <div className="flex space-x-6">
          <a className="text-zinc-400 transition-colors hover:text-[#ecb913]" href="#"><span className="material-icons text-base">facebook</span></a>
          <a className="text-zinc-400 transition-colors hover:text-[#ecb913]" href="#"><span className="material-icons text-base">camera_alt</span></a>
          <a className="text-zinc-400 transition-colors hover:text-[#ecb913]" href="#"><span className="material-icons text-base">alternate_email</span></a>
        </div>
      </div>
    </footer>
  );
}
