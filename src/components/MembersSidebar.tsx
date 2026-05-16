"use client";

import { motion } from "framer-motion";

const members = [
  { name: "Juan D. Dela Cruz", role: "Mananaliksik ng Kasaysayan" },
  { name: "Maria L. Santos", role: "Tagapangasiwa ng Multimedia" },
  { name: "Jose R. Mendoza", role: "Disenyador ng Web" },
  { name: "Ana C. Villanueva", role: "Tagasulat ng Nilalaman" },
  { name: "Pedro S. Reyes", role: "Tagapag-ayos ng Datos" },
  { name: "Luisa T. Ramirez", role: "Dalubhasa sa Disenyo" },
  { name: "Carlos B. Fernandez", role: "Tagapamahala ng Proyekto" },
];

export default function MembersSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-30"
    >
      <div className="vintage-card p-3 ml-4 border-gold/20 shadow-vintage">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-3 text-center border-b border-gold/20 pb-2">
          Mga Kasapi
        </div>
        <div className="space-y-2.5">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="group cursor-default"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-[10px] text-gold font-semibold shrink-0">
                  {member.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-foreground/80 group-hover:text-gold transition-colors truncate">
                    {member.name}
                  </p>
                  <p className="text-[9px] text-muted-foreground truncate">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
