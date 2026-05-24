"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/bg-home.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

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
          <span className="inline-block px-5 py-2 rounded-sm bg-gold/10 border border-gold/20 text-gold text-sm font-medium tracking-widest uppercase mb-6">
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
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          Polymath, nobelista, makabayan, at ang pinaka-ginagalang na tao sa kasaysayan ng Pilipinas.
          Ang kanyang mga akda ay pumukaw sa hangarin ng isang bansa para sa kalayaan at pagkakakilanlan.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gold-dark/100 text-sm italic mb-16"
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


      </div>
    </section>
  );
}
