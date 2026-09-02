"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const lobes = [
  { key: "main", delay: 0.08 },
  { key: "side", delay: 0.16 },
  { key: "top", delay: 0.22 },
  { key: "low", delay: 0.28 },
] as const;

export default function HeroVisual() {
  const reduced = useReducedMotion();
  const animate = !reduced;

  return (
    <div className="hero-visual">
      <motion.div
        className="hero-visual__halo"
        initial={animate ? { opacity: 0, scale: 0.82 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
      />

      <div className="hero-visual__cluster" aria-hidden="true">
        {lobes.map(({ key, delay }) => (
          <motion.span
            key={key}
            className={`hero-visual__lobe hero-visual__lobe--${key}`}
            initial={animate ? { opacity: 0, scale: 0.82 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay, ease }}
          />
        ))}
      </div>

      <span className="hero-visual__bubble hero-visual__bubble--a" aria-hidden="true" />
      <span className="hero-visual__bubble hero-visual__bubble--b" aria-hidden="true" />
      <span className="hero-visual__bubble hero-visual__bubble--c" aria-hidden="true" />
    </div>
  );
}
