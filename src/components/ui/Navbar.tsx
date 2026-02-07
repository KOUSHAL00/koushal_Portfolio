"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={clsx(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg rounded-full px-6 py-3 transition-all duration-300",
        scrolled
          ? "bg-foreground/10 backdrop-blur-md border border-foreground/20 shadow-lg"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="flex items-center justify-between text-sm font-medium text-foreground/90">
        <Link href="#home" className="hover:text-primary transition-colors">
          Home
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <Link
          href="https://github.com/KOUSHAL00"
          target="_blank"
          className="hidden sm:block text-xs bg-foreground/10 px-3 py-1 rounded-full hover:bg-foreground/20 transition-all"
        >
          GitHub
        </Link>
      </div>
    </motion.nav>
  );
}
