export default function ProgramsHeroSection() {
  return (
    <section className="relative flex h-[50vh] items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 px-4 text-center">
        <span className="mb-4 block font-bold uppercase tracking-[0.3em] text-[#d4af35]">Elite Training</span>
        <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
          Our <span className="text-[#d4af35]">Programs</span>
        </h1>
        <div className="mx-auto h-1 w-24 bg-[#d4af35]" />
      </div>
    </section>
  );
}
