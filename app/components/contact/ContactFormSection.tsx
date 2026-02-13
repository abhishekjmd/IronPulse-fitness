export default function ContactFormSection() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-10">
        <div className="lg:col-span-6">
          <div className="mb-10 space-y-2">
            <h2 className="text-3xl font-bold">Send us a message</h2>
            <p className="text-zinc-500">Fill out the form below and a membership consultant will reach out within 24 hours.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                <input className="w-full rounded-lg border-zinc-200 bg-white p-4 outline-none transition-all focus:border-[#ecb913] focus:ring-[#ecb913]" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone Number</label>
                <input className="w-full rounded-lg border-zinc-200 bg-white p-4 outline-none transition-all focus:border-[#ecb913] focus:ring-[#ecb913]" placeholder="+91 00000 00000" type="tel" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
              <input className="w-full rounded-lg border-zinc-200 bg-white p-4 outline-none transition-all focus:border-[#ecb913] focus:ring-[#ecb913]" placeholder="john@example.com" type="email" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Interest</label>
              <select className="w-full rounded-lg border-zinc-200 bg-white p-4 outline-none transition-all focus:border-[#ecb913] focus:ring-[#ecb913]">
                <option>Premium Membership</option>
                <option>Personal Training</option>
                <option>Group Classes</option>
                <option>Yoga & Recovery</option>
                <option>Guest Pass</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Message</label>
              <textarea className="w-full rounded-lg border-zinc-200 bg-white p-4 outline-none transition-all focus:border-[#ecb913] focus:ring-[#ecb913]" placeholder="Tell us about your fitness goals..." rows={4} />
            </div>

            <button className="w-full rounded-lg bg-black py-5 font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-800" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8 lg:col-span-4">
          <div className="rounded-xl border border-zinc-200 bg-zinc-100 p-10">
            <h3 className="mb-8 text-2xl font-bold">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <span className="material-icons text-[#ecb913]">place</span>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-400">Our Location</p>
                  <p className="text-zinc-700">101 IronPulse Tower, Satellite,<br />Ahmedabad, Gujarat 380015</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <span className="material-icons text-[#ecb913]">schedule</span>
                </div>
                <div className="w-full">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-400">Gym Hours</p>
                  <div className="flex justify-between text-zinc-700"><span>Mon - Sat</span><span className="font-medium">06:00 - 22:00</span></div>
                  <div className="flex justify-between text-zinc-700"><span>Sunday</span><span className="font-medium">08:00 - 12:00</span></div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <span className="material-icons text-[#ecb913]">phone</span>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-400">Call Us</p>
                  <p className="text-lg font-bold text-zinc-900">+91 79 4000 5000</p>
                </div>
              </div>

              <div className="pt-4">
                <a className="flex w-full items-center justify-center space-x-3 rounded-lg bg-[#25D366] py-4 font-bold text-white transition-all hover:opacity-90" href="#">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <span>WhatsApp Us Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
