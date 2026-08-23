import { MoveRightIcon } from "lucide-react";
import AccordionGallery from "./AccordionGallery";
import TextType from "./TextType";
import FadeContent from "./FadeContent";
import AnimatedItem from "./AnimatedItem";

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
      className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-15 py-20 lg:py-50"
    >
      <FadeContent
        blur={true}
        duration={3000}
        initialOpacity={0}
        className="w-11/12 lg:w-1/2 lg:px-8"
      >
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
      </FadeContent>
      <div className="w-11/12 lg:w-xl flex gap-6 flex-col mt-10 lg:mt-0">
        <AnimatedItem direction="horizontal">
          <h2 className="text-4xl font-bold font-heading text-slate-900">
            Halo, Mari Berkenalan
          </h2>
        </AnimatedItem>
        <AnimatedItem direction="horizontal" delay={0.2}>
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
            className="font-semibold text-xl text-orange-300"
          />
        </AnimatedItem>
        <AnimatedItem direction="horizontal" delay={0}>
          <p className="leading-relaxed">
            Halo, nama saya <b>Alvin Nando Erik Saputra</b>, siswa kelas 11 di{" "}
            <b>SMK Walisongo Pecangaan</b>, jurusan{" "}
            <b>Teknik Komputer dan Jaringan</b>. Saya memiliki minat yang besar
            di dunia teknologi, khususnya dalam pengembangan perangkat lunak,
            jaringan komputer, dan sistem digital. Sejak awal masa studi, saya
            terus mengembangkan kemampuan teknis dan profesional untuk
            mempersiapkan karier masa depan saya sebagai{" "}
            <b>
              <i>Software Engineer</i>
            </b>
            .
          </p>
        </AnimatedItem>

        <AnimatedItem direction="horizontal" delay={0.3}>
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
        </AnimatedItem>
        <AnimatedItem direction="horizontal" delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-8 mt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 text-white text-sm font-semibold">
              <a href="#skill">Keahlian Saya</a>
            </button>
            <a
              href="#kontak"
              className="flex items-center justify-center sm:justify-start w-full sm:w-auto gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600"
            >
              Hubungi Saya
              <MoveRightIcon className="size-4" />
            </a>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
};

export default AboutSection;
