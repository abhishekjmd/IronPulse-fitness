const addons = [
  {
    title: "Diet Consultation",
    description: "Bi-weekly sessions with our certified sports nutritionists to optimize your macros.",
    price: "INR 999 / mo",
    icon: "restaurant_menu",
  },
  {
    title: "Extended Hours",
    description: "Unlock 24/7 facility access including holidays and premium lounge entry.",
    price: "INR 499 / mo",
    icon: "access_time",
  },
];

export default function PricingAddOnsSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif mb-4 text-3xl font-bold">Enhance Your Journey</h2>
          <p className="font-light text-neutral-500">Customizable add-ons to fit your specific fitness goals.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {addons.map((addon) => (
            <div
              className="dashed-border group cursor-pointer rounded-xl bg-white/50 p-8 transition-colors hover:bg-white"
              key={addon.title}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-serif mb-2 text-xl font-bold">{addon.title}</h4>
                  <p className="mb-4 max-w-sm text-sm text-neutral-500">{addon.description}</p>
                  <span className="font-bold text-[#e0b629]">{addon.price}</span>
                </div>
                <span className="material-icons text-[#e0b629] transition-transform group-hover:scale-110">{addon.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
