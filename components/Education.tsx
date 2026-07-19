"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const educationData = [
  {
    title: "BS Software Engineering",
    institute: "University of Central Punjab",
    location: "Lahore, Pakistan",
    duration: "2024 - 2028 (Expected)",
    extra: "4th Semester (Completed)",
    grade: "CGPA: 3.36",
    coursework: [
      "Programming Fundamentals",
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
    ],
    icon: FaGraduationCap,
  },

  {
    title: "FSc (Pre-Medical)",
    institute: "KIPS College",
    location: "Lahore, Pakistan",
    duration: "2021 - 2023",
    extra: "",
    grade: "Grade: A+",
    coursework: [],
    icon: FaUniversity,
  },

  {
    title: "Matriculation",
    institute: "The Educators Elite Campus",
    location: "Lahore, Pakistan",
    duration: "2019 - 2021",
    extra: "",
    grade: "Grade: A+",
    coursework: [],
    icon: FaSchool,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
          Academic Journey
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mt-4">
          Education
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          My academic journey has provided a strong foundation in software
          engineering, programming, problem solving and modern technologies.
        </p>
      </motion.div>

      <div className="space-y-10">

        {educationData.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition-all"
            >

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-2 text-gray-400">

                    <div className="flex items-center gap-3">

                      <FaUniversity />

                      {item.institute}

                    </div>

                    <div className="flex items-center gap-3">

                      <FaMapMarkerAlt />

                      {item.location}

                    </div>

                    <div className="flex items-center gap-3">

                      <FaCalendarAlt />

                      {item.duration}

                    </div>

                  </div>

                  {item.extra !== "" && (

                    <p className="mt-5">

                      <span className="font-semibold">
                        Current Status:
                      </span>{" "}

                      {item.extra}

                    </p>

                  )}

                  <p className="mt-3 text-cyan-400 font-semibold">
                    {item.grade}
                  </p>

                  {item.coursework.length > 0 && (

                    <>

                      <h4 className="mt-8 font-semibold text-xl">
                        Relevant Coursework
                      </h4>

                      <div className="flex flex-wrap gap-3 mt-5">

                        {item.coursework.map((course) => (

                          <span
                            key={course}
                            className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm"
                          >
                            {course}
                          </span>

                        ))}

                      </div>

                    </>

                  )}

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}