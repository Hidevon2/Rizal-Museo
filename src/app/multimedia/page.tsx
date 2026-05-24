"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import MediaGallery from "@/components/MediaGallery";
import { audioTracks, galleryItems, videoDocumentaries } from "@/data/multimedia";

export default function MultimediaPage() {
  const [activeTab, setActiveTab] = useState<"audio" | "gallery" | "video">("video");
  const [expandedAudio, setExpandedAudio] = useState<string | null>(null);

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
              Multimedia
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-foreground mb-4">
              <span className="text-gold">Multimedia</span> na Karanasan
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Lumubog sa mundo ni Jose Rizal sa pamamagitan ng audio narrations,
              historical galleries, at video documentaries.
            </p>
          </motion.div>

          <div className="flex justify-center gap-2 mb-12">
            {[
              { key: "video", label: "Video Documentaries" },
              { key: "audio", label: "Audio Narrations" },
              { key: "gallery", label: "Image Gallery" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`px-5 py-2 rounded-sm text-xs font-medium transition-all border ${
                  activeTab === tab.key
                    ? "bg-gold text-background border-gold"
                    : "bg-accent text-muted-foreground border-border hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "video" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {videoDocumentaries.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="vintage-card overflow-hidden hover:border-gold/40 transition-all group cursor-pointer"
                  onClick={() => window.open(video.embedUrl, "_blank", "noopener,noreferrer")}
                >
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gold/10 to-gold/30">
                    {video.thumbnailUrl && (
                      <Image
                        src={video.thumbnailUrl}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-sm bg-gold/80 flex items-center justify-center shadow-lg"
                      >
                        <svg className="w-6 h-6 text-background ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </motion.div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-background/60 backdrop-blur-sm px-2 py-0.5 text-muted-foreground text-[10px] rounded-sm">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{video.description}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-gold text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Panoorin sa YouTube <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "audio" && (
            <div className="max-w-3xl mx-auto space-y-3">
              {audioTracks.map((track, i) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`vintage-card p-4 hover:border-gold/40 transition-all cursor-pointer ${
                    expandedAudio === track.id ? "border-gold/40 bg-gold/5" : ""
                  }`}
                  onClick={() => setExpandedAudio(expandedAudio === track.id ? null : track.id)}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-sm bg-gold/20 flex items-center justify-center shrink-0"
                    >
                      <svg className="w-4 h-4 text-gold ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground truncate">{track.title}</h3>
                      <p className="text-muted-foreground text-xs truncate">{track.description}</p>
                    </div>
                    <span className="text-muted-foreground text-xs shrink-0">{track.duration}</span>
                  </div>

                  {expandedAudio === track.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <div className="w-full h-10 rounded-sm bg-accent flex items-center px-4 gap-3 border border-border">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 20 }).map((_, j) => (
                            <motion.div
                              key={j}
                              animate={{ height: [4, 16, 8, 20, 10] }}
                              transition={{ repeat: Infinity, duration: 1 + Math.random(), delay: j * 0.05 }}
                              className="w-0.5 bg-gold/50 rounded-full"
                              style={{ height: 4 + Math.random() * 16 }}
                            />
                          ))}
                        </div>
                        <span className="text-muted-foreground text-xs ml-auto">{track.duration}</span>
                      </div>
                      {track.narrator && (
                        <p className="text-muted-foreground text-[10px] mt-2">{track.narrator}</p>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "gallery" && (
            <MediaGallery items={galleryItems} />
          )}
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
            Maranasan ang Kasaysayan
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Ang mga multimedia resource na ito ay nagbibigay-buhay sa kwento ni Rizal, na nagbibigay-daan sa iyo na
            marinig ang kanyang mga salita, makita ang mga lugar na kanyang tinitirahan at pinagtatrabahuhan, at
            manood ng mga dokumentaryo na tumutuklas sa maraming aspeto ng kanyang kahanga-hangang buhay at
            pangmatagalang pamana.
          </motion.p>
        </div>
      </AnimatedSection>
    </div>
  );
}
