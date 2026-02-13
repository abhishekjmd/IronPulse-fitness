"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionEasings } from "@/lib/motion/easings";

type Trainer = {
  name: string;
  role: string;
  image: string;
  icon: string;
  bio: string;
  certs: string[];
};

const trainers: Trainer[] = [
  {
    name: "Rakesh Sharma",
    role: "Strength & Conditioning",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY0xxf-AY6epYZGSswscCIR4d8sme7dt2PdyT4SE6fmdYBqjKrLefWLwt09vjusmkceECArjYtFhzKp5NoKslEeUu20zxKkhTxxOXf_spQUTswc-elM9Ln-u4ktfMc-fbevhOvR33mqZmf5CCzPwSAi_ScpwiZvQBfnca7SlbLblQPXy2ZUk1X0Iw2C5RTzqisYvFrXLfVHhJ-4vAKytupJzTLTYKkO006-v6_iEtjTtPVoReGBup81eUJqMfDgKQLCQZhaRZYrts",
    icon: "fitness_center",
    bio: "Over 10 years of experience in powerlifting and athletic performance optimization.",
    certs: ["NSCA Certified", "Olympic Lifting Coach"],
  },
  {
    name: "Neha Kapoor",
    role: "Yoga & Mindfulness",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_eK8YysxI_vcSHo4_a7SBOzNN5QVtuohPgGmU-XThhScrBL5JqbBZvupHMJsD4O-neuuS9Gv_U6j6BbYprtLoqAOv-W9nteeyeeJ7mH1CpcjR9UuxvpMEOwiLmajkkD2exQ0XCgJlOVgk0dXeS5hgXywe7F0qqAe_qrshxydwdVYc6rXEBGnUZiik1yaHeq-UO36ocjKhYd7Cfdrp2Y3l0SSmKakPDea3inj0lVE4BN-OHBzH4FTq54bMBAsZrbIi8PQW7rO0MrAwtYbd9OPdQ",
    icon: "self_improvement",
    bio: "Specializing in Vinyasa and Hatha Yoga to balance physical vigor with mental clarity.",
    certs: ["RYT 500 Hours", "Meditation Guide"],
  },
  {
    name: "Amit Varma",
    role: "Fat Loss & Nutrition",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5_LAVe1KQWVxEoSX2LlQ5kecASSx1a-3mBg95TbZbaq2MlCpGi24ruavkSKjxbS9upKdVOrVaffPRm0U5DyZBkYy84FJVdfaDX9GBTE4_oaBEwETprXWrJMx-SSstVdP6SoLXnNpcU8pK2-oWL-Ns8---THQdCuo3Ecu-j5DSHfV-BBLXGNRz0BhDbY-x-FyTikvfGRx7PUUbgApuJtK3ZfDAzIOJo4wgl7Y3to55UXEF8jScFbUSIeFaH2WwEZ8MCouZb7n2rU4",
    icon: "restaurant_menu",
    bio: "Evidence-based weight management through metabolic training and precision nutrition.",
    certs: ["ACE Certified Nutritionist", "HIIT Specialist"],
  },
  {
    name: "Priya Das",
    role: "Zumba & Cardio Dance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhm9CH4Lp6QpfeQwgEgkN_dV01ZfiJu3YUoeFbbjeYJSmvmuGJsD4O-neuuS9Gv_U6j6BbYprtLoqAOv-W9nteeyeeJ7mH1CpcjR9UuxvpMEOwiLmajkkD2exQ0XCgJlOVgk0dXeS5hgXywe7F0qqAe_qrshxydwdVYc6rXEBGnUZiik1yaHeq-UO36ocjKhYd7Cfdrp2Y3l0SSmKakPDea3inj0lVE4BN-OHBzH4FTq54bMBAsZrbIi8PQW7rO0MrAwtYbd9OPdQ",
    icon: "music_note",
    bio: "High-energy cardiovascular training fused with rhythmic movement to torch calories.",
    certs: ["Licensed Zumba Instructor", "AFAA Group Fitness"],
  },
  {
    name: "Vikram Malhotra",
    role: "Bodybuilding & Hypertrophy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKg81dD1HPfEGfHNlNaOS-9g5SFq6EOyefUMorsq104gojpvkTmqMfAZlvMAhMl_ZcUQ4mhm81Pmgs3qXfEZcIH9KDCLMNXs-qOEhxhhNjuyhkrR1GGyvWmOrENSJS15ILSYbUADmF_GXfXxv_XtHfuk2vhGQIVw0E0lGd-8mJJwgFKdX5siqsA1UcnmlhA2RZbxGLXYNzdpARmnEdhbKTpy17_6g_5C4EeNrjpTyGqG19t-BC75R4zRcpejAop2IIytVD4f7f_Q8",
    icon: "workspace_premium",
    bio: "Advanced muscle hypertrophy techniques and competition preparation for physique athletes.",
    certs: ["IFBB Pro Coach", "ISSA Master Trainer"],
  },
  {
    name: "Anjali Mehta",
    role: "Sports Rehab & Mobility",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8EG62xJaPWq_bfEExOxFHDFFbfN5OL-wyI6goHY2VBB5nYdza1lG4Nxx6NxvSebK_r2RUn4Ahy7iNYJYTyQouiPrHv0728__qVJ3PnV3uU9Bn0MO99ZFS9lNlkd5n54c9WAzBJp-FFF6jR_4q0dBKnVo578NSkVaPaTU2TJv8OXlZwoGKNumvbT27qUMTPobyhgv5Huyx8zRiOkwu7EbK6woTOyIQ7qpE1yQy5N3mkGetEDSb7N16pX74iPhwbTfgMQ6BiefCU9E",
    icon: "medical_services",
    bio: "Injury prevention and post-rehabilitation training to restore full functional movement.",
    certs: ["Physiotherapy Cert.", "NASM Corrective Exercise"],
  },
];

export default function TrainersGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {trainers.map((trainer) => (
          <motion.div
            key={trainer.name}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: motionEasings.standard } },
            }}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: motionEasings.standard } }}
            className="flip-card perspective-1000 group h-[500px] w-full"
          >
            <div className="flip-card-inner relative h-full w-full text-center">
              <div className="flip-card-front absolute h-full w-full overflow-hidden rounded-xl border-b-4 border-[#edbc1d] bg-white shadow-xl">
                <div className="relative h-[80%] w-full">
                  <Image alt={trainer.name} className="bw-filter object-cover transition-transform duration-500 group-hover:scale-110" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" src={trainer.image} />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#1a170c]">{trainer.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#edbc1d]">{trainer.role}</p>
                </div>
              </div>

              <div className="flip-card-back absolute flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-[#1a170c] p-8 text-white">
                <div>
                  <span className="material-icons mb-4 text-4xl text-[#edbc1d]">{trainer.icon}</span>
                  <h3 className="font-serif mb-4 text-3xl">Expertise</h3>
                  <p className="mb-6 text-sm leading-relaxed text-[#f1f0ea]/70">{trainer.bio}</p>
                  <div className="space-y-2 text-left">
                    {trainer.certs.map((cert) => (
                      <div className="flex items-center space-x-3 border-l-2 border-[#edbc1d] pl-4 text-xs uppercase tracking-widest" key={cert}>
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full rounded bg-[#edbc1d] py-3 font-bold uppercase tracking-wider text-[#221e10] transition-colors hover:bg-white">
                  Book Session
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
