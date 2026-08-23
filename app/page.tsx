"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CertificateSection from "./components/CertificateSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

interface NavItemsStruct {
  id: number;
  link: string;
  text: string;
}

const navItems: NavItemsStruct[] = [
  {
    id: 1,
    link: "#tentang",
    text: "Tentang",
  },
  {
    id: 2,
    link: "#skill",
    text: "Keahlian",
  },
  {
    id: 3,
    link: "#sertifikat",
    text: "Sertifikat",
  },
  {
    id: 4,
    link: "#proyek",
    text: "Proyek",
  },
  {
    id: 5,
    link: "#pendidikan",
    text: "Pendidikan",
  },
  {
    id: 6,
    link: "#blog",
    text: "Blog",
  },
  {
    id: 7,
    link: "#kontak",
    text: "Kontak",
  },
];

const page = () => {
  return (
    <main className="w-full min-h-screen bg-slate-50 font-montserrat text-slate-800">
      <nav className="w-full fixed left-0 top-0 z-999 bg-white/70 backdrop-blur-md border-b border-slate-200 py-8 flex justify-around items-center transition-all duration-300">
        <h3 className="text-xl font-bold font-heading text-blue-700">
          <a href="#">Alvinnes</a>
        </h3>
        <ul className="flex gap-10 font-medium text-slate-600">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-600 after:block after:border-b-2 after:border-b-blue-600 after:-mt-0.5 after:scale-x-0 after:transition-all after:duration-500 hover:after:scale-x-100 after:origin-left"
            >
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificateSection />
      <ProjectSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

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
      year: "2021 - 2024",
      school: "Sekolah Menengah Pertama",
      description:
        "Mempelajari dasar-dasar ilmu pengetahuan dan mulai tertarik dengan dunia teknologi digital dan komputer.",
    },
    {
      id: 2,
      year: "2024 - Sekarang",
      school: "SMK Walisongo Pecangaan",
      description:
        "Siswa jurusan Teknik Komputer dan Jaringan (TKJ). Mendalami ilmu jaringan, pengembangan perangkat lunak, dan administrasi sistem.",
    },
    {
      id: 3,
      year: "2025 - 2026",
      school: "Sertifikasi & Pelatihan IT",
      description:
        "Aktif mengikuti berbagai kompetisi (LKS) dan pelatihan intensif untuk mengasah skill Web Development dan Manajemen Jaringan.",
    },
  ];

  return (
    <section
      id="pendidikan"
      className="w-10/12 mx-auto flex flex-col items-center mt-100"
    >
      <div className="w-xl text-center mb-20">
        <h2 className="text-4xl font-semibold font-heading text-slate-900">
          Riwayat Pendidikan
        </h2>
        <p className="leading-relaxed mt-8 text-slate-600">
          Perjalanan belajarku yang membentuk dasar pengetahuanku di bidang
          teknologi saat ini.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full mx-auto py-10 pl-8">
        <div className="absolute left-0 top-0 w-1 h-full bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-blue-500 origin-top h-full"
            style={{ scaleY: scaleY }}
          />
        </div>

        <div className="flex flex-col gap-30">
          {educationData.map((item, index) => (
            <div key={item.id} className="relative w-2xl">
              <motion.div
                className="absolute -left-41 top-5 w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-md z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="w-full text-left pl-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-wider mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-slate-800 group-hover:text-blue-600 transition-colors">
                    {item.school}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
