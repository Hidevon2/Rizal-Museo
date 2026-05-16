export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: "life" | "education" | "travel" | "literary" | "legacy";
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1861",
    title: "Kapanganakan ni Jose Rizal",
    description:
      "Ipinanganak si Jose Protacio Rizal Mercado y Alonso Realonda noong Hunyo 19, 1861 sa Calamba, Laguna. Siya ang ikapitong anak nina Francisco Rizal Mercado at Teodora Alonso.",
    category: "life",
  },
  {
    year: "1870",
    title: "Maagang Pag-aaral",
    description:
      "Sinimulan ni Rizal ang kanyang maagang pag-aaral sa ilalim ng pagtuturo ng kanyang inang si Teodora Alonso, at kalaunan ay nag-aral kay Maestro Justiniano Aquino Cruz sa Binan, Laguna.",
    category: "education",
  },
  {
    year: "1872",
    title: "Ateneo Municipal",
    description:
      "Pumasok si Rizal sa Ateneo Municipal de Manila sa edad na 11, kung saan siya nagpamalas ng katalinuhan at nagtamo ng maraming parangal sa akademya.",
    category: "education",
  },
  {
    year: "1877",
    title: "Pag-aaral sa Unibersidad",
    description:
      "Nag-enrol siya sa Unibersidad ng Santo Tomas upang mag-aral ng Pilosopiya at Panitikan, at kalaunan ay naglipat sa Medisina. Nag-aral din siya sa Unibersidad ng Madrid.",
    category: "education",
  },
  {
    year: "1882",
    title: "Unang Paglalakbay sa Europa",
    description:
      "Umalis si Rizal sa Pilipinas sa unang pagkakataon upang mag-aral sa Europa. Naglakbay siya sa Espanya, Pransya, at Alemanya, kung saan ipinagpatuloy niya ang kanyang pag-aaral sa medisina.",
    category: "travel",
  },
  {
    year: "1884",
    title: "Mga Parangal sa Akademya",
    description:
      "Natapos niya ang kanyang Lisensya sa Medisina sa Universidad Central de Madrid at nagtamo rin ng digri sa Pilosopiya at Panitikan na may katangi-tanging karangalan.",
    category: "education",
  },
  {
    year: "1887",
    title: "Nailathala ang Noli Me Tangere",
    description:
      "Ang unang nobela ni Rizal na Noli Me Tangere ay nailathala sa Berlin sa tulong ng kanyang kaibigang si Dr. Maximo Viola. Inilantad ng aklat ang mga katiwalian ng pananakop ng mga Espanyol.",
    category: "literary",
  },
  {
    year: "1888",
    title: "Paglalakbay sa Europa at Asya",
    description:
      "Naglakbay si Rizal sa Hapon, Estados Unidos, at Inglatera, na ipinagpatuloy ang kanyang pag-aaral at obserbasyon sa iba't ibang kultura at sistema ng pamamahala.",
    category: "travel",
  },
  {
    year: "1891",
    title: "Nailathala ang El Filibusterismo",
    description:
      "Ang kanyang pangalawang nobela na El Filibusterismo ay nailathala sa Ghent, Belgium. Ang mas madilim na karugtong ng Noli Me Tangere ay lalong sumuri sa kolonyalismong Espanyol.",
    category: "literary",
  },
  {
    year: "1892",
    title: "Pagbabalik sa Pilipinas",
    description:
      "Bumalik si Rizal sa Pilipinas at itinatag ang La Liga Filipina, isang samahang sibiko na naglalayong pag-isahin ang mga Pilipino at itulak ang mga reporma. Di nagtagal ay ipinatapon siya sa Dapitan.",
    category: "life",
  },
  {
    year: "1896",
    title: "Pagdakip at Pagbitay",
    description:
      "Dinakip, nilitis, at hinatulan ng sedisyon si Rizal ng mga awtoridad na Espanyol. Siya ay pinagbabaril noong Disyembre 30, 1896 sa Bagumbayan (ngayon ay Luneta Park).",
    category: "life",
  },
  {
    year: "1898",
    title: "Kalayaan ng Pilipinas",
    description:
      "Ang Rebolusyong Pilipino, na inspirasyon ng mga akda at pagkamatay ni Rizal, ay nagtulak sa deklarasyon ng kalayaan mula sa Espanya noong Hunyo 12, 1898.",
    category: "legacy",
  },
  {
    year: "1946",
    title: "Pagkilala bilang Pambansang Bayani",
    description:
      "Opisyal na kinilala si Jose Rizal bilang pambansang bayani ng Pilipinas. Ang kanyang mga akda ay pinag-aaralan sa mga paaralan, at may mga monumento bilang parangal sa kanya sa buong mundo.",
    category: "legacy",
  },
  {
    year: "Kasalukuyan",
    title: "Nagpapatuloy na Pamana",
    description:
      "Si Rizal ay nananatiling simbolo ng nasyonalismong Pilipino, katalinuhan, at katapangan. Ang kanyang buhay at mga akda ay patuloy na nagbibigay inspirasyon sa mga henerasyon sa buong Pilipinas at sa mundo.",
    category: "legacy",
  },
];
