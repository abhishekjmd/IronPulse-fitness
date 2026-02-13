export default function StoryFooter() {
  return (
    <footer className="border-t border-[#eec02b]/10 bg-[#221e10] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="text-xl font-bold uppercase tracking-tighter text-[#eec02b]">IronPulse</div>
        <div className="flex space-x-6 text-sm text-slate-500">
          <a className="transition-colors hover:text-[#eec02b]" href="#">Privacy</a>
          <a className="transition-colors hover:text-[#eec02b]" href="#">Terms</a>
          <a className="transition-colors hover:text-[#eec02b]" href="#">Careers</a>
        </div>
        <div className="text-xs text-slate-500">© 2025 IronPulse Fitness Group. All rights reserved.</div>
      </div>
    </footer>
  );
}
