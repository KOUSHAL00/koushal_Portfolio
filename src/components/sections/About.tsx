"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Sparkles } from "lucide-react";
import ParallaxContainer from "@/components/animations/ParallaxContainer";

const SKILLS = [
  { name: "Frontend", level: 90, icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "Backend", level: 85, icon: Database, color: "from-purple-500 to-pink-500" },
  { name: "Cloud & DevOps", level: 50, icon: Cloud, color: "from-green-500 to-teal-500" },
  { name: "Full Stack", level: 88, icon: Sparkles, color: "from-orange-500 to-red-500" },
];

const TECHNOLOGIES = [
  "JavaScript", "TypeScript", "Python", "Java", "C++",
  "React", "Next.js", "Redux", "Tailwind CSS",
  "Node.js", "Express", "Socket.IO",
  "MongoDB", "PostgreSQL", "MySQL",
  "Docker", "AWS", "Git"
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Computer Science undergraduate with a passion for building scalable web applications. 
            I specialize in the MERN stack and have hands-on experience with modern development tools, 
            cloud platforms, and real-time systems.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "CGPA", value: "9.0/10" },
            { label: "Production Ready Projects", value: "5+" },
            { label: "Experience", value: "3+ months" },
            { label: "Certifications", value: "4+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-foreground/10 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/40 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <ParallaxContainer offset={30}>
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-foreground/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">{skill.name}</h4>
                    <div className="text-sm text-foreground/40">{skill.level}%</div>
                  </div>
                </div>
                <div className="relative h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </ParallaxContainer>

        {/* Tech Stack Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {TECHNOLOGIES.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-medium text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
