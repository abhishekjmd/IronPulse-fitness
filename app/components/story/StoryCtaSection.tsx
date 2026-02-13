export default function StoryCtaSection() {
  return (
    <section className="relative bg-black py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif mb-8 text-5xl text-white md:text-6xl">Become Part of Our Story</h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-400">
          The journey to your ultimate self begins with a single step. Join the pulse and experience the pinnacle of human performance.
        </p>

        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <a className="inline-flex items-center justify-center rounded-full bg-[#eec02b] px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#221e10] transition-transform hover:scale-105" href="#">
            Join The Pulse <span className="material-icons ml-2">arrow_forward</span>
          </a>
          <a className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10" href="#">
            Book A Tour
          </a>
        </div>
      </div>
    </section>
  );
}
