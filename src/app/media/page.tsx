"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MediaCard from "@/components/MediaCard";
import AnimatedSection from "@/components/AnimatedSection";
import { mediaItems, type MediaItem } from "@/data/media";

const typeFilters = [
  { key: "all", label: "Lahat" },
  { key: "movie", label: "Pelikula" },
  { key: "tv", label: "TV Shows" },
  { key: "theater", label: "Teatro" },
  { key: "comic", label: "Komiks" },
  { key: "social", label: "Social Media" },
  { key: "educational", label: "Edukasyonal" },
];

export default function MediaPage() {
  const [filter, setFilter] = useState("all");

  const filtered: MediaItem[] =
    filter === "all" ? mediaItems : mediaItems.filter((m) => m.type === filter);

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
              Sa Media
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-foreground mb-4">
              Rizal sa{" "}
              <span className="text-gold">Media</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Tuklasin kung paano ipinakita at kinatawan si Jose Rizal sa mga pelikula,
              telebisyon, teatro, komiks, at digital media.
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
            {filtered.map((item, i) => (
              <MediaCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 lg:py-20 relative bg-card/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            >
              Estilo ng Sangguniang Website
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold font-display text-foreground"
            >
              Mitolohiya at Representasyon sa Media
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm mt-3 max-w-2xl mx-auto"
            >
              Inspirasyon mula sa mundongmitolohiya.wordpress.com, tinutuklas ng seksyong ito
              kung paano umusbong ang imahe ni Rizal sa iba&apos;t ibang format ng media.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Tradisyonal na Media",
                items: ["Mga epikong biyograpikal na pelikula (Jose Rizal 1998)", "Seryeng dokumentaryo sa TV", "Mga dula at musikal", "Adaptasyon sa komiks"],
                icon: "🎬",
              },
              {
                title: "Makabagong Digital Media",
                items: ["Edukasyonal na nilalaman sa TikTok", "Infographic sa Instagram", "YouTube documentary channels", "Interactive na website ng museo"],
                icon: "📱",
              },
              {
                title: "Edukasyonal na Media",
                items: ["Integrasyon sa K-12 curriculum", "Interactive learning modules", "Field trips sa school museum", "Digital archives at libraries"],
                icon: "🎓",
              },
              {
                title: "Artistikong Representasyon",
                items: ["Fine art paintings at sculptures", "Musikal na komposisyon at kundiman", "Graphic novel at manga", "Street art at mural"],
                icon: "🎨",
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="vintage-card p-6 hover:border-gold/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-lg font-bold font-display text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-gold/60 mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
