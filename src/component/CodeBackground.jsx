import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";

export const CodeBackground = () => {
  const codeSnippets = [
    'const developer = { skills: ["React", "Node.js", "Python"], passion: "building amazing things" };',
    "function createPortfolio() { return <Portfolio developer={me} />; }",
    'console.log("Welcome to my developer portfolio!");',
    "npm install --save creativity innovation problem-solving",
    'git commit -m "Built an awesome portfolio"',
    "let dreams = true; while(dreams) { code(); }",
    'import { passion, dedication } from "./life.js";',
    'class Developer extends Human { code() { return "beautiful solutions"; } }',
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Full screen repeating background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 md:grid-cols-12 gap-4 p-4">
          {[...Array(96)].map((_, i) => (
            <div
              key={`pattern-${i}`}
              className="text-green-400/20 font-mono text-xs text-center"
            >
              {codeSnippets[
                Math.floor(Math.random() * codeSnippets.length)
              ].slice(0, 15)}
            </div>
          ))}
        </div>
      </div>

      {/* Left to right racing code animation - full screen */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`left-right-racing-${i}`}
            className="absolute text-green-400/25 font-mono text-sm whitespace-nowrap"
            initial={{ x: "-100vw", top: `${(i * 8) % 100}%` }}
            animate={{
              x: "100vw",
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 4,
            }}
            style={{
              fontSize: `${12 + Math.random() * 4}px`,
              transform: "translateY(-50%)",
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </motion.div>
        ))}
      </div>

      {/* Additional floating code snippets */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`floating-center-${i}`}
          className="absolute text-green-400/15 font-mono text-xs opacity-30"
          initial={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            repeatDelay: 4 + Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ))}

      {/* Pulsing dots - full screen distribution */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`center-dot-${i}`}
          className="absolute w-1 h-1 bg-green-400 rounded-full opacity-25"
          initial={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};
