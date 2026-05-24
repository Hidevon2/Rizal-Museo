"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  const [showContributions, setShowContributions] = useState(false);
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
          <div
            onClick={() => setShowContributions(!showContributions)}
            className="vintage-card p-6 md:p-10 text-center border-gold/30 cursor-pointer group transition-all hover:border-gold/50"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground group-hover:text-gold transition-colors">
                Mga Kontribusyon sa Nasyonalismong Pilipino
              </h2>
              <motion.svg
                animate={{ rotate: showContributions ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </div>
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

            <p className="text-gold/50 text-[10px] uppercase tracking-widest mt-6 group-hover:text-gold/70 transition-colors">
              Pindutin upang {showContributions ? "itago" : "ipakita"} ang lahat ng kontribusyon
            </p>

            <AnimatePresence>
              {showContributions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-gold/10 mt-6 text-left">
                    <h3 className="text-gold font-semibold font-display text-sm mb-4 text-center">
                      Lahat ng Kontribusyon ni Jose Rizal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          category: "Panitikan",
                          items: [
                            "Noli Me Tangere (1887) — naglantad ng katiwalian ng pamahalaang kolonyal",
                            "El Filibusterismo (1891) — mas madilim na sequela na nanawagan ng rebolusyon",
                            "Mi Último Adios — huling tula na isinulat bago bitayin",
                            "Sobre La Indolencia de Los Filipinos — sanaysay tungkol sa katamaran ng Pilipino",
                            "Filipinas Dentro De Cien Años — hula sa kinabukasan ng Pilipinas",
                            "Ang Pag-ibig sa Tinubuang Lupa — tula na pumupukaw ng nasyonalismo",
                          ],
                        },
                        {
                          category: "Repormang Panlipunan",
                          items: [
                            "Itinatag ang La Liga Filipina — samahang sibiko para sa pagkakaisa at reporma",
                            "Naging tinig ng mga Pilipino sa pahayagang La Solidaridad",
                            "Nangampanya para sa pantay na karapatan sa ilalim ng batas Espanyol",
                            "Nagpetisyon para sa representasyon ng Pilipinas sa Spanish Cortes",
                            "Nagtaguyod ng sekularisasyon ng mga parokya",
                          ],
                        },
                        {
                          category: "Agham at Medisina",
                          items: [
                            "Nag-aral at naging sertipikadong ophthalmologist sa Europa",
                            "Gumamot sa mga may sakit sa mata sa Dapitan nang libre",
                            "Nagsagawa ng siyentipikong pag-aaral sa flora at fauna ng Pilipinas",
                            "Nagdisenyo ng water supply system sa Dapitan",
                            "Nag-ambag sa larangan ng etnolohiya at antropolohiya",
                          ],
                        },
                        {
                          category: "Edukasyon at Wika",
                          items: [
                            "Nagtatag ng paaralan sa Dapitan na nagtuturo ng Ingles at agham",
                            "Marunong magsalita ng 22 wika (Tagalog, Espanyol, Ingles, Pranses, Aleman, atbp.)",
                            "Nagsalin ng mga akdang Europeo sa Tagalog",
                            "Nag-aral ng mga katutubong wika ng Pilipinas",
                            "Nagbigay-diin sa kahalagahan ng edukasyon para sa kababaihan",
                          ],
                        },
                        {
                          category: "Sining at Kultura",
                          items: [
                            "Isang bihasang pintor at iskultor — lumikha ng maraming likhang sining",
                            "Gumawa ng mga tula, dula, at sanaysay na pumupukaw ng damdaming makabayan",
                            "Nagdisenyo ng mga costume at props para sa mga dula sa Dapitan",
                            "Nag-ukit ng mga estatwa at bust mula sa kahoy at luwad",
                            "Nagdokumento ng kultura at tradisyon ng mga Pilipino sa pamamagitan ng kanyang mga akda",
                          ],
                        },
                        {
                          category: "Pagkamatay at Pamana",
                          items: [
                            "Binitay noong Disyembre 30, 1896 sa Bagumbayan (ngayon Rizal Park)",
                            "Ang kanyang kamatayan ang nagpasiklab ng Rebolusyong Pilipino ng 1896",
                            "Naging simbolo ng paglaban para sa kalayaan at katarungan",
                            "Ang kanyang mga isinulat ay pinag-aralan at pinagmulan ng inspirasyon ng mga sumunod na henerasyon",
                            "Itinuturing na pambansang bayani ng Pilipinas — ang kanyang araw ng kamatayan ay pambansang holiday",
                          ],
                        },
                      ].map((group) => (
                        <div key={group.category} className="p-4 rounded-sm bg-accent/50 border border-border">
                          <h4 className="text-foreground font-semibold text-xs uppercase tracking-wider mb-3 text-gold">
                            {group.category}
                          </h4>
                          <ul className="space-y-2">
                            {group.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-gold/40 mt-1 text-xs">✦</span>
                                <span className="text-muted-foreground text-xs leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>

      <Timeline />
    </div>
  );
}
