import { ArrowDownCircleIcon, ArrowUpRightFromCircleIcon } from "lucide-react";
import RotatingText from "../components/RotatingText";

const page = () => {
  return (
    <main className="w-full min-h-screen bg-white font-montserrat">
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
            visual yang membuat orang terpukau dengan website saya. Mari
            jelajahi apa yang sudah aku bangun sejauh ini.
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
    </main>
  );
};

export default page;
