"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const EXPERIENCE = [
    {
    type: "work",
    title: "Mern Stack Developer",
    organization: "GradXpert",
    location: "Remote",
    period: "DEC 2025 - Present",
    description: [
      "Developing a full-stack internship management platform with user onboarding, payments, and admin workflows",
      "Designed PostgreSQL database schemas and implemented Redux for efficient state management",
      "Built secure RESTful APIs using JWT authentication and role-based access control",
      "Containerized and deployed applications using Docker on AWS for consistent deployments"
    ],
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Summer Intern – AWS Cloud Computing & DevOps",
    organization: "APSSDC",
    location: "Remote",
    period: "May 2025 - July 2025",
    description: [
      "Worked on AWS services including EC2, S3, Lambda, and CloudFormation",
      "Built CI/CD pipelines using Jenkins, Docker, and Kubernetes",
      "Implemented DevOps tools and automation practices",
      "Gained hands-on experience with infrastructure as code"
    ],
    icon: Briefcase,
  },

];

const EDUCATION = [
  {
    title: "B.Tech in Computer Science",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
    period: "2022 - 2026",
    grade: "9.0 CGPA",
    icon: GraduationCap,
  },
  {
    title: "Pre University Course",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
    period: "2020 - 2022",
    grade: "9.8 CGPA",
    icon: GraduationCap,
  },
  {
    title: "Secondary Schooling",
    institution: "Sri Vidya Nidhi EM School, Peddapuram, Kakinada",
    period: "2014 - 2020",
    grade: "10.0 CGPA",
    icon: GraduationCap,
  }
];

const CERTIFICATIONS = [
  "Data Science with Python – NPTEL, 2024",
  "Object-Oriented System Development using UML, Java, and Patterns – NPTEL, 2025",
  "Deep Learning – NPTEL, 2025",
  "Analyzing Data with Python – edX, 2024",
  "Machine Learning APIs on Google Cloud – Pragyashala, 2024",
  "Large Language Models - NPTEL, 2025"
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative z-10 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Experience & Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />

          {/* Experience */}
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 md:mb-16"
            >
              <div className="md:flex md:items-center md:gap-8">
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-4 border-background z-10">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 ml-16 md:ml-0 md:text-right md:pr-12">
                  <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-foreground/10 transition-colors">
                    <div className="text-primary text-sm font-medium mb-2">{item.period}</div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
                    <div className="text-foreground/60 mb-4">
                      {item.organization} • {item.location}
                    </div>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 md:mb-16"
            >
              <div className="md:flex md:items-center md:gap-8">
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center border-4 border-background z-10">
                  <edu.icon className="w-6 h-6 text-white" />
                </div>

                <div className={`md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:ml-[50%] md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-foreground/10 transition-colors">
                    <div className="text-secondary text-sm font-medium mb-2">{edu.period}</div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{edu.title}</h3>
                    <div className="text-foreground/60 mb-2">
                      {edu.institution}
                    </div>
                    <div className="text-primary font-semibold">CGPA: {edu.grade}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2 text-foreground">
            <Award className="w-6 h-6 text-primary" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 text-center backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <div className="text-sm font-medium text-foreground">{cert}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
