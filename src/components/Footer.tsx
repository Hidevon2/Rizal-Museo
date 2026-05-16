"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☀️</span>
              <span className="text-xl font-bold text-gold font-display">
                Rizal<span className="text-muted-foreground">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-6">
              Isang digital na museo na nakatuon kay Dr. Jose Rizal, ang pambansang bayani ng Pilipinas.
              Tuklasin ang kanyang buhay, mga akdang pampanitikan, at pangmatagalang pamana sa pamamagitan
              ng interaktibong pagkukuwento at mayamang multimedia content.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-9 h-9 rounded-sm bg-accent flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold transition-colors border border-border"
                >
                  <span className="text-xs uppercase font-bold">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-4 border-b border-gold/20 pb-2">
              Mag-navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Tahanan", href: "/" },
                { label: "Tungkol kay Rizal", href: "/about" },
                { label: "Mga Akda", href: "/literary-works" },
                { label: "Sa Media", href: "/media" },
                { label: "Multimedia", href: "/multimedia" },
                { label: "Sanggunian", href: "/references" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-4 border-b border-gold/20 pb-2">
              Mga Highlight
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Noli Me Tangere", href: "/literary-works#noli-me-tangere" },
                { label: "El Filibusterismo", href: "/literary-works#el-filibusterismo" },
                { label: "Mi Ultimo Adios", href: "/literary-works#mi-ultimo-adios" },
                { label: "Kronolohiya", href: "/about#timeline" },
                { label: "Mga Sinabi", href: "/#quotes" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-xs">
            &copy; {new Date().getFullYear()} Rizal Digital Museum. Lahat ng karapatan ay nakalaan.
          </p>
          <p className="text-muted-foreground/30 text-[10px]">
            Ginawa gamit ang Next.js · Dinisenyo sa Pilipinas
          </p>
        </div>
      </div>
    </footer>
  );
}
