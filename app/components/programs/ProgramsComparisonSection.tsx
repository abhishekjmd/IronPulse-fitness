const rows = [
  ["Duration", "60-90 Min", "45 Min", "60 Min", "75 Min"],
  ["Frequency", "4-5 Days/wk", "5-6 Days/wk", "Custom", "3 Days/wk"],
  ["Support", "Floor Coach", "Group Head", "Dedicated Master", "Instructor"],
];

export default function ProgramsComparisonSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold uppercase">Program Comparison</h2>
          <p className="text-slate-500">Choose the path that aligns with your ambition.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-t-2 border-[#d4af35] bg-[#d4af35]/10">
                {[
                  "Feature",
                  "Weight Training",
                  "Fat Loss",
                  "Personal Training",
                  "Yoga/Zumba",
                ].map((header) => (
                  <th className="p-6 text-left text-xs font-black uppercase tracking-widest last:text-center" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row[0]}>
                  <td className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">{row[0]}</td>
                  <td className="p-6 text-center">{row[1]}</td>
                  <td className="p-6 text-center">{row[2]}</td>
                  <td className="p-6 text-center">{row[3]}</td>
                  <td className="p-6 text-center">{row[4]}</td>
                </tr>
              ))}

              <tr className="bg-[#d4af35]/5">
                <td className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">Monthly Price</td>
                <td className="p-6 text-center font-black text-[#d4af35]">INR 1,999</td>
                <td className="p-6 text-center font-black text-[#d4af35]">INR 2,499</td>
                <td className="p-6 text-center font-black text-[#d4af35]">INR 3,999+</td>
                <td className="p-6 text-center font-black text-[#d4af35]">INR 1,499</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
