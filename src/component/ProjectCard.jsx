import { Github, ExternalLink } from "lucide-react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";
import { MacTerminalWindow } from "./MacTerminalWindow";
import { ScrollReveal } from "./ScrollReveal";

export const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  delay = 0,
}) => (
  <ScrollReveal delay={delay}>
    <MacTerminalWindow title={title}>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(16, 185, 129, 0.3)",
              color: "#fff",
            }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            className="bg-green-400/10 text-green-300 px-2 py-1 rounded text-xs font-mono cursor-pointer"
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div className="flex space-x-3">
        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              color: "#10b981",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors cursor-pointer"
          >
            <ExternalLink size={14} />
            <span className="text-sm">Live Demo</span>
          </motion.a>
        )}
        {githubUrl && (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              color: "#10b981",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors cursor-pointer"
          >
            <Github size={14} />
            <span className="text-sm">Code</span>
          </motion.a>
        )}
      </div>
    </MacTerminalWindow>
  </ScrollReveal>
);
