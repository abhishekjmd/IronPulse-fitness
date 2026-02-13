export default function PricingHeroSection() {
  return (
    <section className="flex h-[55vh] flex-col items-center justify-center border-b border-neutral-100 bg-white px-6 pt-10">
      <nav className="mb-6 flex items-center text-xs uppercase tracking-[0.2em] text-neutral-400">
        <a className="hover:text-[#e0b629]" href="#">Home</a>
        <span className="mx-3 text-[10px]">/</span>
        <span className="text-neutral-900">Pricing</span>
      </nav>
      <h1 className="font-serif mb-4 text-center text-5xl font-bold md:text-6xl">Simple, Transparent Pricing</h1>
      <p className="max-w-lg text-center font-light leading-relaxed text-neutral-500">
        Choose a path that aligns with your lifestyle. No hidden fees, just premium fitness experiences.
      </p>
    </section>
  );
}
