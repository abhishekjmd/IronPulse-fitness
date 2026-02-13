export default function ProgramsFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#201d12] py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="col-span-2">
          <div className="mb-6 flex items-center gap-2">
            <span className="material-icons text-3xl text-[#d4af35]">bolt</span>
            <span className="text-2xl font-black uppercase italic tracking-tighter">
              Iron<span className="text-[#d4af35]">Pulse</span>
            </span>
          </div>
          <p className="mb-6 max-w-sm text-slate-500">
            Redefining luxury fitness through science-backed protocols and premium environment. Elevate your pulse today.
          </p>
          <div className="flex gap-4">
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[#d4af35]" href="#">
              <span className="material-icons text-sm">facebook</span>
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[#d4af35]" href="#">
              <span className="material-icons text-sm">photo_camera</span>
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-[#d4af35]" href="#">
              <span className="material-icons text-sm">play_arrow</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#d4af35]">Quick Links</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a className="transition-colors hover:text-white" href="#">Our Facilities</a></li>
            <li><a className="transition-colors hover:text-white" href="#">Success Stories</a></li>
            <li><a className="transition-colors hover:text-white" href="#">Member Perks</a></li>
            <li><a className="transition-colors hover:text-white" href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#d4af35]">Locate Us</h4>
          <p className="mb-4 text-sm text-slate-400">
            Elite Tower, Suite 402
            <br />
            Cyber City, India
          </p>
          <div className="h-32 w-full overflow-hidden rounded bg-white/5">
            <div className="flex h-full w-full items-center justify-center grayscale opacity-50">
              <span className="material-icons text-[#d4af35]">map</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/5 px-6 pt-12 text-[10px] font-bold uppercase tracking-widest text-slate-500 md:flex-row">
        <p>© 2024 IronPulse Fitness. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
