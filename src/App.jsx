import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Marquee from "./components/Marquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Noise layer */}
      <div className="noisy" />
      <Navbar />

      <main>
        <div className="relative">
          <Hero />

          {/* subtle teal/blue gradient between Hero and Experience suitable for #090f16 background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw] h-[600px] md:h-[800px] bg-gradient-to-r from-blue-700/20 via-purple-600/30 to-blue-700/20 blur-[140px] opacity-68 rounded-full pointer-events-none -z-10" />
          <Experience />
        </div>
        <About />
      </main>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw] h-[600px] md:h-[800px] bg-gradient-to-r from-cyan-800 via-purple-600/30 to-pink-700/20 blur-[140px]  rounded-full pointer-events-none -z-10" />

        <main>
          <Projects />
        </main>

        {/* Marquee is full-bleed, outside max-w container */}
        <Marquee />

        <main>
          <Contact />
        </main>
      </div>

      <Footer />
    </motion.div>
  );
}
