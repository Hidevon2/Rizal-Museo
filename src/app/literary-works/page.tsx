"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LiteraryCard from "@/components/LiteraryCard";
import AnimatedSection from "@/components/AnimatedSection";
import { literaryWorks } from "@/data/literary-works";

const typeFilters = [
  { key: "all", label: "Lahat" },
  { key: "novel", label: "Nobela" },
  { key: "poem", label: "Tula" },
  { key: "essay", label: "Sanaysay" },
  { key: "play", label: "Dula" },
  { key: "article", label: "Artikulo" },
];

export default function LiteraryWorksPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? literaryWorks : literaryWorks.filter((w) => w.type === filter);

  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-sm bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-widest uppercase mb-4">
              Mga Akdang Pampanitikan
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-foreground mb-4">
              Ang mga Sinulat ni{" "}
              <span className="text-gold">Rizal</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Tuklasin ang mga nobela, tula, sanaysay, at artikulo na humubog sa isang bansa at
              nagbigay inspirasyon sa isang rebolusyon.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((work) => (
              <LiteraryCard key={work.id} work={work} />
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
            Ang Kapangyarihan ng Panulat
          </motion.span>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display text-foreground/80 italic leading-relaxed"
          >
            &ldquo;Hindi ako nagsusulat para sa kasalukuyang henerasyon. Nagsusulat ako para sa ibang
            panahon. Kung ako&rsquo;y mababasa ngayon, susunugin nila ang aking mga aklat.&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gold text-sm mt-4"
          >
            — Jose Rizal, Noli Me Tangere
          </motion.p>
        </div>
      </AnimatedSection>
    </div>
  );
}
