"use client";

import {
  ArrowDownCircleIcon,
  ArrowUpRightFromCircleIcon,
  ExpandIcon,
  MoveRightIcon,
  XIcon,
} from "lucide-react";
import RotatingText from "./components/RotatingText";
import TextType from "./components/TextType";
import AccordionGallery from "./components/AccordionGallery";
import { useState } from "react";

const items = [
  {
    image: "https://picsum.photos/id/1015/900/1200",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1018/900/1200",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1039/900/1200",
    link: "#",
  },
  {
    image: "https://picsum.photos/id/1043/900/1200",
    link: "#",
  },
];

interface CertificateItemsStruct {
  id: number;
  img: string;
  alt: string;
  title: string;
}

const certificateItems = [
  {
    id: 1,
    img: "img/sertifikat/web-development.jpg",
    alt: "sertifikat-web-development",
    title: "Peserta Web Development & Web Design Tingkat Provinsi 2025",
  },
  {
    id: 2,
    img: "img/sertifikat/lks-kabupaten.jpg",
    alt: "sertifikat-lks-kabupaten",
    title:
      "Juara I LKS IT Network Systems Administration Tingkat Kabupaten 2026",
  },
  {
    id: 3,
    img: "img/sertifikat/lks-jateng.png",
    alt: "sertifikat-lks-jateng",
    title:
      "Juara IV LKS IT Network Systems Administration Tingkat Provinsi 2026",
  },
];

