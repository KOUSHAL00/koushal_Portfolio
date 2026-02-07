"use client";

import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import ProjectGallery from "@/components/sections/ProjectGallery";
import Contact from "@/components/sections/Contact";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CursorFollower from "@/components/ui/CursorFollower";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <ReactLenis root>
          <CursorFollower />
          <ThemeToggle />
          <main className="bg-background text-foreground relative min-h-screen selection:bg-primary/30">
            <Navbar />
            <Hero />
            <About />
            <TechMarquee />
            <Experience />
            <ProjectGallery />
            <Contact />
            
            {/* Footer */}
            <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm">
              <p>© {new Date().getFullYear()} Bhavaraju Raj Koushal. All rights reserved.</p>
              {/* <p className="mt-2 text-xs">
                Built with Next.js, React Three Fiber, Framer Motion & Tailwind CSS
              </p> */}
            </footer>
          </main>
        </ReactLenis>
      )}
    </>
  );
}
