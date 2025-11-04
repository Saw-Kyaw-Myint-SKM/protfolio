import React, { useState, useEffect } from "react";
import { CodeBackground } from "./component/CodeBackground";
import { LoadingScreen } from "./component/Loading";
import { MacTerminalHeader } from "./component/MacTerminalHeader";
import { MacTerminalWindow } from "./component/MacTerminalWindow";
import { ScrollReveal } from "./component/ScrollReveal";
import { SkillTag } from "./component/SkillTag";
import { ProjectCard } from "./component/ProjectCard";
import { CertificationCard } from "./component/CertificationCard";
import { AboutMeMacTerminal } from "./component/AboutMeMacTerminal";
import { BackToTopButton } from "./component/BackToTopButton";
import Profile from "./assets/profile.png";
import Resume from "./assets/Saw_Kyaw_Myint.pdf";

import {
  Github,
  Mail,
  FileDown,
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
  Phone,
  LinkedinIcon,
} from "lucide-react";

import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
} from "framer-motion";

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
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "As an AWS Cloud Practitioner, I have foundational knowledge of Amazon Web Services (AWS) cloud concepts, global infrastructure, billing and pricing models, security principles, and core AWS services such as EC2, S3, RDS, and Lambda.",
    },
  ];

  const projects = [
    {
      title: "Exam TEST",
      description:
        "This project is designed to test the IQ of entry members and to share knowledge with other members. If a user's device is closed for some reason during answering, they can resume from the current question when logging in on a new device. I gained experience using Laravel's caching features with various advanced technologies in both Vue and Laravel.",
      tech: ["Laravel", "vue.js", "Inertia.js", "Mysql"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Forum",
      description:
        "It similarly to Stack Overflow. It includes real-time notification features, a collaborative editing system, and a reputation-based ranking system that rewards user contributions. Users can ask and answer technical questions, vote on responses, and earn badges for their participation. The platform also supports code formatting, tagging for better content, and a moderation system to ensure high-quality discussions.",
      tech: ["Laravel", "Apline.js", "Mysql", "Socket.io"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Reporting System",
      description:
        "Interactive weather dashboard with 7-day forecasts, location-based weather data, and beautiful data visualizations. Includes dark mode and responsive design.",
      tech: ["Laravel", "React", "Inertia.js", "Mysql"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Learning Platform",
      description:
        "This project is designed to store videos . It is written in pure PHP. I understand PHP OOP principles, explored SQL injection prevention techniques, and PHP video streaming functionality.",
      tech: ["Php", "React", "Mysql"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Calculates kitchen item costs",
      description:
        "This is a Laravel and jQuery-based project designed to calculate kitchen item costs.I developed a history tracking feature, implemented dynamic URL updates, and fixed some bugs.",
      tech: ["Laravel", "Mysql"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Store Item Management System",
      description:
        "This is an ordering system built with Laravel API for managing store items. In this project, I configured Docker, set up a GitHub Actions workflow, and developed an API to manage item costs.",
      tech: ["Laravel", "Nuxt", "Mysql"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Data Analysis System",
      description:
        "This project is built with Go, Ruby, Vue, and Java and has won several SaaS awards in Japan. It is built on a scalable and leverageable microservices architecture. I developed the Vue.js frontend and Ruby backend, gaining knowledge of Ruby microservices architecture, large data management, SQL queries, background job management, and some AWS services, including SQS and SNS, as well as Vue and Ruby package development.",
      tech: ["Go", "Ruby", "Vue", "Java", "Mysql"],
      liveUrl: "",
      githubUrl: "",
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
            <MacTerminalWindow title="Welcome to my portfolio" delay={0.2}>
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
                      src={Profile}
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
                    href="#Projects"
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
                    href="#Contact"
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

        {/* Projects Section */}
        <section id="Projects" className="md:py-8 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0.2}>
              <MacTerminalWindow title="Projects">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl font-bold text-green-400 font-mono mb-6 text-center flex items-center justify-center"
                >
                  <Terminal className="inline mr-2" size={20} />
                  Project Experience
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 gap-1">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} delay={index * 0.2} />
                  ))}
                </div>
              </MacTerminalWindow>
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

        {/* Contact Section */}
        <section id="Contact" className="md:py-8 py-3 md:pb-12 mb-6">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0.2}>
              <MacTerminalWindow title="Get In Touch">
                <div className="text-center">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl font-bold text-green-400 font-mono mb-4 flex items-center justify-center"
                  >
                    <Mail className="mr-2 hidden md:inline" size={20} />
                    Let's Build Something Amazing Together
                  </motion.h2>
                  <div className="mb-4 px-9 py-4">
                    <motion.div
                      whileHover={{
                        color: "#10b981",
                      }}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <Phone className="text-green-400" size={16} />
                      <a
                        href="tel:+959451340513"
                        className="text-gray-300 hover:underline"
                      >
                        09451340513
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        color: "#10b981",
                      }}
                      className="flex items-center space-x-3 space-y-2 cursor-pointer"
                    >
                      <Mail className="text-green-400 mt-1" size={16} />
                      <a
                        href="mailto:sawkyaw7777777@gmail.com"
                        className="hover:underline m-0"
                      >
                        sawkyaw7777777@gmail.com
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        color: "#10b981",
                      }}
                      className="flex items-center space-x-3 space-y-2 cursor-pointer"
                    >
                      <LinkedinIcon className="text-green-400" size={16} />
                      <span className="text-gray-300">
                        <a
                          target="_blank"
                          className="hover:underline"
                          href="https://www.linkedin.com/in/saw-kyaw-405886295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fweb.skype.com%2F"
                        >
                          Saw Kyaw Myint
                        </a>
                      </span>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <motion.a
                      href={Resume}
                      download="Saw_Kyaw_Myint_Resume"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#10b981",
                        color: "#0f172a",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 border border-gray-400 bg-green-400 text-gray-700 px-4 py-2 rounded-lg font-mono font-bold hover:bg-green-300 transition-colors text-sm cursor-pointer"
                    >
                      <FileDown size={14} />
                      <span>Resume</span>
                    </motion.a>
                    <motion.a
                      href="https://github.com/Saw-Kyaw-Myint-SKM"
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
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        borderColor: "#10b981",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 border border-green-400 text-green-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-green-400/10 transition-colors text-sm cursor-pointer"
                    >
                      <Mail size={14} />
                      <a href="mailto:sawkyaw7777777@gmail.com" target="_blank">
                        Send Email
                      </a>
                    </motion.div>
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
              © 2025 Saw Kyaw Myin. Built with React and Tailwind CSS.
            </motion.p>
          </div>
        </motion.footer>

        {/* Back to Top Button */}
        <BackToTopButton />
      </AnimatePresence>
    </div>
  );
}
