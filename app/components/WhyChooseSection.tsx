"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

const features = [
  {
    icon: "verified_user",
    title: "Certified Trainers",
    text: "Our trainers hold international certifications with over 10,000 hours of combined coaching experience.",
  },
  {
    icon: "emoji_people",
    title: "Beginner-Friendly",
    text: "Customized onboarding programs to ensure everyone feels welcome and supported from day one.",
  },
  {
    icon: "diversity_1",
    title: "Separate Batches",
    text: "Dedicated slots for women and seniors to ensure a comfortable training environment for everyone.",
  },
  {
    icon: "clean_hands",
    title: "Hygienic & Premium",
    text: "Hospital-grade sanitization and luxury amenities including locker rooms and showers.",
  },
];

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXhIUndgvGnifIYUGLtzK7_8j7OzRmbIx-tu51YAhuDzIhJAH3nRu0ubjMNAv5frZlv54Pgk3prmDV0zAIz5PX-pXkZBhz8e-MUNd80pyZJBpbcaFf1PV_M-eqIEoedJvULMrlBhm8JtkAaTGRV7fSyLKh8pyJK7IFi7ODH5z7FMykAiWr6nHP-CBs2Hkagi-_y4ZfDttjQoTOteqveCMRolONdu8cadftQDiaOATtd0-aIRE8TpAMWc321Wak7unZua63HUjYhGY",
    alt: "A clean row of dumbbells in a gym",
    extraClass: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAavuW_GOFRzwJpWrES0xWreDgvlt96Nw5t4psQTkWTp8SUKOTImBXSHmWEfImU2XjxJPTEUxyq9Tv6rjtVliLF2LRimGJLVVlLd18BbAXHBg0_Pe7TwJXRj989RIfkGV9bsAp6mtTWU-azfG5NbzB4Aj0Up1tVWbHtnbzbvy0r7dM2My4o4jAzh5TdipGxIy2Yy9R9aiJuNDAov710R0z4rb2JpwATTTgBzH8wAi2dyJxKpVeYxoHXQ-FW4fIRMbk7kKZAqTCIX2s",
    alt: "Woman lifting kettlebell in modern gym",
    extraClass: "mt-8",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7stNHSYilN1smAwAP6suuvwh_GUDhhmvu1U3SJIuTWJOrf-FomEXRCn4Y15USU_WfAYebOk7J7H6aRS-q_mLDrcR_-CYn-62TZI6G2HjDEP8l5fQzwNPq1eWSOXj7vBn5DBKQ3xk6Y4IczLMbgslcvm1EyCL9U3wAoRTHurFq-Z_erpOiM3ZZFYiheUXNLlnjEIikqCfXm1ITG91uLpcwDv92UjzBTOj91BaXXf7Nb3sH1TOZE5kUIz14xwhOr2PT8CdQfP21ySw",
    alt: "Treadmills lined up in a bright gym",
    extraClass: "-mt-8",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFXP6E7n4K-0PAtGx1oElppFtrtRVkZvlzjoj62YGMquOK0zS-iC4kchIIry2UOhuc4qG5Hq72yWxAToZ19pUBnrTKDyv8hdh4b4wRvCOxxvn70sByv-Kui5IGByak2LE4AYa1RvS30rS7fMdj_ga6ABiZVgcVpKwEB0kNtVde1GB5J9M7MidgGmTslQjnOF8IkQ3ryDqqbTb_OcKga0KRLi2G_wKprumkx95jNyE6kSme86h7BVpqr3QiB4F3KzKvboh3eA8KA8",
    alt: "A personal trainer helping a client",
    extraClass: "",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -32 },
              show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: motionEasings.standard } }
            }}
            className="font-serif mb-8 text-5xl"
          >
            Why Choose
            <br />
            IronPulse Fitness?
          </motion.h2>

          <div className="space-y-6">
            {features.map((feature) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -32 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: motionEasings.standard } }
                }}
                className="flex items-start space-x-4"
                key={feature.title}
              >
                <div className="rounded bg-[#d4af35]/20 p-2 shrink-0">
                  <span className="material-icons text-[#d4af35]">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">{feature.title}</h4>
                  <p className="text-neutral-600">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 gap-4"
        >
          {images.map((image) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 1.05 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: motionEasings.standard } }
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2, ease: motionEasings.standard } }}
              className={`relative h-64 w-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${image.extraClass}`}
              key={image.src}
            >
              <Image alt={image.alt} className="object-cover" fill sizes="(min-width: 768px) 25vw, 50vw" src={image.src} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
