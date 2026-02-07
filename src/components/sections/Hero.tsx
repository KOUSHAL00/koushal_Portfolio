"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import GeometricShape from "@/components/3d/GeometricShape";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-20 px-4 md:px-6 overflow-hidden">
      <GeometricShape />

      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          {/* Live Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-foreground/80">Available for work</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
              Hi, I'm <span 
                style={{
                  background: 'linear-gradient(to right, #8b5cf6, #00f2ea)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >Koushal</span>
              <br />
              Full Stack Dev.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/60 max-w-lg leading-relaxed">
              Developing scalable web applications and seamless digital experiences with modern stack expertise.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <MagneticButton>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                View Work <ArrowRight className="w-5 h-5" />
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="/resume"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg hover:bg-primary/10 transition-colors"
              >
                View Resume <Download className="w-5 h-5" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats / Info */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-foreground/10"
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">9.0</div>
              <div className="text-xs md:text-sm text-foreground/40 uppercase tracking-wider">CGPA</div>
            </div>
             <div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">5+</div>
              <div className="text-xs md:text-sm text-foreground/40 uppercase tracking-wider">Projects</div>
            </div>
             <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-foreground">3+ months</div>
              <div className="text-xs md:text-sm text-foreground/40 uppercase tracking-wider">Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
