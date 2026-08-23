import { useState } from "react";
import OptionWheel from "./OptionWheel";
import skillsItem from "../datas/skillsItem";
import { motion, AnimatePresence } from "motion/react";

const SkillsSection = () => {
  const [menuSkills, setMenuSkills] = useState("Linux Administrator");
  const handleSkillsClick = (index: number, item: string) => {
    setMenuSkills(item);
  };

  const filteredDataSkills = skillsItem.find(
    (data) => data.category == menuSkills,
  );
  const dataSkills = filteredDataSkills ? filteredDataSkills.skill : [];
  return (
    <section id="skill" className="flex flex-col py-40 items-center w-full">
      <div className="w-11/12">
        <h2 className="text-4xl font-semibold font-heading text-slate-900">
          Tech Stack & Keahlian
        </h2>
        <p className="leading-relaxed w-xl mt-8 text-slate-600">
          Memadukan logika pemrograman dengan keandalan sistem jaringan. Silakan
          jelajahi berbagai teknologi yang terus aku kembangkan.
        </p>
      </div>

      <div className="w-11/12 flex relative justify-between items-center mt-20">
        <div className="h-150">
          <OptionWheel
            items={[
              "Web & IoT Development",
              "Cisco Packet Tracer",
              "Linux Administrator",
              "Windows Server",
              "DevOps & Automation",
            ]}
            defaultSelected={2}
            textColor="#808080"
            activeColor="#000"
            side="left"
            fontSize={2}
            spacing={1.4}
            curve={1}
            tilt={6}
            blur={2}
            fade={0.25}
            smoothing={200}
            inset={80}
            loop={false}
            draggable
            soundUrl="/assets/sounds/click-soft.mp3"
            soundVolume={0.5}
            onChange={(index, item) => handleSkillsClick(index, item)}
            className="w-xl self-start"
          />
        </div>
        <div className="w-8/12 h-120 overflow-hidden rounded-3xl bg-slate-100/50 p-2 backdrop-blur-2xl border border-white/50 shadow-2xl relative">
          <div
            className="h-full w-full overflow-y-auto p-6 flex flex-col"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#CBD5E1 transparent",
            }}
          >
            <motion.h2
              key={menuSkills}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-3xl mb-8 w-fit text-white rounded-2xl p-4 bg-linear-to-r from-blue-700 to-cyan-600 border-b border-slate-200/50"
            >
              {menuSkills}
            </motion.h2>
            <div className="flex flex-col gap-5 pb-4">
              <AnimatePresence mode="popLayout">
                {dataSkills.map((data, index) => {
                  return (
                    <motion.div
                      key={`${menuSkills}-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-[#808080]/30 hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:bg-white transition-all duration-300"
                    >
                      <div className="flex-0 px-3 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 text-blue-500 group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm mt-0.5">
                        {data.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-base">
                          {data.title}
                        </span>
                        {data.tech && (
                          <span className="text-slate-500 text-sm leading-relaxed mt-1">
                            {data.tech}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
