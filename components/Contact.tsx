"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Let&apos;s Work Together
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
            Whether you have an internship opportunity, freelance project,
            collaboration idea, or simply want to connect, I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>

                  <a
                    href="mailto:ridajavaid.2704@gmail.com"
                    className="font-semibold hover:text-cyan-400 break-all"
                  >
                    ridajavaid.2704@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaPhoneAlt className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>

                  <a
                    href="tel:+923094503907"
                    className="font-semibold hover:text-cyan-400"
                  >
                    +92 309 4503907
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="font-semibold">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaLinkedin className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">LinkedIn</p>

                  <a
                    href="https://www.linkedin.com/in/rida-javaid-7aa932332/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-cyan-400"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none resize-none focus:border-cyan-400 transition"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50"
              >
                <FaPaperPlane />

                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-sm">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400">
            Open to{" "}
            <span className="text-cyan-400 font-semibold">
              Internships
            </span>
            ,{" "}
            <span className="text-cyan-400 font-semibold">
              Freelance
            </span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">
              Full-Time Opportunities
            </span>
            .
          </p>

          <p className="mt-4 text-sm text-gray-500">
            © 2026 Rida Javaid. Designed & Developed with Next.js,
            Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}