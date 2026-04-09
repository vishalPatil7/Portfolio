import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "../lib/animations";
import { GoArrowUpRight } from "react-icons/go";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleContactClick() {
    document.getElementById("contact").scrollIntoView({ behaviour: "smooth" });
  }

  function handleLogoClick() {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300
             after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:transition-all after:duration-300
             ${
               scrolled
                 ? "after:bg-white/10 bg-[#0a0a0a]/50"
                 : "after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent bg-transparent"
             }
             after:content-['']`}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
    >
      <div
        className={`max-w-5xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        {/* Logo */}
        <span
          onClick={handleLogoClick}
          className="font-syne font-bold text-[#FFFFF0] cursor-pointer text-lg tracking-tight"
        >
          (W)ish.dev
        </span>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Contact me"
            className="border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 hover:bg-white/5 transition-colors"
            onClick={handleContactClick}
          >
            Contact me
          </motion.button>
          <a
            href="https://drive.google.com/file/d/1InBvoQ231mHop_lbKm3iT0hYTpSdsWMc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="View resume"
              className="flex items-center gap-0.5 bg-[#FFFFF0] text-black rounded-full px-4 py-1.5 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Resume
              <GoArrowUpRight />
            </motion.button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
