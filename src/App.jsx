import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Terminal,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Loader,
  Minimize2,
  ChevronUp,
} from "lucide-react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

const CodeBackground = () => {
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

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-green-400 mb-4"
        >
          <Loader size={64} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-green-300 font-mono text-lg"
        >
          Initializing developer environment...
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, delay: 1 }}
          className="h-1 bg-green-400/30 mx-auto mt-4 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{ width: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h-full bg-green-400"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const MacTerminalHeader = ({ children }) => (
  <div className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-600 rounded-t-xl p-3">
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1.5">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>
      <div className="text-gray-400 font-mono text-sm ml-3">
        {children || "Terminal"}
      </div>
    </div>
  </div>
);

const MacTerminalWindow = ({ children, title, delay = 0 }) => (
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

const ScrollReveal = ({ children, delay = 0, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const SkillTag = ({ skill, level, delay = 0 }) => {
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

const ProjectCard = ({
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

const CertificationCard = ({ title, issuer, date, description, delay = 0 }) => (
  <ScrollReveal delay={delay}>
    <MacTerminalWindow title={title}>
      <div className="flex items-start space-x-3 mb-3">
        <Award className="text-green-400 mt-1 flex-shrink-0" size={20} />
        <div>
          <p className="text-gray-400 text-sm">
            {issuer} • {date}
          </p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </MacTerminalWindow>
  </ScrollReveal>
);

const AboutMeMacTerminal = ({ delay = 0 }) => {
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

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-green-500 hover:bg-green-600
        text-white shadow-lg
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
        md:hidden
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} className="animate-bounce" />
    </button>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Home",
        "About",
        "Certifications",
        "Projects",
        "Contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Validates technical expertise in developing and maintaining applications on the AWS platform, including deployment, security, and debugging.",
    },
    {
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2022",
      description:
        "Demonstrates ability to build scalable applications using Google Cloud Platform services and APIs.",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      description:
        "Certifies skills in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      date: "2022",
      description:
        "Validates knowledge of MongoDB fundamentals, CRUD operations, and application development using MongoDB.",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, file sharing, and team collaboration features. Features drag-and-drop interface and notifications.",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with 7-day forecasts, location-based weather data, and beautiful data visualizations. Includes dark mode and responsive design.",
      tech: ["React", "Weather API", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        <CodeBackground />

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Code className="text-green-400" size={24} />
                <span className="text-green-400 font-mono font-bold">
                  dev@portfolio:~$
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["Home", "About", "Certifications", "Projects", "Contact"].map(
                  (section) => (
                    <motion.button
                      key={section}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{
                        scale: 1.05,
                        color: "#10b981",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        delay:
                          0.3 +
                          [
                            "Home",
                            "About",
                            "Certifications",
                            "Projects",
                            "Contact",
                          ].indexOf(section) *
                            0.1,
                      }}
                      onClick={() => scrollToSection(section)}
                      className={`font-mono text-sm transition-colors hover:text-green-400 ${
                        activeSection == section
                          ? "text-green-400"
                          : "text-gray-300"
                      } cursor-pointer`}
                    >
                      {section}
                    </motion.button>
                  )
                )}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="md:hidden text-green-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden py-4 border-t border-gray-700"
              >
                {["Home", "About", "Certifications", "Projects", "Contact"].map(
                  (section) => (
                    <motion.button
                      key={section}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{
                        scale: 1.05,
                        color: "#10b981",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left py-2 font-mono text-sm text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
                    >
                      {section}
                    </motion.button>
                  )
                )}
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Home Section */}
        <section
          id="Home"
          className="min-h-screen flex items-center justify-center pt-16 pb-8"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MacTerminalWindow title="Welcome to my portfolio" delay={0.4}>
              <div className="space-y-6">
                {/* Profile Photo without animation */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block cursor-pointer"
                >
                  <div className="w-44 h-44 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-400/30 mx-auto">
                    <img
                      src="/src/assets/profile.png"
                      alt="Alex Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-4xl sm:text-4xl md:text-4xl font-bold mb-4"
                >
                  <span className="text-green-400 font-mono">Hello, I'm</span>
                  <br />
                  <span className="text-white">Saw Kyaw Myint</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-xl text-gray-300 font-mono leading-relaxed"
                >
                  Full-Stack Developer | Laravel | Next | Nuxt
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-gray-400 leading-relaxed max-w-2xl mx-auto"
                >
                  I have over 2 years of experience in this field. I excel at
                  writing clean, efficient code and I’m passionate about
                  learning and implementing modern technologies to build better
                  digital experiences.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex flex-wrap justify-center gap-4 mt-8"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#10b981",
                      color: "#0f172a",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-400 text-gray-900 px-6 py-2.5 rounded-lg font-mono font-bold hover:bg-green-300 transition-colors cursor-pointer"
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      borderColor: "#10b981",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-green-400 text-green-400 px-6 py-2.5 rounded-lg font-mono font-bold hover:bg-green-400/10 transition-colors cursor-pointer"
                  >
                    Get In Touch
                  </motion.a>
                </motion.div>
              </div>
            </MacTerminalWindow>
          </div>
        </section>

        {/* About Section */}
        <section id="About" className="md:py-8 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0.2}>
              <AboutMeMacTerminal />
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="Certifications" className="md:py-8 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0.2}>
              <MacTerminalWindow title="Professional Certifications">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl font-bold text-green-400 font-mono mb-6 text-center flex items-center justify-center"
                >
                  <Award className="inline mr-2" size={20} />
                  Industry Recognized Credentials
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <CertificationCard
                      key={index}
                      {...cert}
                      delay={0.4 + index * 0.2}
                    />
                  ))}
                </div>
              </MacTerminalWindow>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Section */}
        <section id="Projects" className="md:py-8 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0.2}>
              <MacTerminalWindow title="Recent Projects">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl font-bold text-green-400 font-mono mb-6 text-center flex items-center justify-center"
                >
                  <Terminal className="inline mr-2" size={20} />
                  Featured Work
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} delay={index * 0.2} />
                  ))}
                </div>
              </MacTerminalWindow>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section id="Contact" className="md:py-8 py-3 md:pb-12 mb-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0.2}>
              <MacTerminalWindow title="Get In Touch">
                <div className="text-center">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl font-bold text-green-400 font-mono mb-4 flex items-center justify-center"
                  >
                    <Mail className="inline mr-2" size={20} />
                    Let's Build Something Amazing Together
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-300 mb-6 leading-relaxed"
                  >
                    I'm currently available for freelance work and full-time
                    opportunities. Feel free to reach out if you have a project
                    in mind or just want to say hello!
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <motion.a
                      href="mailto:alex@example.com"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#10b981",
                        color: "#0f172a",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-green-400 text-gray-900 px-4 py-2 rounded-lg font-mono font-bold hover:bg-green-300 transition-colors text-sm cursor-pointer"
                    >
                      <Mail size={14} />
                      <span>Send Email</span>
                    </motion.a>
                    <motion.a
                      href="https://github.com"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        borderColor: "#10b981",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 border border-green-400 text-green-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-green-400/10 transition-colors text-sm cursor-pointer"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </motion.a>
                  </motion.div>
                </div>
              </MacTerminalWindow>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:py-8 py-6 border-t border-gray-700"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              whileHover={{
                color: "#10b981",
                scale: 1.02,
              }}
              className="text-gray-400 font-mono text-sm cursor-pointer"
            >
              © 2024 Alex Chen. Built with React and Tailwind CSS.
            </motion.p>
          </div>
        </motion.footer>

        {/* Back to Top Button */}
        <BackToTopButton />
      </AnimatePresence>
    </div>
  );
}
