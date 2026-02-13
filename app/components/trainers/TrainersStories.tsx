import Image from "next/image";

const stories = [
  {
    quote:
      "Rakesh did not just give me a workout plan; he gave me a new perspective on what my body is capable of. I have hit PRs I never thought possible.",
    name: "David Chen",
    memberSince: "Member since 2021",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBowaiki9eFo2Sib7XwUyPfoVKMgpz3UaNPBxSWm7Kjav18TSZONs4-RNDYrUJiN_doaOag03GUIJYbgKeh6KPs_PB1x-nqMk3PVfoyt8cSeOGsfX-u7Qhv5s1xCo5y1RXCKdmrqpJLJeF6qyCWhiZ24A8hYPIUnvqSCWBKuTktntAvmc0YWTxkX0dphh3RtUU_H8JJXLRuw7BfwyV8PR4RjfMcg_29FFHbj0DoBETH5_oEZ04ecFO8t02nLMgovW91b2PSMOJ_EVE",
  },
  {
    quote:
      "Neha's yoga sessions are the highlight of my week. The perfect balance of physical challenge and mental stillness in a luxury environment.",
    name: "Sarah Jenkins",
    memberSince: "Member since 2022",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpptNkH7GWwydaAjesyfL8fCeD7vDZOPy4gRKQ-Cweq3AiZxHQWZ0Rzv5pbRqfq6gvezZhcY0GNNUbQrFXFZEm-GsF79ioK7Zk4emhA_Ah2Xoh0VBqjPAfZDZ7mA1nvbkSSj3YBroVJUNhyeazcbeQHnjEIyEoAy6txaJGksBhVYXdaHaeQdODGE5p25T7PyGx-1eYJhjFUEq3_IvkyPFVETJFPUraIsbTE9fJaw5RM0OwZ0lDSzvoA1qM0tK16CHwdEc_3C1ZiX4",
  },
];

export default function TrainersStories() {
  return (
    <section className="overflow-hidden bg-[#f1f0ea] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-end justify-between md:flex-row">
          <div>
            <h2 className="font-serif text-4xl">Member Stories</h2>
            <p className="mt-2 font-bold uppercase tracking-widest text-[#edbc1d]">Real Results from Real People</p>
          </div>
          <div className="mt-8 flex space-x-4 md:mt-0">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#edbc1d]/40 transition-all hover:bg-[#edbc1d] hover:text-[#221e10]">
              <span className="material-icons">chevron_left</span>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#edbc1d]/40 transition-all hover:bg-[#edbc1d] hover:text-[#221e10]">
              <span className="material-icons">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="flex space-x-8 overflow-visible">
          {stories.map((story) => (
            <div className="w-full flex-none rounded-xl border-l-8 border-[#edbc1d] bg-white p-10 shadow-lg md:w-[450px]" key={story.name}>
              <div className="mb-6 flex text-[#edbc1d]">
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
              </div>
              <p className="mb-8 text-lg italic leading-relaxed">&ldquo;{story.quote}&rdquo;</p>

              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#edbc1d]/20">
                  <Image alt={story.name} fill sizes="48px" src={story.avatar} />
                </div>
                <div>
                  <h5 className="font-bold">{story.name}</h5>
                  <p className="text-xs uppercase opacity-50">{story.memberSince}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
