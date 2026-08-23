import { ArrowDownCircleIcon, ArrowUpRightFromCircleIcon } from "lucide-react";
import RotatingText from "./RotatingText";

const HeroSection = () => {
  return (
    <section
      id="#"
      className="w-full h-screen relative flex justify-evenly items-center bg-linear-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="w-2xl text-slate-800 flex flex-col gap-8 z-10">
        <div className="flex items-center gap-4 ml-2">
          <h2 className="font-semibold text-slate-600 tracking-wide uppercase text-sm">
            I'm a
          </h2>
          <RotatingText
            texts={[
              "FullStack Developer",
              "DevOps Engineer",
              "Network Engineer",
            ]}
            mainClassName="px-2 sm:px-4 md:px-6 bg-blue-100 font-bold text-blue-700 w-fit overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
        <h1 className="text-7xl lg:text-8xl font-bold font-heading text-slate-900 leading-tight">
          Hi I'm <span className="text-blue-600">Alvin</span>
        </h1>
        <p className="text-base w-10/12 leading-relaxed ml-1 text-slate-600">
          Karya yang hebat tidak sekadar dilihat, tapi dirasakan. Hai! Aku
          Alvin, seorang FullStack Developer yang fokus membangun pengalaman
          visual yang membuat orang terpukau. Mari jelajahi apa yang sudah aku
          bangun sejauh ini.
        </p>
        <div className="flex gap-6 mt-8">
          <button className="px-8 cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors py-4 rounded-full text-white text-sm font-semibold shadow-lg shadow-blue-600/30">
            <a href="#tentang" className="flex items-center gap-2">
              <ArrowUpRightFromCircleIcon className="size-4" />
              Baca Selengkapnya
            </a>
          </button>
          <button className="px-8 relative rounded-full border-blue-200 text-blue-700 overflow-hidden cursor-pointer before:size-full before:absolute before:left-0 before:bottom-0 before:bg-blue-50 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-all before:duration-500 border text-sm font-semibold">
            <a href="#proyek" className="relative z-10 flex items-center gap-2">
              <ArrowDownCircleIcon className="size-5" strokeWidth={1.5} /> Lihat
              Project
            </a>
          </button>
        </div>
      </div>
      <div className="w-xl -mr-30 relative z-10">
        <div className="w-lg h-150 rounded-t-full mt-10 bg-linear-to-t from-blue-100 via-blue-50 to-transparent overflow-hidden border-b-8 border-orange-500">
          <img
            src="img/image-hero.png"
            alt="foto-hero"
            className="size-[150%] object-cover -mt-35 ml-6 drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default HeroSection;
