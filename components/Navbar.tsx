"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-cyan-400"
        >
          Rida<span className="text-white">.</span>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

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

      </div>
    </nav>
  );
}