"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Member {
  name: string;
  role: string;
  natutunan: string;
}

const members: Member[] = [
  { name: "Terrence sumagang", role: "Mananaliksik ng Kasaysayan", natutunan: "Natutunan ko sa Noli na edukasyon ang susi para mamulat tayo sa mga katiwalian sa lipunan at hindi basta sumunod nang bulag. Ipinapakita rin nito na ang tunay na pagmamahal sa bayan ay nangangailangan ng lakas ng loob na ipaglaban ang hustisya imbis na manahimik lang." },
  { name: "Klaudin Inoc", role: "Tagapangasiwa ng Multimedia", natutunan: "Natutunan ko na ang paggamit ng multimedia ay makapagbibigay-buhay sa kasaysayan ni Rizal para sa makabagong henerasyon." },
  { name: "Devon T. Descipulo", role: "Disenyador ng Web", natutunan: "Natutunan ko maging matatag sa aking sarili." },
  { name: " Elde Vasquez", role: "Tagapag-ayos ng Datos", natutunan: "Natutunan ko na ang maayos na pag-oorganisa ng impormasyon tungkol kay Rizal ay makatutulong sa mas malalim na pag-unawa ng kanyang buhay at kontribusyon." },
  { name: "Renante Arante", role: "Dalubhasa sa Disenyo", natutunan: "Pagiging mabuting tao sa kapwa." },
];

export default function MembersSidebar() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-30"
    >
      <div className="vintage-card p-3 ml-4 border-gold/25 shadow-vintage w-64">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-3 text-center border-b border-gold/50 pb-2">
          Mga Kasapi
        </div>
        <div className="space-y-2.5">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <button
                onClick={() => setExpanded(expanded === member.name ? null : member.name)}
                className="w-full text-left group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/90 flex items-center justify-center text-[10px] text-gold font-semibold shrink-0">
                    {member.name.trim().charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-foreground/80 group-hover:text-gold transition-colors truncate">
                      {member.name}
                    </p>
                    <p className="text-[9px] text-muted-foreground truncate">
                      {member.role}
                    </p>
                  </div>
                  <motion.svg
                    animate={{ rotate: expanded === member.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3 text-gold/100 shrink-0 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
              </button>
              <AnimatePresence>
                {expanded === member.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[10px] leading-relaxed text-muted-foreground mt-2 pl-8 border-l border-gold/50 italic">
                      {member.natutunan}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
