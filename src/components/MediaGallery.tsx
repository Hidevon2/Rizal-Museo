"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GalleryItem } from "@/data/multimedia";

interface MediaGalleryProps {
  items: GalleryItem[];
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => setSelected(item)}
            className="group cursor-pointer vintage-card overflow-hidden hover:border-gold/40 transition-all"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-accent">
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-gold/10 to-gold/30">
                  🖼️
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.year && (
                <span className="absolute bottom-2 left-2 bg-background/60 backdrop-blur-sm px-2 py-0.5 text-muted-foreground text-[10px] rounded-sm">
                  {item.year}
                </span>
              )}
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-gold transition-colors line-clamp-1">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto vintage-card p-0"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground transition-colors rounded-sm"
              >
                ✕
              </button>

              <div className="relative aspect-[16/10] bg-accent">
                {selected.imageUrl ? (
                  <Image
                    src={selected.imageUrl}
                    alt={selected.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-gold/10 to-gold/30">
                    🖼️
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-gold tracking-widest uppercase">Gallery</span>
                  {selected.year && (
                    <span className="text-[10px] text-muted-foreground">{selected.year}</span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-3">
                  {selected.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
