import { useScroll, useSpring, motion } from "motion/react";
import { useRef } from "react";
import AnimatedItem from "./AnimatedItem";

const EducationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const educationData = [
    {
      id: 1,
      year: "2015 - 2021",
      school: "MIN 2 Bawu Jepara",
      description:
        "Membangun fondasi pendidikan dasar, membentuk kedisiplinan, serta menumbuhkan rasa ingin tahu yang besar terhadap bagaimana berbagai hal bekerja.",
      image: "img/education/gedung-min-bawu.jpg",
    },
    {
      id: 2,
      year: "2021 - 2023",
      school: "SMP N 1 Batealit",
      description:
        "Mempelajari dasar-dasar ilmu pengetahuan dan mulai tertarik dengan dunia teknologi digital dan komputer.",
      image: "img/education/smp-batealit.jpeg",
    },
    {
      id: 3,
      year: "2024 - Sekarang",
      school: "SMK Walisongo Pecangaan",
      description:
        "Siswa jurusan Teknik Komputer dan Jaringan (TKJ). Mendalami ilmu jaringan, pengembangan perangkat lunak, dan administrasi sistem jaringan.",
      image: "img/education/gedung-smk-w9.webp",
    },
  ];

  return (
    <section
      id="pendidikan"
      className="w-11/12 md:w-10/12 mx-auto flex flex-col items-center mt-100"
    >
      <div className="w-full max-w-xl text-center mb-20">
        <AnimatedItem direction="vertical" reverse={true} delay={0.3}>
          <h2 className="text-4xl font-semibold font-heading text-slate-900">
            Riwayat Pendidikan
          </h2>
        </AnimatedItem>
        <AnimatedItem direction="vertical" reverse={true}>
          <p className="leading-relaxed mt-8 text-slate-600">
            Perjalanan belajarku yang membentuk dasar pengetahuanku di bidang
            teknologi saat ini.
          </p>
        </AnimatedItem>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto py-10 px-2 md:px-4"
      >
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-1 h-full bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-blue-500 origin-top h-full"
            style={{ scaleY: scaleY }}
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-16">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex items-center w-full flex-row ${
                  isLeft ? "md:flex-row " : "md:flex-row-reverse"
                } justify-end md:justify-between`}
              >
                <motion.div
                  className={`w-[85%] md:w-[45%] lg:w-[70%] ${isLeft ? "-ml-55 mr-0" : "ml-0 -mr-55"}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-90px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                >
                  <div className="p-4 md:p-6 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                    <div className="w-full h-48 md:h-60 mb-4 rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.school}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-wider mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold font-heading text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.school}
                    </h3>
                    <p className="mt-2 md:mt-3 text-slate-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.4 }}
                />

                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
