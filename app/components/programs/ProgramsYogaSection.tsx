import Image from "next/image";

export default function ProgramsYogaSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative">
          <Image
            alt="Yoga session"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            height={900}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJqATu5qelx5NaDIjafy5DpxRO1-95vZngK_HSJOIcL5Oimk4fNskLP8lO7tCL6NmyFzi9dDGzAOAAhSlZmhjRTjacfcLE2GRlXoCG5x8WrNwWJj3LXX1VsFw5NntLhb4o_M4-iIicyikm9MRDawumIhUEPrjOSR3YvVgd87FTp1wxSBXX4Cs3Hs5ieTkMd6IKrjk0NTUbbgrUt4dsmf86EbfFihwC_qWUIeH24Kz8Ek7WcdakWi92ULPksaid3r9PEufHayoysZo"
            width={1200}
          />
          <div className="absolute top-4 right-4 rounded-full bg-[#d4af35] px-4 py-2 text-xs font-bold uppercase tracking-tighter text-white">
            New Batches
          </div>
        </div>

        <div>
          <span className="material-icons mb-6 block text-5xl text-[#d4af35]">self_improvement</span>
          <h2 className="mb-6 text-4xl font-extrabold">Mind & Movement</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Balance your intensity with flow. From high-energy Zumba dance workouts to restorative Hatha Yoga, find your center in our premium group studios.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-between rounded border-l-4 border-[#d4af35] bg-white p-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest">Morning Flow</span>
              <span className="font-bold text-[#d4af35]">06:00 AM - 07:30 AM</span>
            </div>
            <div className="flex items-center justify-between rounded border-l-4 border-[#d4af35] bg-white p-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest">Evening Energy</span>
              <span className="font-bold text-[#d4af35]">06:30 PM - 08:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
