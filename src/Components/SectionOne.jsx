import React, { useEffect, useState } from "react";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: FaHtml5, link: "https://html.spec.whatwg.org/", percentage: 95 },
  { name: "CSS", icon: FaCss3Alt, link: "https://www.w3.org/Style/CSS/", percentage: 90 },
  { name: "JavaScript", icon: IoLogoJavascript, link: "https://www.javascript.com/", percentage: 80 },
  { name: "React", icon: FaReact, link: "https://react.dev/", percentage: 85 },
  { name: "Tailwind", icon: RiTailwindCssFill, link: "https://tailwindcss.com/", percentage: 92 },
  { name: "Node.js", icon: FaNode, link: "https://nodejs.org/", percentage: 75 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SectionOne() {
  return (
    <motion.section
      className="px-4 py-16 bg-gradient-to-b from-white to-teal-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-4">
          My Skills
        </h1>
        <p className="text-teal-600 mb-12 text-lg max-w-2xl mx-auto">
          Technologies I specialize in and continuously improve.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {skills.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group w-[130px] sm:w-[150px] md:w-[170px] h-[160px] sm:h-[180px] md:h-[200px] bg-white border border-gray-200 hover:border-teal-400 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center"
            >
              <item.icon className="text-teal-600 group-hover:text-teal-800 w-10 h-10 sm:w-12 sm:h-12 mb-2 transition-colors duration-300" />
              <span className="text-base font-semibold text-teal-700 group-hover:text-teal-900">
                {item.name}
              </span>

              <AnimatedPercentage percentage={item.percentage} />
              <ProgressBar percentage={item.percentage} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Animated percentage component
const AnimatedPercentage = ({ percentage }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = percentage;
    const duration = 2; // Duration in seconds
    const stepTime = Math.abs(Math.floor(duration * 1000 / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <span className="text-sm text-teal-500 mt-1 group-hover:text-teal-800 transition duration-300">
      {count}%
    </span>
  );
};

// Animated progress bar component
const ProgressBar = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = percentage;
    const duration = 2; // Duration in seconds
    const stepTime = Math.abs(Math.floor(duration * 1000 / end));
    let timer = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="w-full mt-2">
      <div className="h-2 bg-teal-100 rounded-full">
        <div
          className="h-full bg-teal-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SectionOne;
