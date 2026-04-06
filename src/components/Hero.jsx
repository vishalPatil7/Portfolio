import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import memoji from "../assets/images/memoji.png";
import { useEffect, useState } from "react";
import BackgroundLines from "../ui/BackgroundLines";

export default function Hero() {
  const words = ["An Amazing", "A Fabulous", "A Passionate", "A Creative"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function handleContactClick() {
    document.getElementById("contact").scrollIntoView({ behaviour: "smooth" });
  }

  return (
    <section className="md:min-h-screen pt-32 sm:pb-20 relative overflow-hidden">
      <BackgroundLines />
      <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left – Text */}
        <motion.div
          key="hero-animation"
          className="flex-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Small tag */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-[3px] h-5 bg-accent rounded-full inline-block" />
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm uppercase tracking-widest text-muted"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-[#FDF5E6]"
          >
            Javascript
            <br />
            Developer
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-muted max-w-md mt-6 text-lg leading-relaxed"
          >
            Hi 👋. My name is Vishal, and I am a Javascript developer living and
            working in Bangalore, India.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Ship stuff with me"
              className="bg-accent text-black font-bold rounded-full px-6 py-3 text-sm mt-8 hover:brightness-110 transition-all"
              onClick={handleContactClick}
            >
              Ship stuff with me →
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right – Memoji */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <motion.img
            src={memoji}
            alt="Developer memoji avatar waving"
            className="w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-2xl"
            loading="lazy"
            decoding="async"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
