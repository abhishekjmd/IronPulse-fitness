export default function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVzScQmxc8Gz-zwbN9L_cV2jSm8mRB0I5KBkRUpGTbS8eladzVrvLg_vshUDvLPCyTWqdbbXdScw9lw4xQd-7xpuJYxhjMQ25QZNNI8aifO1XRTSeQk-ful5wgoX3Zu_pCfP_24Ywk3wxT6uYVNiw36fX0VezoR3juATZv1ICqV78JB2eC9z0bIN7jXrHO7BTdUu5Gc5jOQFUaeONPo9goOtjbGQIqAOusmGUK_yGT3IGSX_W_hiHG16q-Lbzp3wD4kcTrnRCXYao')",
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 max-w-4xl px-4 text-center text-white">
        <h1 className="font-serif mb-6 text-6xl leading-tight md:text-8xl">
          Train Strong.
          <br />
          Live Better.
        </h1>

        <p className="mb-10 text-xl font-light tracking-wide text-white/90 md:text-2xl">
          Experience elite personal training and world-class facilities designed for your ultimate transformation.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            className="rounded-full bg-[#d4af35] px-10 py-4 font-bold uppercase tracking-widest text-white transition duration-300 hover:bg-white hover:text-[#d4af35]"
            href="#"
          >
            Book Free Trial
          </a>
          <a
            className="rounded-full border-2 border-white px-10 py-4 font-bold uppercase tracking-widest text-white transition duration-300 hover:bg-white hover:text-black"
            href="#"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
