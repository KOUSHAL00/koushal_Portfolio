"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10 print:hidden">
        <div className="container mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-foreground/10 text-foreground border border-foreground/20 px-4 py-2 rounded-full font-medium hover:bg-foreground/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              Print to PDF
            </button>
            <a
              href="/resume.pdf"
              download="B_Raj_Koushal_Resume.pdf"
              className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="container mx-auto max-w-4xl px-6 py-24 print:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 md:p-12 print:border-0 print:p-0"
        >
          {/* Header */}
          <div className="text-center mb-8 pb-8 border-b border-foreground/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">B. Raj Koushal</h1>
            <p className="text-xl text-foreground/60 mb-4">Full Stack Developer</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
              <a href="mailto:brkoushal17@gmail.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="w-4 h-4" />
                brkoushal17@gmail.com
              </a>
              <a href="tel:+919652253331" className="flex items-center gap-2 hover:text-primary">
                <Phone className="w-4 h-4" />
                +91 9652253331
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kakinada, India
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="https://github.com/KOUSHAL00" target="_blank" className="flex items-center gap-2 text-sm hover:text-primary">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/b-raj-koushal-3b5b6127b/" target="_blank" className="flex items-center gap-2 text-sm hover:text-primary">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h2>
            <p className="text-foreground/80 leading-relaxed">
              Computer Science undergraduate with a passion for building scalable web applications. Specialized in the MERN stack with hands-on experience in modern development tools, cloud platforms, and real-time systems. Proven ability to develop full-stack applications with focus on user experience and performance optimization.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">B.Tech in Computer Science</h3>
                    <p className="text-foreground/60">Rajiv Gandhi University of Knowledge Technologies, Srikakulam</p>
                  </div>
                  <span className="text-sm text-foreground/60">2022 - 2026</span>
                </div>
                <p className="text-foreground/80">CGPA: 8.9/10</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Pre University Course</h3>
                    <p className="text-foreground/60">Rajiv Gandhi University of Knowledge Technologies, Srikakulam</p>
                  </div>
                  <span className="text-sm text-foreground/60">2020 - 2022</span>
                </div>
                <p className="text-foreground/80">CGPA: 9.8/10</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">MERN Stack Developer</h3>
                    <p className="text-foreground/60">GradXpert • Remote</p>
                  </div>
                  <span className="text-sm text-foreground/60">Dec 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Developing a full-stack internship management platform with user onboarding, payments, and admin workflows</li>
                  <li>Designed PostgreSQL database schemas and implemented Redux for efficient state management</li>
                  <li>Built secure RESTful APIs using JWT authentication and role-based access control</li>
                  <li>Containerized and deployed applications using Docker on AWS for consistent deployments</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Summer Intern – AWS Cloud Computing & DevOps</h3>
                    <p className="text-foreground/60">APSSDC • Remote</p>
                  </div>
                  <span className="text-sm text-foreground/60">May 2025 - July 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Worked on AWS services including EC2, S3, Lambda, and CloudFormation</li>
                  <li>Built CI/CD pipelines using Jenkins, Docker, and Kubernetes</li>
                  <li>Implemented DevOps tools and automation practices</li>
                  <li>Gained hands-on experience with infrastructure as code</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Frontend Development</h3>
                <p className="text-foreground/80">React, Next.js, TypeScript, Tailwind CSS, Redux, Framer Motion</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Backend Development</h3>
                <p className="text-foreground/80">Node.js, Express, MongoDB, PostgreSQL, JWT, RESTful APIs</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">DevOps & Cloud</h3>
                <p className="text-foreground/80">AWS, Docker, Kubernetes, Jenkins, CI/CD, Git</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Programming Languages</h3>
                <p className="text-foreground/80">JavaScript, TypeScript, Python, Java</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Key Projects</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-semibold">Browser-Based Code Editor (IDX)</h3>
                  <div className="flex gap-2 print:hidden">
                    <a 
                      href="https://github.com/KOUSHAL00/idx" 
                      target="_blank"
                      className="text-xs text-primary hover:underline"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-2">MERN Stack, Docker, Socket.IO, Monaco Editor</p>
                <p className="text-foreground/80">Built a collaborative code editor with real-time collaboration, syntax highlighting, and containerized code execution.</p>
              </div>
              <div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-semibold">Telehealthcare Platform</h3>
                  <div className="flex gap-2 print:hidden">
                    <a 
                      href="https://github.com/KOUSHAL00/telehealthcare" 
                      target="_blank"
                      className="text-xs text-primary hover:underline"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-2">MERN Stack, Gemini API, JWT</p>
                <p className="text-foreground/80">Developed a healthcare platform enabling virtual consultations with AI-powered symptom analysis and secure authentication.</p>
              </div>
              <div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-semibold">PowerFolio</h3>
                  <div className="flex gap-2 print:hidden">
                    <a 
                      href="https://github.com/KOUSHAL00/PowerFolio" 
                      target="_blank"
                      className="text-xs text-primary hover:underline"
                    >
                      GitHub →
                    </a>
                    <a 
                      href="https://powerfolio-frontend.vercel.app/" 
                      target="_blank"
                      className="text-xs text-secondary hover:underline"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-2">MERN Stack, Cloudinary, Gemini API</p>
                <p className="text-foreground/80">Created a portfolio platform with user and admin dashboards, AI-assisted content generation, and optimized image delivery.</p>
              </div>
              <div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-semibold">Real-Time Chat Application</h3>
                  <div className="flex gap-2 print:hidden">
                    <a 
                      href="https://github.com/KOUSHAL00/chat-app" 
                      target="_blank"
                      className="text-xs text-primary hover:underline"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-2">MERN Stack, Socket.IO, Redis</p>
                <p className="text-foreground/80">Built a real-time messaging platform with WebSocket connections, message persistence, and online status indicators.</p>
              </div>
              <div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-semibold">CI/CD Pipeline on AWS</h3>
                  <div className="flex gap-2 print:hidden">
                    <a 
                      href="https://github.com/KOUSHAL00/aws-cicd" 
                      target="_blank"
                      className="text-xs text-primary hover:underline"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-2">AWS, Jenkins, Docker, Kubernetes</p>
                <p className="text-foreground/80">Implemented automated deployment pipeline with Jenkins, Docker containerization, and Kubernetes orchestration on AWS infrastructure.</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Certifications</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground/80">
              <li>• Data Science with Python – NPTEL, 2024</li>
              <li>• Object-Oriented System Development – NPTEL, 2025</li>
              <li>• Deep Learning – NPTEL, 2025</li>
              <li>• Analyzing Data with Python – edX, 2024</li>
              <li>• Machine Learning APIs on Google Cloud – Pragyashala, 2024</li>
              <li>• Large Language Models – NPTEL, 2025</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
