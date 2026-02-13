import Image from "next/image";

export default function ProgramsWeightTrainingSection() {
  return (
    <section className="overflow-hidden bg-[#f8f7f6] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="group relative">
          <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-xl border border-[#d4af35]/20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
          <Image
            alt="Weight training session"
            className="aspect-[4/3] w-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
            height={900}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCftjx9LZr397GZNXakayhuTsB2fV5AZlrrALQ2OOlwRcZPcAC7iG1ctoEv1Za5HEXQchu4rk0uXxz-glUFBwWIScfMFNWkUQXnth5FVtGGwgoIMV8iDbKIYZy243q_GlW-22jB0utpsEt4wiH1If0U5EgCZR2tkBmoaFSkHa3Qr0-IJd8UPaUvBqGwLp1MBK_3b1lEg9M_heU_jvy01PyhANjmxjgTyurtSSppvb5N8ncjpFxbSbBC4OBnfKEEikwigO6TgWF_up4"
            width={1200}
          />
        </div>

        <div>
          <span className="material-icons mb-6 block text-5xl text-[#d4af35]">fitness_center</span>
          <h2 className="mb-6 text-4xl font-extrabold">Elite Weight Training</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Harness the power of progressive overload with our curated strength programs. Designed for those who demand peak physical performance and aesthetic excellence.
          </p>

          <ul className="mb-10 space-y-4">
            {[
              "Hypertrophy & Strength Focus",
              "Custom Macro-Nutrient Planning",
              "Form Correction & Safety Audits",
            ].map((item) => (
              <li className="flex items-center gap-3" key={item}>
                <span className="material-icons text-[#d4af35]">check_circle</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <button className="rounded bg-[#d4af35] px-10 py-4 font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-[#d4af35]/40">
            Join Program
          </button>
        </div>
      </div>
    </section>
  );
}
