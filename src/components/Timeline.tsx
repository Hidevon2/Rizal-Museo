"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { timelineEvents } from "@/data/timeline";

const categoryColors: Record<string, string> = {
  life: "border-crimson/50 bg-crimson/10 text-crimson",
  education: "border-blue-500/50 bg-blue-500/10 text-blue-400",
  travel: "border-green-500/50 bg-green-500/10 text-green-400",
  literary: "border-gold/50 bg-gold/10 text-gold",
  legacy: "border-purple-500/50 bg-purple-500/10 text-purple-400",
};

const categoryLabels: Record<string, string> = {
  life: "Buhay",
  education: "Edukasyon",
  travel: "Paglalakbay",
  literary: "Panitikan",
  legacy: "Pamana",
};

export default function Timeline() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? timelineEvents.filter((e) => e.category === activeFilter)
    : timelineEvents;

  return (
    <section id="timeline" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3"
          >
            Ang Paglalakbay
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-foreground"
          >
            Kronolohiyang Pangkasaysayan
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-1.5 rounded-sm text-xs font-medium transition-all border ${
              !activeFilter
                ? "bg-gold text-background border-gold"
                : "bg-accent text-muted-foreground border-border hover:bg-gold/10 hover:text-gold"
            }`}
          >
            Lahat
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(activeFilter === key ? null : key)}
              className={`px-4 py-1.5 rounded-sm text-xs font-medium transition-all border ${
                activeFilter === key
                  ? "bg-gold text-background border-gold"
                  : "bg-accent text-muted-foreground border-border hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-border to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {filtered.map((event, i) => (
              <TimelineItem key={event.year + event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} ml-12 md:ml-0`}>
        <div className={`vintage-card p-4 md:p-6 ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"}`}>
          <span className={`inline-block px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider ${categoryColors[event.category]} mb-2`}>
            {categoryLabels[event.category]}
          </span>
          <h3 className="text-lg md:text-xl font-bold font-display text-foreground mb-1">
            {event.title}
          </h3>
          <span className="text-gold text-sm font-medium">{event.year}</span>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-8">
        <div className="w-8 h-8 rounded-full bg-background border-2 border-gold/50 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
