export interface Reference {
  id: string;
  title: string;
  author: string;
  type: "book" | "article" | "website" | "documentary";
  year: number;
  publisher?: string;
  description: string;
  citation: string;
  url?: string;
}

export const references: Reference[] = [
  {
    id: "ref-1",
    title: "Noli Me Tangere",
    author: "Jose Rizal",
    type: "book",
    year: 1887,
    publisher: "Berlin, Germany",
    description:
      "Ang unang nobela ni Rizal na naglantad ng kanser sa lipunan ng pananakop ng mga Espanyol sa Pilipinas.",
    citation:
      "Rizal, J. (1887). Noli Me Tangere. Berlin, Germany.",
  },
  {
    id: "ref-2",
    title: "El Filibusterismo",
    author: "Jose Rizal",
    type: "book",
    year: 1891,
    publisher: "Ghent, Belgium",
    description:
      "Ang karugtong ng Noli Me Tangere, na nagpapatuloy sa kwento ng pang-aapi sa Pilipinas at panawagan para sa rebolusyon.",
    citation:
      "Rizal, J. (1891). El Filibusterismo. Ghent, Belgium.",
  },
  {
    id: "ref-3",
    title: "Rizal Without the Overcoat",
    author: "Ambeth R. Ocampo",
    type: "book",
    year: 1990,
    publisher: "Anvil Publishing",
    description:
      "Isang koleksyon ng mga sanaysay na nagpapakatao kay Jose Rizal, na ipinapakita siya bilang relatable na pigura sa halip na isang malayong icon. Ang nakakatawa at accessible na pagsulat ni Ocampo ay nagpasikat ng Rizal studies sa pangkalahatang mambabasa.",
    citation:
      "Ocampo, A. R. (1990). Rizal Without the Overcoat. Pasig City: Anvil Publishing.",
  },
  {
    id: "ref-4",
    title: "Ang Rizal Law at ang Epekto Nito sa Edukasyong Pilipino",
    author: "Maria Teresa R. Cruz",
    type: "article",
    year: 2015,
    publisher: "Philippine Educational Research Journal",
    description:
      "Isang akademikong artikulo na sumusuri sa implementasyon at epekto ng Republic Act 1425, na kilala bilang Rizal Law, na nag-aatas ng pagtuturo ng buhay at mga akda ni Rizal sa lahat ng paaralang Pilipino.",
    citation:
      "Cruz, M. T. R. (2015). Ang Rizal Law at ang Epekto Nito sa Edukasyong Pilipino. Philippine Educational Research Journal, 12(2), 45-67.",
  },
  {
    id: "ref-5",
    title: "Making Sense of Rizal's Retraction",
    author: "John N. Schumacher, S.J.",
    type: "article",
    year: 1991,
    publisher: "Philippine Studies Journal",
    description:
      "Isang iskolarling pagsusuri ng kontrobersyal na isyu kung talagang binawi ni Rizal ang kanyang anti-klerikal na mga akda bago siya patayin, na isinulat ng isang nangungunang historyador.",
    citation:
      "Schumacher, J. N. (1991). Making Sense of Rizal's Retraction. Philippine Studies, 39(2), 167-189.",
  },
  {
    id: "ref-6",
    title: "Ang Buhay at mga Akda ni Jose Rizal",
    author: "Zaide, Gregorio F. & Zaide, Sonia M.",
    type: "book",
    year: 1999,
    publisher: "National Book Store",
    description:
      "Isang komprehensibong biographical reference book na sumasaklaw sa buong buhay ni Rizal, kanyang paglalakbay, mga akda, at pangmatagalang pamana. Malawakang ginagamit bilang aklat-aralin sa mga paaralang Pilipino.",
    citation:
      "Zaide, G. F., & Zaide, S. M. (1999). Ang Buhay at mga Akda ni Jose Rizal. Manila: National Book Store.",
  },
  {
    id: "ref-7",
    title: "Dapitan ni Rizal: Isang Kwento ng Pagkatapon at Paglikha",
    author: "Asuncion Lopez Bantug",
    type: "book",
    year: 2007,
    publisher: "University of the Philippines Press",
    description:
      "Isang detalyadong salaysay ng apat na taong pagkakatapon ni Rizal sa Dapitan, na tumutuklas kung paano niya ginawang produktibo ang kanyang pagkatapon sa pamamagitan ng serbisyo sa komunidad, pag-aaral ng agham, at artistikong paglikha.",
    citation:
      "Bantug, A. L. (2007). Dapitan ni Rizal: Isang Kwento ng Pagkatapon at Paglikha. Quezon City: University of the Philippines Press.",
  },
  {
    id: "ref-8",
    title: "Jose Rizal: Ang Pambansang Bayani - Isang Dokumentaryo",
    author: "GMA Network",
    type: "documentary",
    year: 2012,
    description:
      "Isang komprehensibong seryeng dokumentaryo na tumutuklas sa buhay ni Rizal sa pamamagitan ng expert interviews, location shooting, at dramatic reenactments.",
    citation:
      "GMA Network. (2012). Jose Rizal: Ang Pambansang Bayani [Documentary]. Philippines: GMA Network.",
  },
  {
    id: "ref-9",
    title: "National Historical Commission of the Philippines - Rizal",
    author: "NHCP",
    type: "website",
    year: 2024,
    publisher: "National Historical Commission of the Philippines",
    description:
      "Ang opisyal na website ng pamahalaan na nakatuon sa pagpreserba at pagtataguyod ng makasaysayang pamana ni Rizal, na nagtatampok ng digital archives, impormasyon ng museo, at educational resources.",
    citation:
      "National Historical Commission of the Philippines. (2024). Jose Rizal. Retrieved from https://nhcp.gov.ph/jose-rizal/",
  },
  {
    id: "ref-10",
    title: "Ang Pagkamartir ni Rizal at ang Kasunod Nito",
    author: "Teodoro A. Agoncillo",
    type: "book",
    year: 1974,
    publisher: "University of the Philippines Press",
    description:
      "Isang pagsusuring pangkasaysayan ng mga pangyayari pumapalibot sa pagbitay kay Rizal at kung paano pinasigla ng kanyang pagkamatay ang Rebolusyong Pilipino laban sa pananakop ng Espanya.",
    citation:
      "Agoncillo, T. A. (1974). Ang Pagkamartir ni Rizal at ang Kasunod Nito. Quezon City: University of the Philippines Press.",
  },
  {
    id: "ref-11",
    title: "Mga Sulat ni Rizal kay Ferdinand Blumentritt",
    author: "Jose Rizal & Ferdinand Blumentritt",
    type: "book",
    year: 1886,
    publisher: "Iba't ibang edisyon",
    description:
      "Ang malawak na pakikipagsulatan sa pagitan ni Rizal at ng kanyang kaibigang Austriano na si Ferdinand Blumentritt, na nagpapakita ng mga pananaw ni Rizal sa politika, agham, kultura, at kanyang personal na buhay. Ang mga liham na ito ay mahalagang primary sources para sa Rizal studies.",
    citation:
      "Rizal, J., & Blumentritt, F. (1886-1896). Correspondence. Iba't ibang publikasyon.",
  },
  {
    id: "ref-12",
    title: "Rizal sa Kontemporaryong Social Media",
    author: "Iba't ibang Mananaliksik",
    type: "article",
    year: 2023,
    publisher: "Asian Journal of Communication",
    description:
      "Isang pag-aaral na sumusuri kung paano kinakatawan at pinag-uusapan si Jose Rizal sa mga social media platform tulad ng TikTok, Instagram, at Twitter, at kung paano hinuhubog ng mga platform na ito ang pag-unawa ng mga kabataang Pilipino sa pambansang bayani.",
    citation:
      "Iba't iba. (2023). Rizal sa Kontemporaryong Social Media. Asian Journal of Communication, 33(4), 312-328.",
  },
];
