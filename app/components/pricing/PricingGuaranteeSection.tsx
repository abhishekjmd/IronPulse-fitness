export default function PricingGuaranteeSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-xl border-2 border-[#e0b629] bg-white p-12 text-center shadow-xl">
          <span className="material-icons mb-6 text-5xl text-[#e0b629]">verified_user</span>
          <h2 className="font-serif mb-4 text-3xl font-bold">7-Day Money-Back Guarantee</h2>
          <p className="font-light leading-relaxed text-neutral-500">
            We are confident in our luxury fitness experience. If you are not completely satisfied with our facilities or training within your first week, we will provide a full refund, no questions asked.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="h-1 w-12 rounded-full bg-[#e0b629]" />
            <div className="h-1 w-12 rounded-full bg-[#e0b629]/30" />
            <div className="h-1 w-12 rounded-full bg-[#e0b629]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
