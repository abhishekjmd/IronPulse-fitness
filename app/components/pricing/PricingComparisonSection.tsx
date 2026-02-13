const rows = [
  ["Locker Access", true, true, true],
  ["Guest Passes", false, true, false],
  ["Sauna & Spa", true, true, true],
  ["1-on-1 Coaching", false, true, false],
  ["Nutrition Consulting", false, true, false],
  ["Priority Events", false, true, true],
];

export default function PricingComparisonSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif mb-12 text-center text-3xl font-bold">Bespoke Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="px-4 py-6 text-left text-[10px] font-medium uppercase tracking-widest text-neutral-400">Tier Features</th>
                <th className="font-serif px-4 py-6 text-center text-lg font-bold">General</th>
                <th className="font-serif px-4 py-6 text-center text-lg font-bold text-[#e0b629]">PT Exclusive</th>
                <th className="font-serif px-4 py-6 text-center text-lg font-bold">Group</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {rows.map(([feature, a, b, c]) => (
                <tr key={feature as string}>
                  <td className="px-4 py-6 text-sm font-medium">{feature as string}</td>
                  {[a, b, c].map((v, i) => (
                    <td className="px-4 py-6 text-center" key={`${feature}-${i}`}>
                      {v ? <span className="material-icons text-[#e0b629]">check_circle</span> : <span className="text-neutral-400">-</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
