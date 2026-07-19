"use client";

import { motion } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Professional Learning
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Certificates
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            I continuously improve my technical and professional skills
            through industry-recognized certifications and practical
            learning experiences.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* CARD 1 */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20"
          >

            <div className="flex items-center justify-between">

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white">

                <FaCertificate size={28} />

              </div>

              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30">

                <div className="flex items-center gap-2 text-cyan-300">

                  <FaAward />

                  <span>2026</span>

                </div>

              </div>

            </div>

            <h3 className="text-3xl font-bold mt-8">
              AI Certification
            </h3>

            <div className="space-y-4 mt-6 text-gray-300">

              <div className="flex items-center gap-3">

                <FaBuilding className="text-cyan-400" />

                <span>NAVTTC</span>

              </div>

              <div className="flex items-center gap-3">

                <FaCalendarAlt className="text-cyan-400" />

                <span>Issued: 2026</span>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Successfully completed an Artificial Intelligence certification
              under NAVTTC, gaining knowledge of AI fundamentals, machine
              learning concepts, prompt engineering, problem-solving, and
              practical applications of modern AI technologies.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-4 py-2 rounded-full border border-cyan-400/20 bg-white/5 text-sm">
                Artificial Intelligence
              </span>

              <span className="px-4 py-2 rounded-full border border-cyan-400/20 bg-white/5 text-sm">
                Machine Learning
              </span>

              <span className="px-4 py-2 rounded-full border border-cyan-400/20 bg-white/5 text-sm">
                Prompt Engineering
              </span>

              <span className="px-4 py-2 rounded-full border border-cyan-400/20 bg-white/5 text-sm">
                Problem Solving
              </span>

            </div>

            <button
              className="mt-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white font-medium hover:scale-105 transition"
            >
              Verified Certificate
            </button>

          </motion.div>
                    {/* CARD 2 */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-purple-400 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20"
          >

            <div className="flex items-center justify-between">

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">

                <FaCertificate size={28} />

              </div>

              <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30">

                <div className="flex items-center gap-2 text-purple-300">

                  <FaAward />

                  <span>2026</span>

                </div>

              </div>

            </div>

            <h3 className="text-3xl font-bold mt-8">
              AI for Writing & Communication
            </h3>

            <div className="space-y-4 mt-6 text-gray-300">

              <div className="flex items-center gap-3">

                <FaBuilding className="text-purple-400" />

                <span>Google via Coursera</span>

              </div>

              <div className="flex items-center gap-3">

                <FaCalendarAlt className="text-purple-400" />

                <span>Issued: 2026</span>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Successfully completed Google's AI for Writing & Communication
              course through Coursera. Developed practical skills in AI-assisted
              writing, professional communication, content refinement,
              documentation, prompt engineering, and workplace collaboration
              using modern generative AI tools.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-4 py-2 rounded-full border border-purple-400/20 bg-white/5 text-sm">
                Generative AI
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-400/20 bg-white/5 text-sm">
                Professional Writing
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-400/20 bg-white/5 text-sm">
                Communication
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-400/20 bg-white/5 text-sm">
                Documentation
              </span>

            </div>

            <button
              className="mt-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white font-medium hover:scale-105 transition"
            >
              Verified Certificate
            </button>

          </motion.div>

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">

            <h3 className="text-2xl md:text-3xl font-bold">
              Learning Never Stops 🚀
            </h3>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
              I believe continuous learning is essential in the rapidly evolving
              world of technology. Every certification represents my commitment
              to improving my skills, embracing innovation, and staying updated
              with the latest advancements in Artificial Intelligence and modern
              software development.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}