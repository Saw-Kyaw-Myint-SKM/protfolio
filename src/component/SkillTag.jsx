import { useEffect, useState, useRef } from "react";

import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

export const SkillTag = ({ skill, level, delay = 0 }) => {
  const [displayLevel, setDisplayLevel] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay },
      });
      // Animate the percentage number
      const interval = setInterval(() => {
        setDisplayLevel((prev) => {
          if (prev >= level) {
            clearInterval(interval);
            return level;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isInView, controls, delay, level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(30, 41, 59, 0.7)",
        borderColor: "#10b981",
      }}
      className="bg-gray-800/50 border border-green-400/20 rounded-lg p-3 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="text-green-300 font-mono text-sm">{skill}</div>
        <div className="text-yellow-400 font-mono text-sm font-bold">
          {displayLevel}%
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-red-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};