const page = () => {
  const [isClickedCertificate, setIsClickedCertificate] = useState(false);
  const [imgCertificate, setimgCertificate] = useState<string | undefined>(
    undefined,
  );

  const handleDetailCertificate = (img: string) => {
    setIsClickedCertificate(!isClickedCertificate);
    setimgCertificate(img);
  };
  return (
    <main className="w-full min-h-screen bg-white font-montserrat">
      <HeroSection />
      <AboutSection />
      <section className="flex flex-col py-30 items-center w-full h-screen">
        <div className="w-xl text-center">
          <h2 className="text-4xl font-semibold">Pencapaian & Sertifikat</h2>
          <p className="leading-relaxed mt-8">
            Setiap sertifikat di sini punya ceritanya sendiri—mulai dari proses
            trial and error, malam-malam panjang untuk coding, hingga akhirnya
            berhasil menaklukkan tantangan baru. Intip beberapa pencapaian yang
            menandai perjalananku sejauh ini!
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-11/12 mt-20">
          {certificateItems.map((item) => (
            <div
              key={item.id}
              className="w-110 h-80 p-3 rounded-md overflow-hidden bg-slate-700 text-white"
            >
              <div
                onClick={() => handleDetailCertificate(item.img)}
                className="w-full relative h-55 rounded-xl overflow-hidden bg-white group"
              >
                <img src={item.img} alt={item.alt} className="size-full" />
                <div className="size-full absolute flex justify-center items-center text-white cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500  left-0 bottom-0 bg-black/50">
                  <ExpandIcon className="size-10" />
                </div>
                <div
                  className={`w-full h-screen bg-white/10 backdrop-blur-2xl fixed top-0 left-0 flex justify-center items-center transition-all duration-500 z-999 ${isClickedCertificate ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  <div className="w-10/12 h-[80vh] rounded-xl relative shadow-xl bg-white">
                    <button
                      onClick={() =>
                        setIsClickedCertificate(!isClickedCertificate)
                      }
                      className="absolute transition-all duration-500 hover:rotate-360 -top-3 -right-3 size-8 bg-slate-600 text-white rounded-full flex justify-center items-center cursor-pointer p-2"
                    >
                      <XIcon />
                    </button>
                    <img
                      src={imgCertificate}
                      alt="foto-sertifikat"
                      className="size-full"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-semibold w-10/12 mt-5">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative flex justify-evenly items-center">
      <div className="w-2xl text-[#1b1b1b] flex flex-col gap-8">
        <div className="flex items-center gap-4 ml-2">
          <h2 className="font-semibold">I'm a</h2>
          <RotatingText
            texts={[
              "FulStack Developer",
              "DevOps Engineer",
              "Network Engineer",
            ]}
            mainClassName="px-2 sm:px-4 md:px-6 bg-[#FDF0D5] font-semibold text-black w-fit overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            splitBy="characters"
            auto
            loop
          />
        </div>
        <h1 className="text-8xl font-bold">Hi I'm Alvin</h1>
        <p className="text-sm w-9/12 leading-relaxed ml-1">
          Karya yang hebat tidak sekadar dilihat, tapi dirasakan. Hai! Aku
          Alvin, seorang FullStack Developer yang fokus membangun pengalaman
          visual yang membuat orang terpukau dengan website saya. Mari jelajahi
          apa yang sudah aku bangun sejauh ini.
        </p>
        <div className="flex gap-6 mt-8">
          <button className="px-8 cursor-pointer bg-amber-500 py-4 rounded-full text-white text-sm font-semibold">
            <a href="" className="flex items-center gap-2">
              <ArrowUpRightFromCircleIcon className="size-4" />
              Baca Selengkapnya
            </a>
          </button>
          <button className="px-8 relative rounded-full border-amber-300  overflow-hidden cursor-pointer before:size-full before:absolute before:left-0 before:bottom-0 before:bg-amber-400 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-all before:duration-600 border text-sm font-semibold">
            <a href="" className="relative z-2 flex items-center gap-2">
              <ArrowDownCircleIcon className="size-5" strokeWidth={1} /> Lihat
              Project
            </a>
          </button>
        </div>
      </div>
      <div className="w-xl -mr-30">
        <div className="w-lg h-150 rounded-t-full mt-10 bg-[#FDF0D5] overflow-hidden">
          <img
            src="img/image-hero.png"
            alt="foto-hero"
            className="size-[150%] object-cover -mt-35 ml-6 drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-25 bg-[#FFF0D9]"></div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="w-full  flex justify-center items-center gap-15 py-30">
      <div className="w-1/2 px-8">
        <AccordionGallery
          items={items}
          defaultIndex={2}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#ffffff"
          overlayColor="#060010"
          textColor="#ffffff"
          grayscale
          duration={0.6}
          ease="back.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={560}
          gap={10}
          radius={16}
          orientation="horizontal"
        />
      </div>
      <div className="w-xl flex gap-6 flex-col">
        <h2 className="text-4xl font-bold">Halo, Mari Berkenalan</h2>
        <TextType
          text={[
            "I'm a Fullstack Developer",
            "I'm a Devops Engineer",
            "I'm a Network Engineer",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
          className="font-semibold text-xl text-[#F9B637]"
        />
        <p className="leading-relaxed">
          Halo, nama saya <b>Alvin Nando Erik Saputra</b>, siswa kelas 11 di{" "}
          <b>SMK Walisongo Pecangaan</b>, jurusan{" "}
          <b>Teknik Komputer dan Jaringan</b>. Saya memiliki minat yang besar di
          dunia teknologi, khususnya dalam pengembangan perangkat lunak,
          jaringan komputer, dan sistem digital. Sejak awal masa studi, saya
          terus mengembangkan kemampuan teknis dan profesional untuk
          mempersiapkan karier masa depan saya sebagai{" "}
          <b>
            <i>Software Engineer</i>
          </b>
          .
        </p>

        <p className="leading-relaxed">
          Saat ini, saya telah mendalami pengembangan aplikasi web sebagai{" "}
          <b>
            <i>Fullstack Developer</i>
          </b>
          , dengan fokus utama pada <b>React.js</b> untuk pengembangan{" "}
          <i>frontend</i>, sambil terus meningkatkan kemampuan saya di bagian{" "}
          <i>backend</i>. Saya selalu berusaha mempelajari teknologi baru dan
          mengerjakan berbagai proyek untuk menambah pengalaman.
        </p>
        <div className="flex items-end gap-8">
          <button className="px-8 py-3 rounded-md bg-amber-400 text-sm font-semibold">
            <a href="">Keahlian Saya</a>
          </button>
          <a href="" className="flex items-center gap-2 text-sm underline">
            Hubungi Saya
            <MoveRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
