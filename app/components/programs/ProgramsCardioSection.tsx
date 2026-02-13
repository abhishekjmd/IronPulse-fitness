import Image from "next/image";

export default function ProgramsCardioSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <Image
            alt="Cardio training"
            className="aspect-[4/3] w-full rounded-xl object-cover grayscale"
            height={900}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyBmCpgg7qsTWv2rGuEFHyq9_h_5TG3QCwYotMtMJv55P1GjVCdeUgZHK5qLlnpUF1KAjdddMdNDa3b86oWGuTDfpxKHm5Nvx6Z4Eu5JAg6ZFDLJsNjzaqD9XzN8VvLQquJuOg900xxjapxrhctUUm08tJVDtZD-_djfcKTcsh4Gx51we-APApUfFNuW7drBmsHAmFah1B6jKxvl4P6W_LM3yHXCInqd1cYZoSlsDrQez5Y2xZzhzlvq0lQg7cEyXYANECR1DpKlM"
            width={1200}
          />
        </div>

        <div>
          <span className="material-icons mb-6 block text-5xl text-[#d4af35]">favorite</span>
          <h2 className="mb-6 text-4xl font-extrabold">Cardio & Conditioning</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Build an unbreakable engine. Our conditioning circuits improve heart health, lung capacity, and mental toughness through high-performance endurance training.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-[#d4af35]/10 bg-white p-4">
              <p className="text-3xl font-black text-[#d4af35]">45min</p>
              <p className="text-xs font-bold uppercase text-slate-400">High Intensity</p>
            </div>
            <div className="rounded-lg border border-[#d4af35]/10 bg-white p-4">
              <p className="text-3xl font-black text-[#d4af35]">600+</p>
              <p className="text-xs font-bold uppercase text-slate-400">Calories/Session</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
