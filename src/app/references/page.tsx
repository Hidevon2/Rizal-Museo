"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { references, Reference } from "@/data/references";

const typeFilters = [
  { key: "all", label: "Lahat" },
  { key: "book", label: "Mga Aklat" },
  { key: "article", label: "Mga Artikulo" },
  { key: "website", label: "Mga Website" },
  { key: "documentary", label: "Mga Dokumentaryo" },
];

const typeIcons: Record<string, string> = {
  book: "📚",
  article: "📝",
  website: "🌐",
  documentary: "🎬",
};

const typeLabels: Record<string, string> = {
  book: "Aklat",
  article: "Artikulo",
  website: "Website",
  documentary: "Dokumentaryo",
};

export default function ReferencesPage() {
  const [filter, setFilter] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered: Reference[] =
    filter === "all" ? references : references.filter((r) => r.type === filter);

  const handleCopy = (citation: string, id: string) => {
    navigator.clipboard.writeText(citation);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-sm bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-widest uppercase mb-4">
              Sanggunian
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-foreground mb-4">
              Mga Pinagmulan at{" "}
              <span className="text-gold">Bibliograpiya</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Isang komprehensibong koleksyon ng mga aklat, artikulo, website, at dokumentaryo
              na ginamit sa paggawa ng digital na museong ito.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {typeFilters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-1.5 rounded-sm text-xs font-medium transition-all border ${
                  filter === key
                    ? "bg-gold text-background border-gold"
                    : "bg-accent text-muted-foreground border-border hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((ref, i) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="vintage-card p-5 hover:border-gold/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0 mt-0.5">{typeIcons[ref.type] || "📄"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-foreground font-semibold text-sm group-hover:text-gold transition-colors">
                          {ref.title}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-0.5">{ref.author}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2 py-0.5 rounded-sm bg-accent text-muted-foreground text-[10px] uppercase border border-border">
                          {typeLabels[ref.type] || ref.type}
                        </span>
                        <span className="text-muted-foreground text-xs">{ref.year}</span>
                      </div>
                    </div>
                    {ref.publisher && (
                      <p className="text-muted-foreground text-xs mt-1">{ref.publisher}</p>
                    )}
                    <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{ref.description}</p>

                    <div className="mt-3 flex items-center gap-3">
                      <code className="text-[10px] text-muted-foreground/60 italic line-clamp-1 flex-1">
                        {ref.citation}
                      </code>
                      <button
                        onClick={() => handleCopy(ref.citation, ref.id)}
                        className="px-3 py-1 rounded-sm bg-accent text-muted-foreground text-[10px] hover:bg-gold/20 hover:text-gold transition-all shrink-0 border border-border"
                      >
                        {copiedId === ref.id ? "Nakopya na!" : "Kopyahin"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 lg:py-20 relative bg-card/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Karagdagang Pagbasa
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto mb-6"
          >
            Para sa mga nagnanais ng mas malalim na pag-aaral, inirerekomenda naming bisitahin
            ang website ng National Historical Commission of the Philippines at tuklasin ang mga
            akda ng mga kilalang Rizal scholars tulad nina Ambeth Ocampo, Gregorio Zaide, at John
            Schumacher.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://nhcp.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-background font-semibold rounded-sm text-sm hover:bg-gold-light transition-colors border border-gold"
            >
              NHCP Website
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://www.gutenberg.org/ebooks/author/1832"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-muted-foreground rounded-sm text-sm hover:bg-accent hover:text-foreground transition-colors"
            >
              Mga Akda ni Rizal sa Project Gutenberg
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
