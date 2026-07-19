"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-cyan-400"
        >
          Rida<span className="text-white">.</span>
        </a>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-cyan-400 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="hover:text-cyan-400 transition duration-300"
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>
        <button
  className="lg:hidden text-white text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

      </div>
 {menuOpen && (
  <div className="lg:hidden bg-black border-t border-cyan-500/20">

    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:text-cyan-400"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:text-cyan-400"
    >
      About
    </a>

    <a
      href="#skills"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:text-cyan-400"
    >
      Skills
    </a>

    <a
      href="#projects"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:text-cyan-400"
    >
      Projects
    </a>

    <a
      href="#education"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:text-cyan-400"
    >
      Education
    </a>

    <a
      href="#certificates"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:text-cyan-400"
    >
      Certificates
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:text-cyan-400"
    >
      Contact
    </a>

  </div>
)}

    </nav>
  );
}