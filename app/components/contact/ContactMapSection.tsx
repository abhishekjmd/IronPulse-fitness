export default function ContactMapSection() {
  return (
    <section className="w-full bg-zinc-200">
      <div className="map-container relative">
        <iframe
          allowFullScreen
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.933333333333!2d72.50!3d23.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fd267a68a48746b!2sSatellite%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          title="IronPulse Location Map"
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full border-4 border-white bg-[#ecb913] shadow-2xl">
            <span className="material-icons text-white">fitness_center</span>
          </div>
        </div>
      </div>
    </section>
  );
}
