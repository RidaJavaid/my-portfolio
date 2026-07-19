"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl top-10 left-10"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-700/20 blur-3xl bottom-0 right-0"
      />

    </div>
  );
}