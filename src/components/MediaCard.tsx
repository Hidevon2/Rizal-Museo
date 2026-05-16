"use client";

import { motion } from "framer-motion";
import { MediaItem } from "@/data/media";

const typeIcons: Record<string, string> = {
  movie: "🎬",
  tv: "📺",
  theater: "🎭",
  comic: "📚",
  social: "📱",
  educational: "🎓",
};

const typeColors: Record<string, string> = {
  movie: "border-crimson/30 bg-crimson/10 text-crimson",
  tv: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  theater: "border-purple-500/30 bg-purple-500/10 text-purple-400",
  comic: "border-green-500/30 bg-green-500/10 text-green-400",
  social: "border-pink-500/30 bg-pink-500/10 text-pink-400",
  educational: "border-gold/30 bg-gold/10 text-gold",
};

const typeLabels: Record<string, string> = {
  movie: "Pelikula",
  tv: "TV",
  theater: "Teatro",
  comic: "Komiks",
  social: "Social Media",
  educational: "Edukasyonal",
};

interface MediaCardProps {
  item: MediaItem;
  index: number;
}

export default function MediaCard({ item, index }: MediaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group vintage-card overflow-hidden hover:border-gold/40 transition-all duration-300"
    >
      <div className="h-40 bg-gradient-to-br from-gold/5 to-gold/20 flex items-center justify-center relative overflow-hidden">
        <motion.span
          className="text-5xl z-10"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring" }}
        >
          {typeIcons[item.type] || "📄"}
        </motion.span>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 rounded-sm border text-[10px] font-semibold uppercase tracking-wider ${typeColors[item.type]}`}
        >
          {typeLabels[item.type] || item.type}
        </span>
        {item.year && (
          <span className="absolute bottom-3 left-3 text-muted-foreground text-xs">{item.year}</span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-gold transition-colors">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>

        <div className="space-y-1.5">
          {item.highlights.slice(0, 3).map((h, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-gold/60 mt-0.5 text-xs">✦</span>
              <span className="text-muted-foreground text-xs">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
