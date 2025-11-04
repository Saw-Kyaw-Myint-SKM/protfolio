import { Minimize2 } from "lucide-react";
import { MacTerminalHeader } from "./MacTerminalHeader";

import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";

export const MacTerminalWindow = ({ children, title, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{
      boxShadow: "0 20px 40px -10px rgba(0, 255, 0, 0.2)",
      borderColor: "#10b981",
    }}
    className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden transition-all duration-100 cursor-pointer relative my-6"
  >
    <MacTerminalHeader>{title}</MacTerminalHeader>
    <div className="p-6">{children}</div>
    {/* Crop/Resize icon at bottom-right corner */}
    <div className="absolute bottom-2 right-2 text-gray-500 opacity-60">
      <Minimize2 size={12} className="rotate-45" />
    </div>
  </motion.div>
);
