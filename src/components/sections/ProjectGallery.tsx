"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Browser-Based Code Editor (IDX)",
    description: "Developed a browser-based IDE using Monaco Editor, Xterm.js, Socket.IO, Docker, and React, enabling real-time terminal access and dynamic React project creation in isolated containers with full file-system and code editing capabilities.",
    tags: ["MERN", "Docker", "Socket.IO", "Monaco"],
    github: "https://github.com/KOUSHAL00/IDX",
  },
  {
    title: "Telehealthcare Platform",
    description: "Developed a MERN stack web app with role-based access for patients, doctors, and admins. Integrated an AI-driven symptom checker (Gemini API) to suggest possible conditions and recommend doctors with secure JWT authentication.",
    tags: ["MERN", "Gemini API", "JWT", "Healthcare"],
  },
  {
    title: "Real-Time Chat App",
    description: "Built a MERN-based chat application with JWT authentication, Redux for state management, and Socket.IO for real-time messaging. Enabled users to manage profiles, make friends, and engage in live chats.",
    tags: ["React", "Node.js", "Socket.IO", "Redux"],
    github: "https://github.com/KOUSHAL00/Dev_connect",
  },
  {
    title: "Netflix Clone Frontend",
    description: "Developed a Netflix clone frontend using React.js integrating the Google Gemini API for movie search and genre-based recommendations. Implemented Redux for efficient state management and smooth data flow.",
    tags: ["React", "TMDB API", "Gemini API", "Redux"],
    github:"https://github.com/KOUSHAL00/nm-react-ntflx"
  },
  {
    title: "CI/CD Pipeline on AWS",
    description: "Built a full CI/CD pipeline using Jenkins, SonarQube, and Nexus on AWS. Automated code build, testing, quality checks, and deployment to improve delivery efficiency as part of DevOps program.",
    tags: ["AWS", "Jenkins", "SonarQube", "DevOps"],
    github:"https://github.com/KOUSHAL00/SummerIntern_Devops"
  },
  {
    title: "Bankruptcy Prediction",
    description: "Machine learning project that forecasts the chances of a business going bankrupt by analyzing financial data. Provides early warnings so businesses can take preventive measures.",
    tags: ["Python", "ML", "Data Science"],
  },
  {
    title: "PowerFolio",
    description: "Developed a portfolio platform with user and admin dashboards secured by JWT. Integrated Google Gemini API for AI-assisted content generation. Used Cloudinary for optimized image storage and delivery.",
    tags: ["MERN", "JWT", "Cloudinary","Gemini API","Express","MongoDB"],
    github: "https://github.com/KOUSHAL00/PowerFolio",
    link: "https://powerfolio-frontend.vercel.app/"
  }
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
