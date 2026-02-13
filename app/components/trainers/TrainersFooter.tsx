export default function TrainersFooter() {
  return (
    <footer className="bg-[#1a170c] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-white/10 px-6 pb-16 md:grid-cols-4">
        <div>
          <div className="mb-6 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#edbc1d]">
              <span className="material-icons text-xl text-[#221e10]">bolt</span>
            </div>
            <span className="text-xl font-bold uppercase tracking-widest">IronPulse</span>
          </div>
          <p className="text-sm leading-relaxed text-[#f1f0ea]/50">
            Defining the peak of luxury fitness through elite coaching and state-of-the-art technology.
          </p>
        </div>

        <div>
          <h6 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#edbc1d]">Experience</h6>
          <ul className="space-y-4 text-sm text-[#f1f0ea]/70">
            <li><a className="hover:text-[#edbc1d]" href="#">Personal Training</a></li>
            <li><a className="hover:text-[#edbc1d]" href="#">Group Classes</a></li>
            <li><a className="hover:text-[#edbc1d]" href="#">Spa & Recovery</a></li>
            <li><a className="hover:text-[#edbc1d]" href="#">Nutrition Plans</a></li>
          </ul>
        </div>

        <div>
          <h6 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#edbc1d]">Company</h6>
          <ul className="space-y-4 text-sm text-[#f1f0ea]/70">
            <li><a className="hover:text-[#edbc1d]" href="#">Our Story</a></li>
            <li><a className="hover:text-[#edbc1d]" href="#">Careers</a></li>
            <li><a className="hover:text-[#edbc1d]" href="#">Newsroom</a></li>
            <li><a className="hover:text-[#edbc1d]" href="#">Partners</a></li>
          </ul>
        </div>

        <div>
          <h6 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#edbc1d]">Stay Connected</h6>
          <div className="mb-8 flex space-x-4">
            <a className="flex h-10 w-10 items-center justify-center rounded bg-white/5 transition-all hover:bg-[#edbc1d] hover:text-[#221e10]" href="#">
              <i className="material-icons">facebook</i>
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded bg-white/5 transition-all hover:bg-[#edbc1d] hover:text-[#221e10]" href="#">
              <i className="material-icons">photo_camera</i>
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded bg-white/5 transition-all hover:bg-[#edbc1d] hover:text-[#221e10]" href="#">
              <i className="material-icons">play_circle</i>
            </a>
          </div>
          <p className="text-xs text-[#f1f0ea]/30">Join our newsletter for exclusive tips.</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-8 text-xs text-[#f1f0ea]/30 md:flex-row">
        <p>© 2024 IronPulse Fitness. All Rights Reserved.</p>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <a className="hover:text-[#edbc1d]" href="#">Privacy Policy</a>
          <a className="hover:text-[#edbc1d]" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
