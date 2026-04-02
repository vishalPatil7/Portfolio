import { motion } from "framer-motion";

const TEXT = "developer · javascript · frontend · backend · ";
const REPEATED = Array(10).fill(TEXT).join("");

export default function Marquee() {
  return (
    <section className="py-7 eoverflow-hidden" aria-hidden="true">
      <div className="rotate-[-1.5deg]">
        <div className="bg-accent/10 border-y border-white/[0.05] py-4">
          <motion.div
            className="whitespace-nowrap font-syne font-bold text-2xl sm:text-3xl text-white/20 select-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {REPEATED}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
