"use client";

import { motion } from "framer-motion";
import { GalleryItem } from "@/data/multimedia";

interface MediaGalleryProps {
  items: GalleryItem[];
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="group cursor-pointer vintage-card overflow-hidden"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-gold/10 to-gold/30 flex items-center justify-center relative">
            <motion.span
              className="text-4xl z-10"
              whileHover={{ scale: 1.1 }}
            >
              🖼️
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            {item.year && (
              <span className="absolute bottom-2 left-2 text-muted-foreground text-[10px]">{item.year}</span>
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
  );
}
