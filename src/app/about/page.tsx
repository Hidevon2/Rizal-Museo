"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-sm bg-gold/10 border border-gold/20 text-gold text-xs font-medium tracking-widest uppercase mb-4">
              Tungkol
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-foreground mb-4">
              Ang Buhay ni{" "}
              <span className="text-gold">Jose Rizal</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Tuklasin ang pambihirang paglalakbay ng isang tao na naging intelektuwal na
              haligi ng Rebolusyong Pilipino.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-16 lg:py-20 relative bg-card/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-6">
                Talambuhay
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                    Ipinanganak si Jose Protacio Rizal Mercado y Alonso Realonda noong Hunyo 19, 1861,
                    sa Calamba, Laguna. Siya ang ikapitong anak nina Francisco Rizal Mercado
                    at Teodora Alonso. Mula sa murang edad, ipinakita ni Rizal ang pambihirang
                  katalinuhan at talento, natutong bumasa at sumulat bago pa man siya mag-limang taon.
                </p>
                <p>
                    Ang ina ni Rizal na si Teodora Alonso ang kanyang unang guro. Itinanim niya kay Rizal
                    ang pagmamahal sa panitikan at pag-aaral. Sa edad na 11, pumasok siya sa
                    Ateneo Municipal de Manila, kung saan siya nagpamalas ng katalinuhan, na nakuha ang
                    pinakamataas na marka sa lahat ng kanyang asignatura.
                </p>
                <p>
                    Ipinagpatuloy niya ang mas mataas na edukasyon sa Unibersidad ng Santo Tomas at kalaunan
                    ay nagpatuloy ng pag-aaral sa Espanya sa Universidad Central de Madrid, kung saan
                    nagtamo siya ng digri sa Medisina at Pilosopiya at Panitikan. Nag-aral din siya sa
                    Unibersidad ng Paris at Unibersidad ng Heidelberg.
                </p>
                <p>
                    Si Rizal ay isang tunay na polymath — siya ay ophthalmologist, iskultor, pintor,
                    edukador, magsasaka, historyador, mandudula, mamamahayag, at makata. Marunong siyang
                    magsalita ng 22 wika at bihasa sa agham, panitikan, pilosopiya, at sining.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="vintage-card p-6">
                <h3 className="text-lg font-semibold font-display text-gold mb-4">
                  Edukasyon
                </h3>
                <ul className="space-y-3">
                  {[
                    { school: "Ateneo Municipal de Manila", degree: "Bachelor of Arts", year: "1872-1877" },
                    { school: "Unibersidad ng Santo Tomas", degree: "Pilosopiya at Panitikan / Medisina", year: "1877-1882" },
                    { school: "Universidad Central de Madrid", degree: "Lisensya sa Medisina", year: "1882-1884" },
                    { school: "Unibersidad ng Paris", degree: "Ophthalmology (Postgraduate)", year: "1885" },
                    { school: "Unibersidad ng Heidelberg", degree: "Ophthalmology (Postgraduate)", year: "1886" },
                  ].map((edu, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 shrink-0" />
                      <div>
                        <p className="text-foreground text-sm font-medium">{edu.school}</p>
                        <p className="text-muted-foreground text-xs">{edu.degree} · {edu.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="vintage-card p-6">
                <h3 className="text-lg font-semibold font-display text-gold mb-4">
                  Mga Paglalakbay at Nagawa
                </h3>
                <ul className="space-y-3">
                  {[
                    "Naglalakbay sa Espanya, Pransya, Alemanya, Switzerland, Inglatera, Hapon, at Estados Unidos",
                    "Sumulat ng Noli Me Tangere (1887) at El Filibusterismo (1891)",
                    "Itinatag ang La Liga Filipina, isang progresibong samahang sibiko",
                    "Pinaganda ang Dapitan sa pamamagitan ng water system, paaralan, at sakahan",
                    "Nagdisenyo ng water supply system at nagpakilala ng modernong teknolohiya sa pagsasaka",
                    "Gumawa ng siyentipikong pag-aaral sa flora at fauna ng Pilipinas",
                    "Nag-master ng 22 wika kabilang ang Tagalog, Espanyol, Ingles, Pranses, Aleman, at Latin",
                  ].map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold/60 mt-0.5">✦</span>
                      <span className="text-muted-foreground text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-20 relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="vintage-card p-6 md:p-10 text-center border-gold/30">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
              Mga Kontribusyon sa Nasyonalismong Pilipino
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto mb-6">
                Ang pinakamalaking kontribusyon ni Rizal sa nasyonalismong Pilipino ay sa pamamagitan ng
                kanyang mga akda. Inilantad ng kanyang mga nobela ang mga kawalan ng katarungan ng pananakop
                ng Espanya at ginising ang kamalayang Pilipino. Ipinakita niya na ang panulat ay maaaring
                mas matalas kaysa espada, gamit ang dahilan at moral na puwersa upang hamunin ang pang-aapi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { number: "2", label: "Rebolusyonaryong Nobela", desc: "Na nagpabago ng kasaysayan" },
                { number: "22", label: "Wikang Sinasalita", desc: "Isang tunay na polyglot" },
                { number: "1896", label: "Taon ng Pagkamartir", desc: "Na nagpasiklab ng rebolusyon" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-sm bg-accent border border-border">
                  <p className="text-3xl font-bold font-display text-gold">{stat.number}</p>
                  <p className="text-foreground font-semibold text-sm">{stat.label}</p>
                  <p className="text-muted-foreground text-xs">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Timeline />
    </div>
  );
}
