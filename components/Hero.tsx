"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sky-400 text-lg mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Rida{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Javaid
            </span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold text-gray-300">
            <TypeAnimation
              sequence={[
                "Software Engineering Student",
                2000,
                "Frontend Developer",
                2000,
                "Java Programmer",
                2000,
                "Future Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            Passionate about building modern, beautiful, and responsive web
            applications. I enjoy creating clean user interfaces while
            continuously improving my programming and problem-solving skills.
          </p>

          {/* Resume Button */}
          <div className="mt-10">
            <a
              href="/Rida_Javaid_CV%20(3).pdf"
              download
              className="inline-flex items-center gap-3 px-7 py-3 rounded-xl border border-sky-500 text-white hover:bg-sky-500 hover:text-black transition-all duration-300 font-medium shadow-lg hover:shadow-sky-500/30"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex gap-6 mt-10 text-3xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/rida-javaid-7aa932332/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-400 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl"></div>

            <div className="relative w-80 h-80 rounded-full border border-sky-400/40 bg-white/5 backdrop-blur-xl flex items-center justify-center text-8xl shadow-2xl">
              👩‍💻
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}