"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "letter" | "word";
}

export default function AnimatedText({ 
  text, 
  className = "", 
  delay = 0,
  type = "letter" 
}: AnimatedTextProps) {
  const items = type === "letter" 
    ? text.split("") 
    : text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: type === "letter" ? 0.03 : 0.12, 
        delayChildren: delay 
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", whiteSpace: type === "word" ? "normal" : "pre" }}
        >
          {item}
          {type === "word" && index !== items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Gradient animated text component
export function GradientText({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string; 
}) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient ${className}`}>
      {text}
    </span>
  );
}
