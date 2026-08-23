import { MoveRightIcon } from "lucide-react";
import AccordionGallery from "./AccordionGallery";
import TextType from "./TextType";

const items = [
  {
    image: "img/about/about-1.JPG",
  },
  {
    image: "img/about/about-3.jpeg",
  },
  {
    image: "img/about/about-2.jpeg",
  },
  {
    image: "img/about/about-4.jpeg",
  },
  {
    image: "img/about/about-5.png",
  },
];

const AboutSection = () => {
  return (
    <section
      id="tentang"
      className="w-full  flex justify-center items-center gap-15 py-50"
    >
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
        <h2 className="text-4xl font-bold font-heading text-slate-900">
          Halo, Mari Berkenalan
        </h2>
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
          className="font-semibold text-xl text-orange-500"
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
        <div className="flex items-end gap-8 mt-4">
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 text-white text-sm font-semibold">
            <a href="#skill">Keahlian Saya</a>
          </button>
          <a
            href="#kontak"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600"
          >
            Hubungi Saya
            <MoveRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
