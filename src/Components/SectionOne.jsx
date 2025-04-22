import React from "react";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

function SectionOne() {
  const skill = [
    { name: "HTML", icon: FaHtml5, link: "https://html.spec.whatwg.org/" },
    { name: "CSS", icon: FaCss3Alt, link: "https://www.w3.org/Style/CSS/" },
    { name: "JavaScript", icon: IoLogoJavascript, link: "https://www.javascript.com/" },
    { name: "React", icon: FaReact, link: "https://react.dev/" },
    { name: "Tailwind", icon: RiTailwindCssFill, link: "https://tailwindcss.com/" },
    { name: "Node.js", icon: FaNode, link: "https://nodejs.org/" },
  ];

  return (
    <motion.section
      className="px-4 py-10 bg-gradient-to-b from-white to-teal-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-700 mb-8">
        My Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {skill.map((item, id) => (
          <motion.div
            key={id}
            className="group w-[120px] sm:w-[140px] md:w-[180px] h-24 sm:h-28 md:h-32 bg-white shadow-md hover:shadow-xl rounded-2xl flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:bg-teal-100 border border-transparent hover:border-teal-400"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            viewport={{ once: true }}
          >
            <item.icon className="text-teal-600 group-hover:text-teal-800 w-8 h-8 sm:w-10 sm:h-10 mb-2 transition-colors duration-300" />
            <span className="text-sm sm:text-base font-medium text-teal-700 group-hover:text-teal-900">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default SectionOne;
