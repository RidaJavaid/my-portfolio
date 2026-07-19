"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="about"
  className="min-h-screen flex items-center justify-center px-6 py-24 text-white"
>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold mb-4">
            About Me
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
            Building software with passion and continuous learning.
          </h2>

          <p className="text-lg text-gray-300 leading-8 mb-6">
            Hi, I'm <span className="text-cyan-400 font-semibold">Rida Javaid</span>,
            a BS Software Engineering student at the
            <span className="text-white font-semibold">
              {" "}University of Central Punjab
            </span>
            , currently in my 4th semester.
          </p>

          <p className="text-lg text-gray-300 leading-8 mb-6">
            I enjoy building practical and user-friendly software solutions.
            I love learning new technologies and applying them to real-world
            projects, especially in Web Development and Artificial Intelligence.
          </p>

          <p className="text-lg text-gray-300 leading-8">
            My goal is to become a skilled Full Stack Developer and Software
            Engineer, creating modern applications that solve real-world
            problems while continuously improving my technical skills.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">4th</h3>
            <p className="mt-3 text-gray-300">Semester</p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">UCP</h3>
            <p className="mt-3 text-gray-300">Lahore</p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">AI</h3>
            <p className="mt-3 text-gray-300">Future Focus</p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">React</h3>
            <p className="mt-3 text-gray-300">Currently Learning</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}