import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";

const PROJECTS = [
  {
    year: "2025",
    title: "FoxMovies",
    description:
      "An AI-powered movie discovery platform built with React, featuring conversational search and dynamic browsing of movie data.",
    tech: ["AI", "React.js", "Express.js"],
    url: "https://fox-movies-brown.vercel.app/",
  },
  {
    year: "2023",
    title: "Ecommerce",
    description:
      "A full-stack e-commerce platform supporting authentication, product browsing, and cart management with a seamless user experience.",
    tech: ["React.js, Express.js"],
    url: "https://ecommerce-rho-eosin.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header row */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
            Personal projects
          </h2>
          <p className="text-muted text-sm">All projects I've worked on</p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PROJECTS.map((project) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group border border-white/[0.07] rounded-2xl p-7 bg-white/6 hover:border-white/[0.15] transition-colors block"
              aria-label={`Visit ${project.title}`}
            >
              {/* Year badge */}
              <span className="inline-block bg-white/[0.06] text-white/60 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {project.year}
              </span>

              {/* Role */}
              {/* <p className="text-muted text-sm mb-2">{project.role}</p> */}

              {/* Title */}
              <h3 className="font-syne font-bold text-white text-xl mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-muted text-xs mr-1">Tech Stack</span>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/[0.06] text-white/70 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <span className="text-accent text-sm font-semibold group-hover:underline transition-all">
                Visit Project →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
