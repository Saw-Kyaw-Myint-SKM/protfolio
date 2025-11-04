import { User, Briefcase, GraduationCap, Award, Minimize2 } from "lucide-react";

import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";
import { MacTerminalHeader } from "./MacTerminalHeader";
import { SkillTag } from "./SkillTag";

export const AboutMeMacTerminal = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        boxShadow: "0 20px 40px -10px rgba(0, 255, 0, 0.2)",
        borderColor: "#10b981",
      }}
      className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden transition-all duration-100 cursor-pointer relative"
    >
      <MacTerminalHeader>About Me</MacTerminalHeader>
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-bold text-green-400 font-mono mb-4 flex items-center"
            >
              <User className="inline mr-2" size={20} />
              Developer Profile
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 mb-6 leading-relaxed text-sm"
            >
              I am currently employed at Metateammyanmar Company, which is based
              in Japan. I have improved my clean code writing skills and become
              good at learning skill.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-300 mb-6 leading-relaxed text-sm"
            >
              Studied Computer Science in University of computer studies, Loikaw
              and stopped in 2020 because of Covid. I currently studying
              University of Dagon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-3 text-sm"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  color: "#10b981",
                }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <GraduationCap className="text-green-400" size={16} />
                <span className="text-gray-300">B.S. Computer Science</span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  color: "#10b981",
                }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <Briefcase className="text-green-400" size={16} />
                <span className="text-gray-300">
                  Senior Full-Stack Developer
                </span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  color: "#10b981",
                }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <Award className="text-green-400" size={16} />
                <span className="text-gray-300">5+ Successful Projects</span>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-bold text-green-400 font-mono mb-4"
            >
              Tech Stack
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "React.js", level: 60 },
                { name: "Vue.js", level: 80 },
                { name: "Next", level: 50 },
                { name: "Nuxt", level: 60 },
                { name: "Livewire", level: 50 },
                { name: "Laravel", level: 80 },
                { name: "Docker", level: 30 },
                { name: "Mysql", level: 75 },
              ].map((skill, index) => (
                <SkillTag
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Crop/Resize icon at bottom-right corner */}
      <div className="absolute bottom-2 right-2 text-gray-500 opacity-60">
        <Minimize2 size={12} className="rotate-45" />
      </div>
    </motion.div>
  );
};
