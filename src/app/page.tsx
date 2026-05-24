"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import AnimatedSection from "@/components/AnimatedSection";
import MembersSidebar from "@/components/MembersSidebar";
import { timelineEvents } from "@/data/timeline";
import { literaryWorks } from "@/data/literary-works";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <MembersSidebar />
      <HeroSection />

      <AnimatedSection className="py-20 lg:py-28 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              >
                Ang Pambansang Bayani
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6 leading-tight"
              >
                Sino si{" "}
                <span className="text-gold">Jose Rizal</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4"
              >
                Si Jose Protacio Rizal Mercado y Alonso Realonda ay isang Pilipinong polymath,
                nasyonalista, at pinakakilalang tagapagtaguyod ng mga reporma sa Pilipinas
                    sa panahon ng pananakop ng Espanya. Siya ay manunulat, makata, ophthalmologist,
                historyador, at pintor na ang dalawang nobela — <em>Noli Me Tangere</em> at{" "}
                <em>El Filibusterismo</em> — ay naglantad ng mga katiwalian ng pananakop ng Espanya.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8"
              >
                Ang kanyang pagbitay noong Disyembre 30, 1896, ay ginawa siyang martir ng
                Rebolusyong Pilipino. Ang kanyang buhay at mga akda ay patuloy na nagbibigay
                inspirasyon sa mga henerasyon ng mga Pilipino at mga tao sa buong mundo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-background font-semibold rounded-sm text-sm hover:bg-gold-light transition-colors border border-gold"
                >
                  Alamin Pa
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] vintage-border rounded-sm overflow-hidden"
            >
              <Image
                src="/images/rizal-portrait.jpg"
                alt="Dr. Jose Rizal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-gold/60 text-xs italic font-display">
                  &ldquo;Ang kabataan ay ang pag-asa ng bayan.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <QuoteSection />

      <AnimatedSection className="py-20 lg:py-28 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            >
              Mga Mahahalagang Sandali
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold font-display text-foreground"
            >
  Sulyap sa Kronolohiya
            </motion.h2>
          </div>

          <div className="space-y-0">
            {timelineEvents.slice(0, 6).map((event, i) => (
              <motion.div
                key={event.year + event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 py-4 group cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                  <div className="w-px flex-1 bg-gradient-to-b from-border to-transparent" />
                </div>
                <div className="pb-4">
                  <span className="text-gold text-xs font-semibold">{event.year}</span>
                  <h3 className="text-foreground text-sm font-semibold group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1 max-w-xl">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/about#timeline"
              className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors"
            >
              Tingnan ang Buong Kronolohiya
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-28 relative bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            >
                Mga Obra Maestra
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold font-display text-foreground"
            >
              Mga Akdang Pampanitikan
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {literaryWorks.slice(0, 3).map((work) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group vintage-card p-5 hover:border-gold/40 transition-all"
              >
                <span className="text-2xl mb-3 block">{work.icon}</span>
                <h3 className="text-foreground font-semibold font-display mb-1 group-hover:text-gold transition-colors">
                  {work.title}
                </h3>
                <p className="text-gold/60 text-xs mb-2 italic">{work.originalTitle} · {work.year}</p>
                <p className="text-muted-foreground text-xs line-clamp-2">{work.summary}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/literary-works"
              className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors"
            >
              Tuklasin Lahat ng Akda
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
