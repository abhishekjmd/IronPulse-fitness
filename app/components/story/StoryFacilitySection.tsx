import Image from "next/image";

const images = [
  {
    title: "Strength Laboratory",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvFezk56jFimU0YdjFssyvKm9qF669AG8n2iXwGNv7aFdGp703UX8_Xa_jvjpw09oLcXXuxTg8EeoDGw-lG7TNxFMFmFG3xg9aNS2nyQP8-RpSeD_Jthg1O0km-02RQ8URCvEVzP3hQzgtG_Pz5ywo1Q_8X_xexe7pK6SpWAGTO27m8YA3O-Y4dueLwpRF3tbhXSK4kOwfHVAyhxv4pUzLs7M-1iidFAXoqdsHFtyXoiUfoJV150xs_TowQI3_r27wKSSL3iZQkw",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Zen Mobility Suite",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCquIRhDvXxX9_9PhLD3HqhSs0sycP14b3ZJyza0EgpupBgk4-Crcx-yjQXRNv7QgcC2N7nY9sn7kIZUVOD2dEze1B16juqPX6UyXkBVPzoUAOfd8cx2sR00cqTB0-aS2_Rp7zMxubi3phu-jwjFs_pH7V-B33e854gH3hVmbYA1T0X_DY1vJEZqPq1HT-EEnzZfhhFMuByRPKqNHOXhbTtUDJICd-B3U2P06pRBaezEhNU7XDblbBlBETafVYJUrWF5bYqb4cQqog",
    className: "md:col-span-2",
  },
  {
    title: "Endurance Zone",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxvr4BNaVbZmebSjKxv5piKkDeU8iZV7GqSrC2U_0GvUN4W9aKCEVY6U1y2zJ9TEPM6n7NNa_qQR9NoOpyxzoA4ru2dtRAOFjchIqwjTFO1K47YwoEx2yPMFEu6Lqp9izhgLlLbXWmAniQSkO4IBqz5NC447dZjpmSE6gsstHzyf_Lasuy2E0kwX05sOy8FmsSxAEZiCkywj3OGFdEMTvcJsHcs_-VaHJoDSoJSl9oZbyoQeDKG6xxFtxrUBFTJtfMwey60taCNy0",
    className: "",
  },
  {
    title: "Recovery Hub",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxle8yaBlZrdf7mBruEf7WCwsQcJNSq3mLUXlWs-TX9HXQ79bfUOlbeTrK2i8Jq1JzZJ3OBjeuQqSyVrVK-EwOywKhqE8xPOWXUkd2mmdqEvHcnDXNSfvXX5WnubQbKLk7-blCuWPn7ki0ShmNExDn_9eaSfi9ctoRI8hdmfw_ehvRaNrQhcSMMd_G8lD0jrBYhsKp56Li2ENfsXsLjtUq0jEIPB2Qu3tQsrHWeNbbPfFcsYTqRY9yLENI-DLUtcrbBiOI6yFpUr8",
    className: "",
  },
];

export default function StoryFacilitySection() {
  return (
    <section className="bg-[#221e10] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="font-serif mb-2 text-4xl text-white">Facility Tour</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-[#eec02b]">Uncompromising Standard of Excellence</p>
        </div>

        <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-4">
          {images.map((image) => (
            <div className={`relative overflow-hidden rounded-xl ${image.className}`} key={image.title}>
              <Image alt={image.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" fill sizes="(min-width: 768px) 25vw, 100vw" src={image.src} />
              <div className="absolute bottom-4 left-4 rounded border-l-2 border-[#eec02b] bg-[#221e10]/80 px-4 py-2 text-sm text-white">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
