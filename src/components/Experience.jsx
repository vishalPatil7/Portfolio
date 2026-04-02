import { motion } from "framer-motion";
import { staggerContainer, slideLeft, fadeUp, fadeIn } from "../lib/animations";

const EXPERIENCES = [
  {
    role: "Senior Analyst (Associate Application Developer)",
    company: "Capgemini",
    points: [
      "Built and optimized large-scale enterprise React applications, improving load performance through lazy loading and code splitting.",
      "Developed modular, reusable components to enhance maintainability and reduce duplication.",
      "Collaborated with cross-functional teams to deliver accessible, high-quality UI aligned with design systems.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="items-start sm:items-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl -ml-1 text-white">
            Work Experience
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              variants={slideLeft}
              className="group py-6 px-4 -mx-4 rounded-lg"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-syne font-bold text-[#FFFFF0] text-lg sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="text-muted text-sm mt-1">{exp.company}</p>
                </div>

                <span className="text-muted text-sm mt-2 sm:mt-0">
                  Feb 2023 - Dec 2025
                </span>
              </div>

              {/* Divider */}
              <div className="border-b border-white/[0.05] mt-4" />

              {/* Summary */}
              <motion.ul
                variants={fadeIn}
                className="pt-4 space-y-2 text-sm sm:text-base text-white/80 leading-7 list-disc pl-5 [&>li:nth-child(n+2)]:mt-4"
              >
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </motion.ul>

              {/* Divider */}
              <div className="border-b border-white/[0.05] mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
