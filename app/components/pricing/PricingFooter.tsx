export default function PricingFooter() {
  return (
    <footer className="border-t border-neutral-100 bg-[#f8f7f6] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-6 px-6 md:flex-row md:space-y-0">
        <div className="font-serif text-xl font-bold italic">
          IRON<span className="text-[#e0b629]">PULSE</span>
        </div>
        <div className="text-xs uppercase tracking-widest text-neutral-400">© 2023 IronPulse Fitness. All Rights Reserved.</div>
        <div className="flex space-x-6">
          <a className="text-neutral-400 transition-colors hover:text-[#e0b629]" href="#"><span className="material-icons">facebook</span></a>
          <a className="text-neutral-400 transition-colors hover:text-[#e0b629]" href="#"><span className="material-icons text-base">camera_alt</span></a>
          <a className="text-neutral-400 transition-colors hover:text-[#e0b629]" href="#"><span className="material-icons text-base">alternate_email</span></a>
        </div>
      </div>
    </footer>
  );
}
