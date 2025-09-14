"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/ui/button";
import { FiDownload } from "react-icons/fi";
import { BsArrowDownRight, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Social from "@/components/ui/ui/Social";
import Stats from "@/components/ui/ui/Stats";
import Image from "next/image";

// Icons for skills
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiMysql,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import Link from "next/link";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const photoAnimation = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};

const textAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Data
const about = {
  description:
    "As a Full Stack Developer Intern and a Computer Science undergraduate, I have acquired extensive experience in software development. My hands-on involvement in various projects has allowed me to develop and maintain web applications, honing a wide range of skills in programming languages and technologies.",
  info: [
    { fieldName: "Name", fieldValue: "Binuk Hewage" },
    { fieldName: "Email", fieldValue: "binukhe@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Country", fieldValue: "Sri Lanka" },
  ],
};

const experience = [
  {
    company: "ORAGAN",
    position: "Software Engineer",
    duration: "June 2025 - Present",
  },
  {
    company: "Sri Lanka Telecom",
    position: "Full Stack Developer - Intern",
    duration: "June 2024 - June 2025",
  },
  {
    company: "UEXplus",
    position: "FrontEnd Developer - Intern",
    duration: "Nov 2024 - May 2025",
  },
];

const education = [
  {
    institution: "University Of Westminster",
    degree: "Bsc.Computer Science",
    duration: "2022-Present",
  },
  {
    institution: "S.Thomas' College",
    degree: "GCE Advanced Level",
    duration: "2022",
  },
];

const skills = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "ExpressJs" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind.css" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <IoLogoFirebase />, name: "Firebase" },
  { icon: <FaCss3 />, name: "CSS 3" },
];

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Crafting responsive, high-performance websites tailored to your business needs, ensuring scalability and seamless integration.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually engaging interfaces that prioritize user experience, enhancing usability and brand identity.",
  },
];

const projects = [
  {
    title: "GOAT CULT",
    description:
      "Full-stack streetwear e-commerce platform built using the MERN stack with Stripe/PayPal integration and admin dashboard.",
    stack: ["ReactJS", "MongoDB", "ExpressJs", "NodeJs", "Tailwind CSS"],
    image: "/assets/work/9.png",
    live: "https://www.goatcult.lk",
    github: "https://github.com/binukhewage/goatco",
  },
  {
    title: "ORAGAN",
    description:
      "Official website for ORAGAN, built with Next.js showcasing the company's mission, services, and products.",
    stack: ["NextJS", "Tailwind CSS"],
    image: "/assets/work/2.png",
    live: "https://www.oragan-idea.com",
    github: "https://github.com/binukhewage/ORAGAN",
  },
];

