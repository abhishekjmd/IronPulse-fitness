import Image from "next/image";

type Transformation = {
  name: string;
  result: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

const transformations: Transformation[] = [
  {
    name: "Rahul S.",
    result: "-12kg Loss",
    quote:
      '"The personalized guidance and diet plans from IronPulse changed my perspective on fitness forever."',
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbxWsKlqguzfFvdX4zekGZJebH2QVx5PUF7nJ8zrUK1Okc5QEqHgXQTqJMA7yU2Yk272oBCwmwliaHWkcBe3jgCZElINWvyG_NTnlCOrtceAmo_6qiCbqGrHreLve8J9vNTKOCGqmFtIub1OtjkUWQIxH_uM4RkgBlgr9O7FZxqfEKMy6VWdw46FUPjQMUhsa6IJBN4GlbwVQp_wCoOtVg-j_6aqvIkWf3VezhvPq0_dyDc4Yke_c2HJs_wdDvlHSzd2q2hBjLbi0",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiWpS4cISZNNUkGU7OWph59WOx69sVmXsscJfkeJvM34JP_Pq0LaAZVuKrEX8cB-wr0Tg48FmMKLtrbjekTs11SVvfhQnkXJah9IC5FY_caBcjfRemvkrYlHRcY3LukGjdjPc6zNz3L4BRl2inmP8EuI0ExDmzW1GfYgo8mOKOI4SKFT1jQI7Nw5aj0Dc6dk0-hbwNvM_Yleqg5IETw2MtkTPTuSGl-fjJJ-oGQcuskCESVahE1XTPQfFKV-gS2ck1dzgLfrAo7lE",
    beforeAlt: "Before image of Rahul showing fitness progress",
    afterAlt: "After image of Rahul with athletic build",
  },
  {
    name: "Neha K.",
    result: "Flexibility++",
    quote:
      '"From a stiff back to expert yoga poses. The trainers here understand anatomy and push you safely."',
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGKb1xidOK1DbklyBv9lrqmPSaalGbb5JdvOBZjfv4Ky0tRz3duOIBR4KHHsf5mNSp_pyc33Wp2EhqEu4oxuw-oP8wRlwjnUXdLmv3jzQ-lcJt5LwXpjIdK_XhHyBKw2KWn5XVrsS6YptFWgz7me6xG3OIDNNISpON3x3SUCr81PBaUcoShf4XmBeX3XGzxUHoHEGD_eBRBL51xk1BENV7xVtTIAKt2SzsOyJGfnFDcEUNS2TNNW5kcYwjrRZoynRxTfKcbLuGb7Y",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuLjbjnB95axKpWwF8F7PYrzlUwA2K61P-q0dQYaR3l6NdAemmRFWo2Kkaf9SKxDcQlXw__v2hUYlFnyrzAclRN3j9HPLmvtNGtvT6Zf3FazHFFP65Um9zhNl5GPYZs9XyGmJk_siQ6vSYuvt1q4O3-CYf3_h0-ltz0nTnQ0PuGWjbXWIxqlsnaz6Q4ELYHh7O7XqEI1uO0A3zRFrqMn13cnCNDjiE696lHxf9jPW91y_x1JFdYizze0AQiMq0DukvRjpvjhYUEM8",
    beforeAlt: "Before image of Neha starting yoga",
    afterAlt: "After image of Neha doing advanced yoga",
  },
  {
    name: "Amit P.",
    result: "+8kg Muscle",
    quote:
      '"Bulking done right. The nutrition support was the missing piece in my fitness journey until now."',
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvxJi4TqWiJtNr529mCK2nCfaKrmedq0kQtRoCiWDS2NUvnpMCj77HUlSdE4kfW4xVNAot51FtLrDpcSdJsgQvltsaiddnliEmkX2FLpgB4xoCCtQXbgeFlfrm3ItgdZlFgxwpQUdxdZEui5sDzLHPnN3v_VLte6Uq67FfMQY-UK9rc_JlIld-AUDy6Bbuh01IkNuOAtNty60zbAyA3_VjfHAcHBXC81s1--ZzLb7BY4TQjNDZYqz7D6SSOv35TCBJs6khzVnIniE",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAj2LdASdcUsB8Yb5l0KaqDXBM9ay4_sgLeSnC2T4g3vwEPbcfx3-QMzBKhSQONzmY_OXQ6SUkn_ZgNCA6ubLK4vFeAUEOlCuFCn70TrYwl4OWjdDwOZ0cTps5YKdz4SAOoeLuSAQ8T63vVVBsn1AbK8Bq02eyuFc4i5ZidwVDxVklFZy1vFnneMpbADNs1NXdtey4cdgtTeKFbmf9FH-ADLzkI8lf0JvQp_x88qzbDiomC8k0X0BFk_q611MORwHrYzWlOeH8ig4c",
    beforeAlt: "Before image of Amit looking lean",
    afterAlt: "After image of Amit with muscle gain",
  },
];

export default function TransformationsSection() {
  return (
    <section className="bg-[#f8f7f6] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d4af35]">Social Proof</h2>
        <h3 className="font-serif mb-16 text-5xl">Real People. Real Results.</h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {transformations.map((item) => (
            <div className="overflow-hidden rounded-2xl border border-[#d4af35]/10 bg-white shadow-lg" key={item.name}>
              <div className="flex">
                <div className="relative h-64 w-1/2">
                  <Image alt={item.beforeAlt} className="object-cover" fill sizes="(min-width: 768px) 16vw, 50vw" src={item.beforeImage} />
                  <span className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-[10px] text-white">
                    BEFORE
                  </span>
                </div>
                <div className="relative h-64 w-1/2">
                  <Image alt={item.afterAlt} className="object-cover" fill sizes="(min-width: 768px) 16vw, 50vw" src={item.afterImage} />
                  <span className="absolute bottom-2 right-2 rounded bg-[#d4af35] px-2 py-1 text-[10px] text-white">
                    AFTER
                  </span>
                </div>
              </div>

              <div className="p-8 text-left">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-serif text-2xl">{item.name}</h4>
                  <span className="font-bold text-[#d4af35]">{item.result}</span>
                </div>
                <p className="font-light italic text-neutral-600">{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
