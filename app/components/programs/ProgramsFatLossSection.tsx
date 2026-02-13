import Image from "next/image";

export default function ProgramsFatLossSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <span className="material-icons mb-6 block text-5xl text-[#d4af35]">local_fire_department</span>
          <h2 className="mb-6 text-4xl font-extrabold">Rapid Fat Loss Protocols</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Science-backed metabolic conditioning and high-intensity interval training designed to torch body fat while preserving lean muscle mass.
          </p>

          <div className="mb-8 rounded-xl border-l-4 border-[#d4af35] bg-[#f8f7f6] p-6">
            <p className="mb-2 italic text-slate-500">&ldquo;The average member loses 4-6kg in the first 30 days of this protocol.&rdquo;</p>
            <span className="font-bold text-[#d4af35]">- IronPulse Analytics Team</span>
          </div>

          <button className="rounded bg-[#d4af35] px-10 py-4 font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:shadow-[#d4af35]/40">
            Start Shredding
          </button>
        </div>

        <div className="relative order-1 md:order-2">
          <Image
            alt="Metabolic conditioning"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            height={900}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwORYN_NPCJdDQvNak7MKNz-nH3ITe0s0vpz8VH9aPJIzmTWZHwt8R104JRkaEWurS_dHPQb6fc_ICacnme5UpjX-1Sje908yO3S9B-wCdB2vjvDJCP68SXA4Rf4PLky0RKtdYirWgWr-uNeg_5PtvHfnXWCHbj2zLQ6kTb3rhpf3wmvqGy6xjhhjR7fuO6Nh14KiljtCWhxVUeW3a30uC1wBDeF1V1XWyWhEvex-b4qOjJ5PzPwb_mWfkVcK9u3YltqQE_5QiKO4"
            width={1200}
          />
          <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded-lg border border-[#d4af35]/10 bg-white p-6 shadow-2xl">
            <div className="mb-2 flex items-end gap-1">
              <div className="h-8 w-2 rounded-full bg-[#d4af35]/20" />
              <div className="h-12 w-2 rounded-full bg-[#d4af35]/40" />
              <div className="h-16 w-2 rounded-full bg-[#d4af35]/60" />
              <div className="h-20 w-2 rounded-full bg-[#d4af35]" />
            </div>
            <p className="text-xs font-bold uppercase text-slate-400">Metabolic Peak</p>
            <p className="text-xl font-black text-[#d4af35]">+120%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
