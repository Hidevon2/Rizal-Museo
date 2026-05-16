"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-sm bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-widest uppercase mb-6">
            Pambansang Bayani ng Pilipinas
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-4"
        >
          <span className="text-foreground">Dr. Jose</span>{" "}
          <span className="text-gold">Rizal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Polymath, nobelista, makabayan, at ang pinaka-ginagalang na tao sa kasaysayan ng Pilipinas.
          Ang kanyang mga akda ay pumukaw sa hangarin ng isang bansa para sa kalayaan at pagkakakilanlan.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gold-dark/50 text-xs italic mb-10"
        >
          Hunyo 19, 1861 — Disyembre 30, 1896
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/about"
            className="px-6 py-3 bg-gold text-background font-semibold rounded-sm text-sm hover:bg-gold-light transition-colors border border-gold"
          >
            Tuklasin ang Kwento
          </a>
          <a
            href="/literary-works"
            className="px-6 py-3 border border-gold/30 text-muted-foreground rounded-sm text-sm hover:bg-accent hover:text-foreground transition-colors"
          >
            Basahin ang mga Akda
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground/30"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
