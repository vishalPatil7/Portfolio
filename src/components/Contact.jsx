import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import memoji from "../assets/images/memoji.png";

export default function Contact() {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-muted text-sm mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.p>

        {/* Heading + Memoji */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#F2F8FC] max-w-lg leading-snug">
            Ready to develop your next big thing?
          </h2>
          {/* <motion.img
            src={memoji}
            alt="Developer memoji"
            className="w-20 h-20 drop-shadow-lg"
            loading="lazy"
            decoding="async"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          /> */}
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Mail */}
          <motion.div
            variants={fadeUp}
            className="bg-white/6 border border-white/[0.07] rounded-2xl p-8"
          >
            <p className="text-muted text-sm mb-1">E-mail</p>
            <p className="text-white font-semibold text-lg mb-6">
              Vishal Patil
            </p>
            <motion.a
              href="mailto:vishalypat@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Hit me up on Mail"
              className="inline-block bg-accent text-black rounded-full px-5 py-2.5 font-bold text-sm hover:brightness-110 transition-all"
            >
              Hit me up on Mail →
            </motion.a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            variants={fadeUp}
            className="bg-white/6 border border-white/[0.07] rounded-2xl p-8"
          >
            <p className="text-muted text-sm mb-1">LinkedIn</p>
            <p className="text-white font-semibold text-lg mb-6">
              in/vishal-patil
            </p>
            <motion.a
              href="https://www.linkedin.com/in/vishal-patil-2a2719101/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Visit my LinkedIn"
              className="inline-block border border-white/20 rounded-full px-5 py-2.5 text-sm text-white/90 hover:bg-white/5 transition-colors"
            >
              Visit my LinkedIn →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
