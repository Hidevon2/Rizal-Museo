"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quotes, Quote } from "@/data/quotes";

export default function QuoteSection() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quote: Quote = quotes[current];

  return (
    <section id="quotes" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          className="block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-8"
        >
          Mga Pananalita na Naghubog sa Bayan
        </motion.span>

        <div className="vintage-border rounded-sm p-8 md:p-12 relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <svg className="w-8 h-8 mx-auto mb-6 text-gold/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-foreground/90 leading-relaxed mb-6">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <div className="space-y-1">
                {quote.source && (
                  <cite className="text-gold text-sm not-italic block">
                    — {quote.source}
                  </cite>
                )}
                {quote.year && (
                  <span className="text-muted-foreground text-xs">{quote.year}</span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {quotes.slice(0, 8).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
