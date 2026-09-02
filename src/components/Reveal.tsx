"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  "aria-hidden"?: boolean | "true" | "false";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  "aria-hidden": ariaHidden,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} aria-hidden={ariaHidden}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      aria-hidden={ariaHidden}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
