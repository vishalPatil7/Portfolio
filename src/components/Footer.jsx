import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-white/[0.07] py-12"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        {/* Left */}
        <div>
          <p className="font-syne font-bold text-white text-lg mb-1">
            (W)ish.dev
          </p>
          <a
            href="mailto:hello@en-zo.dev"
            className="text-muted text-sm hover:text-white transition-colors block mb-2"
            aria-label="Email hello@en-zo.dev"
          >
            hello@(W)ish.dev
          </a>
          <p className="text-muted/50 text-xs">
            © Vishal 2026. All rights reserved.
          </p>
        </div>

        {/* Right – same buttons as Navbar */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Contact me"
            className="border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 hover:bg-white/5 transition-colors"
          >
            Contact me
          </motion.button>

        </div>
      </div>
    </motion.footer>
  );
}
