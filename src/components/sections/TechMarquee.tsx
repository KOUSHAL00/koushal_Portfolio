"use client";

import { motion } from "framer-motion";

const TECHNOLOGIES = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "TypeScript",
  "Python",
  "Java",
  "Redux",
  "Socket.IO"
];

export default function TechMarquee() {
  return (
    <section className="py-20 bg-background relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-20 pointer-events-none" />
      
      <div className="flex overflow-x-auto scrollbar-visible">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex gap-16 pr-16 whitespace-nowrap"
        >
          {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-bold text-foreground/30 uppercase tracking-tighter hover:text-primary/70 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
