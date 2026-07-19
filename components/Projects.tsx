"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Health Share Bridge System",
    description:
      "A Software Requirement Specification (SRS) project for a medicine donation platform connecting donors, NGOs, pharmacies, and recipients through a secure and user-friendly workflow.",
    tech: ["SRS", "UML", "Use Case", "Sequence Diagram"],
  },

  {
    title: "Library Management System",
    description:
      "A relational database project developed using SQL. Designed and implemented DDL and DML operations including CREATE, ALTER, INSERT, UPDATE, DELETE, and SELECT queries to efficiently manage books, members, borrowing records, and returns.",
    tech: ["SQL", "DDL", "DML", "MySQL"],
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A modern responsive portfolio website built using Next.js, Tailwind CSS, Framer Motion, and TypeScript to showcase projects, technical skills, and achievements with smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },

  {
    title: "Smart Attendance Management System",
    description:
      "A desktop-based attendance management application developed to manage student attendance records, generate reports, and simplify academic record management using Java and MySQL.",
    tech: ["Java", "MySQL", "JDBC", "OOP"],
  },

  {
    title: "AI Resume Analyzer",
    description:
      "A Python-based application that analyzes resumes by identifying important skills and keywords, helping users improve their resumes with simple AI-powered suggestions through an easy-to-use interface.",
    tech: ["Python", "AI", "Automation", "Problem Solving"],
  },

  {
    title: "Event Management Portal",
    description:
      "A responsive web application developed to manage university events, registrations, schedules, and announcements through a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] mb-3">
            My Work
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            These projects showcase my learning journey in software engineering,
            web development, database systems, and problem-solving through
            academic and personal work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-6">
                💻
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}