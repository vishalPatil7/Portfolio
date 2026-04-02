import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiMui,
  SiReactquery,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAxios,
} from "react-icons/si";
import { fadeUp } from "../lib/animations";

const frontendStack = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "ReactJS", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "React Query", icon: SiReactquery },
  { name: "Material UI", icon: SiMui },
  { name: "Axios", icon: SiAxios },
];

const backendStack = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

function TechGrid({ data }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-6 text-center">
      {data.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <Icon className="text-4xl text-white/70 group-hover:text-white transition duration-300" />

            <span className="text-sm text-muted group-hover:text-white transition">
              {tech.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="sm:py-4">
      <div className="max-w-5xl mx-auto ">
        {/* Title */}
        {/* <motion.div
          className="items-start sm:items-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl -ml-1 text-white">
            Tech Stack
          </h2>
        </motion.div> */}

        {/* Frontend */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-muted text-xm mb-6 px-6 ">Frontend</h3>
          <TechGrid data={frontendStack} />
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-muted text-xm mb-6 px-6 ">Backend</h3>
          <TechGrid data={backendStack} />
        </motion.div>
      </div>
    </section>
  );
}