const Home = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center pb-12"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="container mx-auto px-6 flex-1 flex flex-col justify-center">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
            {/* Left Column - Photo */}
            <motion.div
              className="w-full xl:w-1/3 flex justify-center"
              variants={photoAnimation}
            >
              <motion.div
                className="relative rounded-full overflow-hidden border-4 border-accent/20 hover:border-accent transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src="/assets/work/me.png"
                  alt="Binuk Hewage"
                  width={500}
                  height={700}
                  className="object-cover xl:w-[390px] xl:h-[550px] xs:w-[350px] xs:h-[350px]"
                  priority
                />

                {/* Shade Overlay */}
                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-500 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              className="text-center xl:text-left xl:w-2/3"
              variants={textAnimation}
            >
              <motion.span
                className="text-xl text-accent font-mono mb-2 inline-block"
                variants={item}
              >
                Full Stack Developer
              </motion.span>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 mt-2"
                variants={item}
              >
                I'm <span className="text-accent">Binuk Hewage</span>
              </motion.h1>

              <motion.p
                className="max-w-[600px] mb-8 text-white/70 text-lg mx-auto xl:mx-0"
                variants={item}
              >
                Passionate Full Stack Developer with hands-on experience in web
                development and design.
              </motion.p>

              {/* Buttons and Stats Container */}
              <div className="flex flex-col gap-8">
                <motion.div
                  className="flex flex-col xl:flex-row items-center gap-6"
                  variants={item}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="uppercase items-center gap-2 border-accent text-accent hover:bg-accent/10"
                    >
                      <a download href="./CV.Final.pdf">
                        Download CV
                      </a>
                      <FiDownload className="text-xl" />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles="w-10 h-10 border border-accent/30 hover:border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>

                {/* Integrated Stats Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4"
                >
                  <Stats containerStyles="justify-center xl:justify-start gap-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm text-white/60 mb-1">Scroll down</span>
          <div className="w-4 h-8 border-2 border-accent/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-accent rounded-full mt-1"
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={slideUp} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-accent">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div className="lg:w-1/2" variants={slideUp}>
              <p className="text-white/80 mb-8 text-lg">{about.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {about.info.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    variants={item}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-accent font-mono">
                      {item.fieldName}:
                    </span>
                    <span className="text-white/90">{item.fieldValue}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:w-1/2" variants={slideUp}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-accent"
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-accent text-sm">{edu.duration}</span>
                    <h4 className="text-xl font-semibold mt-1">{edu.degree}</h4>
                    <p className="text-white/70">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={slideUp}>
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-accent">Skills</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Through my academic journey and hands-on experience, I've
              developed a strong skill set in web development and design.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-accent/10 hover:border-accent/30 border border-transparent transition-all duration-300"
                variants={scaleUp}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-4xl text-accent">{skill.icon}</div>
                <span className="text-white/90 capitalize">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-5 text-center"
            variants={slideUp}
          >
            My <span className="text-accent">Experience</span>
          </motion.h2>
          <motion.p className="text-white/70 max-w-2xl mx-auto mb-16 text-center">
            Building full-stack solutions with real-world impact, from sleek
            front-ends to robust back-ends.
          </motion.p>

          <motion.div className="relative" variants={fadeIn}>
            {/* Vertical line */}
            <div className="absolute left-1/2 md:left-4 h-full w-0.5 bg-accent/30 -translate-x-1/2 md:translate-x-0"></div>

            <div className="space-y-8 md:space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center gap-6 group"
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {/* Circle indicator */}
                  <motion.div
                    className="absolute left-1/2 md:left-4 top-6 md:top-1/2 w-4 h-4 rounded-full bg-accent border-4 border-[#0f0f0f] -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-10"
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Date */}
                  <motion.div
                    className="w-full md:w-32 text-center md:text-right text-accent/80 font-mono text-sm order-1 md:order-none"
                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                  >
                    {exp.duration}
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className="flex-1 bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-accent hover:border-accent/80 transition-all duration-300 group-hover:bg-[#222222] w-full order-3 md:order-none"
                    whileHover={{
                      x: index % 2 === 0 ? -5 : 5,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <p className="text-white/70">{exp.company}</p>
                  </motion.div>

                  {/* Connector line - only shown between items */}
                  {index < experience.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 md:left-4 top-full h-8 w-0.5 bg-accent/20 -translate-x-1/2 md:translate-x-0"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={slideUp}
          >
            My <span className="text-accent">Services</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-500 group"
                variants={scaleUp}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <motion.span
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent/10 transition-all duration-500"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {service.num}
                  </motion.span>
                  <motion.div
                    className="w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-500"
                    whileHover={{ rotate: 45 }}
                  >
                    <BsArrowDownRight className="text-accent text-2xl group-hover:rotate-45 transition-all duration-500" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={slideUp}
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500 group"
                variants={slideUp}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <motion.div
                  className="relative h-64 overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial="hidden"
                    whileInView="show"
                    variants={staggerContainer}
                  >
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="flex gap-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg font-medium transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo <FiExternalLink className="text-sm" />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg font-medium transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code <BsGithub className="text-sm" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="flex justify-center pt-8" variants={slideUp}>
            <Link href="/work">
              <motion.button
                className="p-2 rounded-md bg-accent/10 hover:bg-accent/20 text-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-[#0a0a0a] border-t border-white/10 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-8"
            variants={staggerContainer}
          >
            <motion.div className="text-center md:text-left" variants={slideUp}>
              <h3 className="text-2xl font-bold mb-2">Binuk Hewage</h3>
              <p className="text-white/70">Full Stack Developer</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:items-end"
              variants={slideUp}
            >
              <Social
                containerStyles="flex gap-6 mb-6"
                iconStyles="w-10 h-10 border border-white/20 hover:border-accent rounded-full flex justify-center items-center text-white hover:text-accent hover:bg-accent/10 transition-all duration-300"
              />
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
