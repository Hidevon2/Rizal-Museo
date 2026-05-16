"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiteraryWork } from "@/data/literary-works";
import { getWorkTypeIcon } from "@/lib/utils";

interface LiteraryCardProps {
  work: LiteraryWork;
}

export default function LiteraryCard({ work }: LiteraryCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        onClick={() => setExpanded(true)}
        className="group cursor-pointer vintage-card p-5 hover:border-gold/40 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{getWorkTypeIcon(work.type)}</span>
          <span className="px-2.5 py-1 bg-accent rounded-sm text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border border-border">
            {work.type === "novel" ? "nobela" : work.type === "poem" ? "tula" : work.type === "essay" ? "sanaysay" : work.type}
          </span>
        </div>

        <h3 className="text-lg font-bold font-display text-foreground mb-1 group-hover:text-gold transition-colors">
          {work.title}
        </h3>
        <p className="text-gold/70 text-sm mb-3 italic">{work.originalTitle}</p>
        <p className="text-muted-foreground text-xs mb-1">{work.year}</p>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {work.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {work.themes.slice(0, 3).map((theme) => (
            <span
              key={theme}
              className="px-2 py-0.5 rounded-sm bg-accent text-muted-foreground text-[10px]"
            >
              {theme}
            </span>
          ))}
          {work.themes.length > 3 && (
            <span className="px-2 py-0.5 text-muted-foreground text-[10px]">
              +{work.themes.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-gold/60 text-xs group-hover:text-gold transition-colors">
          <span>Basahin pa</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto vintage-card p-6 md:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{getWorkTypeIcon(work.type)}</span>
                  <div>
                    <h2 className="text-2xl font-bold font-display text-foreground">{work.title}</h2>
                    <p className="text-gold/70 text-sm italic">{work.originalTitle} · {work.year}</p>
                  </div>
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="p-2 rounded-sm bg-accent hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors border border-border"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Buod</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{work.summary}</p>
                </div>

                <div>
                  <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Mga Tema</h3>
                  <div className="flex flex-wrap gap-2">
                    {work.themes.map((theme) => (
                      <span
                        key={theme}
                        className="px-3 py-1 rounded-sm bg-gold/10 border border-gold/20 text-gold text-xs"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Kahalagahang Pangkasaysayan</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{work.historicalSignificance}</p>
                </div>

                {work.details.characters && (
                  <div>
                    <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Mga Tauhan</h3>
                    <div className="flex flex-wrap gap-2">
                      {work.details.characters.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-sm bg-accent text-muted-foreground text-xs border border-border">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {work.details.setting && (
                  <div>
                    <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Tagpuan</h3>
                    <p className="text-muted-foreground text-sm">{work.details.setting}</p>
                  </div>
                )}

                {work.details.language && (
                  <div>
                    <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Wika</h3>
                    <p className="text-muted-foreground text-sm">{work.details.language}</p>
                  </div>
                )}

                {work.details.legacy && (
                  <div>
                    <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Pamana</h3>
                    <p className="text-muted-foreground text-sm">{work.details.legacy}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
