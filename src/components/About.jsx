import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../lib/animations";
import TechStack from "./TechStack";

const SENTENCE =
  "I'm a Full-stack developer focused on scalability, performance and smooth user experiences.";

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export default function About() {
  const words = SENTENCE.split(" ");

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-muted text-sm mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About me
        </motion.p>

        {/* Animated sentence */}
        <motion.h2
          className="font-syne text-3xl sm:text-4xl font-bold text-[#F2F8FC] leading-snug max-w-3xl flex flex-wrap gap-x-2.5 gap-y-1"
          variants={wordContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Skills intro */}
        <motion.p
          className="text-muted mt-10 mb-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Here is a little bit about languages and technologies, that I am
          currently using.
        </motion.p>

        <TechStack />
        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <motion.a
            href="https://github.com/vishalPatil7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Check out my GitHub"
            className="inline-block border border-white/20 rounded-full px-5 py-2.5 text-sm text-white/90 hover:bg-white/5 transition-colors"
          >
            Check out my GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
