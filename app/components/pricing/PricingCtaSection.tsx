import Image from "next/image";

export default function PricingCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a1814] py-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <Image
          alt="Gym background"
          className="h-full w-full object-cover"
          fill
          sizes="100vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGFgFkgfoHZUyj0QLHJ9vuOQvliorYdjTWvvYL9gT8fbr2yfkGcbjP0JzA_TZ2Ja3CZL9vNz1Oqe0AEpwBUcJRbPRUNXtMxyLob7MmwVT1P30vFHwW6CYGdStb04nEM01kWk9ky3UghMiVtZvKxSm3i9sno7fSLTgGUc27mC7LpWX7rqmNALtCnZXr5JdRs_e5p1YJNDVj3PG3EBPKq2FAP9t15Hjo2qB1PRUL33tN1arJuLQFnXZmUnOn0edef7gdfDLsreMeJxs"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-serif mb-6 text-4xl font-bold tracking-tight">Ready to start your journey?</h2>
        <p className="mx-auto mb-10 max-w-xl text-xs uppercase tracking-[0.2em] text-neutral-400">
          Experience the ultimate fusion of luxury and performance.
        </p>
        <div className="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <button className="rounded bg-[#e0b629] px-10 py-4 text-xs font-bold uppercase tracking-widest text-[#1a1814] transition-transform hover:scale-105">
            Join the Club
          </button>
          <button className="rounded border border-white/30 px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-[#1a1814]">
            Book a Tour
          </button>
        </div>
      </div>
    </section>
  );
}
