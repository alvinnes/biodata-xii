import { ArrowDownCircleIcon, ArrowUpRightFromCircleIcon } from "lucide-react";
import RotatingText from "./RotatingText";
import FadeContent from "./FadeContent";
import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <section
      id="#"
      className="w-full min-h-screen relative flex flex-col md:flex-row justify-center md:justify-evenly items-center pt-24 md:pt-0 pb-12 md:pb-0 bg-linear-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="w-11/12 md:w-2xl text-slate-800 flex flex-col gap-6 md:gap-8 z-10 items-center md:items-start text-center md:text-left mt-10 md:mt-0">
        <FadeContent blur={true} duration={2000} initialOpacity={0}>
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 md:ml-2">
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
        </FadeContent>
        <FadeContent blur={true} duration={2000} delay={0.3} initialOpacity={0}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading text-slate-900 leading-tight">
            Hi I'm <span className="text-blue-600">Alvin</span>
          </h1>
        </FadeContent>
        <FadeContent blur={true} delay={0.5} duration={2000} initialOpacity={0}>
          <p className="text-sm md:text-base w-11/12 md:w-10/12 leading-relaxed md:ml-1 text-slate-600">
            Karya yang hebat tidak sekadar dilihat, tapi dirasakan. Hai! Aku
            Alvin, seorang FullStack Developer yang fokus membangun pengalaman
            visual yang membuat orang terpukau. Mari jelajahi apa yang sudah aku
            bangun sejauh ini.
          </p>
        </FadeContent>
        <FadeContent blur={true} duration={2000} delay={0.6} initialOpacity={0}>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-8">
            <button className="px-8 cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors py-4 rounded-full text-white text-sm font-semibold shadow-lg shadow-blue-600/30">
              <a href="#tentang" className="flex items-center gap-2">
                <ArrowUpRightFromCircleIcon className="size-4" />
                Baca Selengkapnya
              </a>
            </button>
            <button className="px-8 relative rounded-full border-blue-200 text-blue-700 overflow-hidden cursor-pointer before:size-full before:absolute before:left-0 before:bottom-0 before:bg-blue-50 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-all before:duration-500 border text-sm font-semibold">
              <a
                href="#proyek"
                className="relative z-10 flex items-center gap-2"
              >
                <ArrowDownCircleIcon className="size-5" strokeWidth={1.5} />{" "}
                Lihat Project
              </a>
            </button>
          </div>
        </FadeContent>
      </div>
      <FadeContent blur={true} duration={2000} delay={0.3} initialOpacity={0}>
        <div className="w-11/12 md:w-xl md:-mr-30 relative z-10 mt-10 md:mt-0 mx-auto md:mx-0 flex flex-col items-center">
          <div className="w-[80vw] sm:w-80 md:w-lg h-96 md:h-150 rounded-t-[100px] md:rounded-t-full mt-10 bg-linear-to-t from-blue-400 via-blue-300 to-blue-100 overflow-hidden border-b-4 md:border-b-8 border-gray-300">
            <img
              src="img/image-hero.png"
              alt="foto-hero"
              className="w-[150%] h-[150%] object-cover -mt-20 md:-mt-35 ml-2 md:ml-6 drop-shadow-2xl"
            />
          </div>
          <div className="flex gap-6 md:gap-8 mt-6 md:mt-3 items-center">
            <a
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
              href="https://www.instagram.com/alvinnes__"
            >
              <InstagramLogoIcon className="size-6" />
            </a>
            <a
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
              href="https://www.tiktok.com/@alvinnes_?_r=1&_t=ZS-997v4DhUHsQ"
            >
              <TiktokLogoIcon className="size-6" />
            </a>
            <a
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
              href="https://www.linkedin.com/in/alvinnes"
            >
              <LinkedinLogoIcon className="size-6" />
            </a>
            <a
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
              href="https://www.facebook.com/share/198k9i2WgB/"
            >
              <FacebookLogoIcon className="size-6" />
            </a>
            <a
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
              href="https://x.com/Erik_Niceboy"
            >
              <XLogoIcon className="size-6" />
            </a>
            <a
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
              href="https://github.com/alvinnes"
            >
              <GithubLogoIcon className="size-6" />
            </a>
          </div>
        </div>
      </FadeContent>

      <div className="absolute top-40 right-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default HeroSection;
