"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React (Learning)", "Next.js (Learning)", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Git", "GitHub", "MySQL", "MS Office"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] mb-3">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            These are the programming languages, frameworks and tools
            that I have learned and continue to improve through academic
            projects and self-learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition"
                  >
                    {skill}
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