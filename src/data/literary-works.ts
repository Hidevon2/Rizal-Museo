export interface LiteraryWork {
  id: string;
  title: string;
  originalTitle: string;
  year: number;
  type: "novel" | "poem" | "essay" | "play" | "article";
  summary: string;
  themes: string[];
  historicalSignificance: string;
  coverColor: string;
  icon: string;
  details: {
    characters?: string[];
    setting?: string;
    inspiration?: string;
    legacy?: string;
    language?: string;
    publication?: string;
  };
}

export const literaryWorks: LiteraryWork[] = [
  {
    id: "noli-me-tangere",
    title: "Noli Me Tangere",
    originalTitle: "Noli Me Tangere",
    year: 1887,
    type: "novel",
    summary:
      "Inilantad ng nobela ang katiwalian at pang-aabuso ng pamahalaang kolonyal ng Espanya at ng Simbahang Katoliko sa Pilipinas. Sinundan nito ang kuwento ni Crisostomo Ibarra, isang binatang Pilipino na bumalik sa Pilipinas matapos mag-aral sa Europa at natuklasan ang mga kawalan ng katarungan sa kanyang bayan. Ang pamagat, na nangangahulugang 'Huwag Mo Akong Salingin,' ay tumutukoy sa kanser ng lipunang Pilipino.",
    themes: [
      "Pananakop ng kolonyal",
      "Kawalan ng katarungan",
      "Katiwalian sa Simbahan",
      "Pagkakakilanlang Pilipino",
      "Pag-ibig at sakripisyo",
      "Edukasyon at reporma",
    ],
    historicalSignificance:
      "Pinukaw ng Noli Me Tangere ang nasyonalismong Pilipino at nagpasiklab ng Rebolusyong Pilipino. Ipinagbawal ito ng mga awtoridad na Espanyol ngunit lihim na ipinakalat. Ito ay itinuturing na pinakamahalagang akdang pampanitikan sa kasaysayan ng Pilipinas at sapilitang binabasa sa lahat ng paaralang Pilipino.",
    coverColor: "#1a1a2e",
    icon: "📖",
    details: {
      characters: [
        "Crisostomo Ibarra",
        "Maria Clara",
        "Padre Damaso",
        "Elias",
        "Sisa",
        "Basilio",
        "Kapitan Tiago",
        "Pilosopo Tasyo",
      ],
      setting: "Pilipinas (San Diego, Maynila) noong mga 1880s",
      inspiration:
        "Inspirasyon mula sa sariling karanasan at obserbasyon ni Rizal sa lipunang Pilipino sa ilalim ng pananakop ng Espanya, pati na rin sa mga akda tulad ng Uncle Tom's Cabin ni Harriet Beecher Stowe.",
      legacy:
        "Pinag-alab ng nobela ang nasyonalismong Pilipino at nagbigay inspirasyon sa rebolusyon laban sa Espanya. Ang mga tauhan nito ay naging archetypes sa kulturang Pilipino.",
      language: "Espanyol (orihinal), isinalin sa Tagalog at iba pang wika",
    },
  },
  {
    id: "el-filibusterismo",
    title: "El Filibusterismo",
    originalTitle: "El Filibusterismo",
    year: 1891,
    type: "novel",
    summary:
      "Ang mas madilim na karugtong ng Noli Me Tangere, na sumusunod sa mapaghiganti at mapanglaw na si Crisostomo Ibarra, na bumalik na nakabalatkayo bilang mayamang alahero na si Simoun. Nagplano siya ng rebolusyon laban sa pamahalaang Espanyol, gamit ang kanyang kayamanan upang manipulahin ang mga pangyayari. Tinuklas ng nobela ang mga tema ng rebolusyon, paghihiganti, at ang posibilidad ng mapayapang reporma laban sa armadong pakikibaka.",
    themes: [
      "Rebolusyon at reporma",
      "Paghihiganti at katarungan",
      "Sakripisyo para sa bayan",
      "Katiwalian at kapangyarihan",
      "Hindi pagkakapantay-pantay",
      "Ideyalismo vs pragmatismo",
    ],
    historicalSignificance:
      "Ang El Filibusterismo ay kumpletong pagpuna ni Rizal sa pananakop ng Espanya. Hinulaan nito ang Rebolusyong Pilipino at nagbabala laban sa mga panganib ng mapang-aping pamamahala at marahas na pag-aalsa.",
    coverColor: "#16213e",
    icon: "⚔️",
    details: {
      characters: [
        "Simoun / Crisostomo Ibarra",
        "Basilio",
        "Isagani",
        "Paulita Gomez",
        "Padre Florentino",
        "Kabesang Tales",
        "Placido Penitente",
        "Don Custodio",
      ],
      setting: "Pilipinas (Maynila at mga karatig na lugar), 1890s",
      inspiration:
        "Ang lumalalang pagkadismaya ni Rizal sa posibilidad ng mapayapang reporma at mga obserbasyon sa mga kilusang rebolusyonaryo sa Europa at Latin Amerika.",
      legacy:
        "Pinalalim ng nobela ang panawagan para sa kalayaan ng Pilipinas at nananatiling makapangyarihang pagpuna sa kolonyalismo at kawalan ng katarungan.",
      language: "Espanyol (orihinal), isinalin sa Tagalog at iba pang wika",
    },
  },
  {
    id: "mi-ultimo-adios",
    title: "Mi Ultimo Adios",
    originalTitle: "Mi Ultimo Adios",
    year: 1896,
    type: "poem",
    summary:
      "Ang huling tula ni Rizal, na isinulat noong bisperas ng kanyang pagbitay noong Disyembre 30, 1896. Ang tula ay pamamaalam sa kanyang minamahal na Pilipinas, na nagpapahayag ng kanyang walang hanggang pagmamahal sa kanyang bayan at ang kanyang pag-asa para sa kanyang hinaharap na kalayaan. Ito ay itinago sa loob ng isang alcohol stove at ibinigay sa kanyang pamilya bago siya patayin.",
    themes: [
      "Pagkamakabayan",
      "Sakripisyo",
      "Pagmamahal sa bayan",
      "Pag-asa para sa kalayaan",
      "Kamatayan at pagkamartir",
    ],
    historicalSignificance:
      "Ang Mi Ultimo Adios ay ang pinakasikat na tulang Pilipino at isang pambansang kayamanan. Ito ay sumasagisag sa pagkamartir ni Rizal at sa kanyang matatag na pagmamahal sa Pilipinas. Isinalin ito sa maraming wika at binibigkas sa mga makabayang okasyon sa buong Pilipinas.",
    coverColor: "#0f3460",
    icon: "📜",
    details: {
      setting: "Fort Santiago, Maynila, Disyembre 29-30, 1896",
      inspiration:
        "Ang nalalapit na pagbitay kay Rizal at ang kanyang panghabambuhay na pagmamahal sa Pilipinas. Isinulat ang tula nang walang inaasahang kaligtasan.",
      legacy:
        "Ang tula ay naging tiyak na pahayag ng pagkamakabayang Pilipino at itinuturo sa mga paaralan sa buong bansa.",
      language: "Espanyol (orihinal na pinamagatang 'Mi Ultimo Adios'), na may 'Ang Huling Paalam' bilang salin sa Tagalog",
    },
  },
  {
    id: "sa-aking-mga-kababata",
    title: "Sa Aking mga Kababata",
    originalTitle: "Sa Aking mga Kababata",
    year: 1869,
    type: "poem",
    summary:
      "Isinulat ni Rizal sa edad na walong taon, hinihikayat ng tulang ito ang mga kabataang Pilipino na mahalin ang kanilang sariling wika. Tanyag na sinabi ng tula, 'Ang hindi magmahal sa kanyang wika ay higit pa sa hayop at malansang isda.' Ipinapakita nito ang maagang nasyonalismo ni Rizal at pagmamahal sa kanyang kultural na pamana.",
    themes: [
      "Pagmamahal sa wika",
      "Nasyonalismo",
      "Pagmamalaki sa kultura",
      "Pagpapalakas ng kabataan",
    ],
    historicalSignificance:
      "Ipinapakita ng tulang ito ang pambihirang talento ni Rizal mula sa murang edad at ang kanyang maagang pag-unawa sa kahalagahan ng wika sa pambansang pagkakakilanlan. Ito ay nananatiling isa sa mga pinaka-quote na tula sa edukasyong Pilipino.",
    coverColor: "#1a1a2e",
    icon: "✒️",
    details: {
      language: "Tagalog",
      inspiration:
        "Ang ina ni Rizal na si Teodora Alonso, na nagturo sa kanya ng halaga ng wika at pagkukuwento.",
      legacy:
        "Ang tula ay itinuturo sa bawat estudyanteng Pilipino at nagbigay inspirasyon sa mga henerasyon na pahalagahan ang kanilang sariling wika.",
    },
  },
  {
    id: "the-philippines-a-century-hence",
    title: "Ang Pilipinas Pagkaraan ng Sandaang Taon",
    originalTitle: "Filipinas dentro de cien años",
    year: 1889,
    type: "essay",
    summary:
      "Isang propetikong sanaysay na inilathala sa La Solidaridad kung saan sinuri ni Rizal ang hinaharap ng Pilipinas sa ilalim ng pananakop ng Espanya. Hinulaan niya na kung hindi ipatutupad ang mga reporma, mawawala sa Espanya ang Pilipinas sa pamamagitan ng rebolusyon o unti-unting paghina ng bansa. Ipinapakita ng sanaysay ang matalas na pagsusuring pampulitika at pananaw ni Rizal.",
    themes: [
      "Propesiyang pampulitika",
      "Pagpuna sa kolonyalismo",
      "Kapalarang pambansa",
      "Reporma at rebolusyon",
    ],
    historicalSignificance:
      "Tumpak na hinulaan ng sanaysay ang Rebolusyong Pilipino at ang katapusan ng pananakop ng Espanya. Ipinapakita nito ang kakayahan ni Rizal bilang isang palaisip at analista sa pulitika, hindi lamang bilang nobelista at makata.",
    coverColor: "#16213e",
    icon: "🔮",
    details: {
      publication: "La Solidaridad, Madrid",
      language: "Espanyol",
      inspiration:
        "Ang mga obserbasyon ni Rizal sa mga kolonyal na sistema sa buong mundo at ang kanyang pagnanais na gisingin ang mga Pilipino sa kanilang kalagayang pampulitika.",
      legacy:
        "Itinuturing na isa sa mga pinakamahahalagang sanaysay na pampulitika ng isang Pilipino, patuloy itong pinag-aaralan para sa pagsusuring pangkasaysayan at pampulitika.",
    },
  },
  {
    id: "the-indolence-of-the-filipino",
    title: "Ang Katamaran ng mga Pilipino",
    originalTitle: "La Indolencia de los Filipinos",
    year: 1890,
    type: "essay",
    summary:
      "Isang sanaysay na iskolarli na inilathala sa La Solidaridad na nagpapabulaan sa estereotipo ng Espanyol tungkol sa katamaran ng mga Pilipino. Pinatunayan ni Rizal na ang katamaran ay hindi likas na katangian kundi bunga ng pananakop ng mga kolonyal, mainit na klima, at kawalan ng oportunidad. Nagpakita siya ng ebidensyang pangkasaysayan ng kasipagan ng mga Pilipino bago ang kolonisasyon.",
    themes: [
      "Pagsusuring panlipunan",
      "Pagpuna sa kolonyal",
      "Pagmamalaki sa kultura",
      "Rebisyong pangkasaysayan",
    ],
    historicalSignificance:
      "Ang sanaysay ay isang makapangyarihang pagtugon sa rasistang propaganda ng kolonyal. Ipinakita nito ang paggamit ni Rizal ng pananaliksik at lohika upang labanan ang diskriminasyon at isang pundasyong teksto sa sikolohiya at sosyolohiyang Pilipino.",
    coverColor: "#0f3460",
    icon: "📊",
    details: {
      publication: "La Solidaridad, Madrid",
      language: "Espanyol",
      inspiration:
        "Ang pagkadismaya ni Rizal sa estereotipikong paglalarawan sa mga Pilipino bilang tamad ng mga kolonyalistang Espanyol.",
      legacy:
        "Ang sanaysay ay nananatiling may kaugnayan sa mga diskusyon tungkol sa pagkakakilanlang Pilipino, kolonyal na mentalidad, at pag-aaral post-kolonyal.",
    },
  },
  {
    id: "to-the-young-women-of-malolos",
    title: "Sa mga Kababayang Dalaga ng Malolos",
    originalTitle: "Sa mga Kababayang Dalaga ng Malolos",
    year: 1889,
    type: "essay",
    summary:
      "Isang liham na isinulat ni Rizal na pumupuri sa mga kabataang babae ng Malolos, Bulacan, na matapang na nagpetisyon para sa karapatang magtatag ng paaralang panggabi at matuto ng Espanyol. Sa liham, binigyang-diin ni Rizal ang kahalagahan ng edukasyon ng kababaihan, kanilang papel sa lipunan, at ang pangangailangan na ang mga inang Pilipino ay magpalaki ng makabayang mga anak.",
    themes: [
      "Pagpapalakas ng kababaihan",
      "Edukasyon para sa lahat",
      "Pagkakapantay-pantay ng kasarian",
      "Nasyonalismo sa pamamagitan ng pamilya",
    ],
    historicalSignificance:
      "Ipinapakita ng liham ang progresibong pananaw ni Rizal sa mga karapatan at edukasyon ng kababaihan, ilang dekada nang nauuna sa kanyang panahon. Nananatili itong mahalagang tekstong peminista sa kasaysayan ng Pilipinas.",
    coverColor: "#1a1a2e",
    icon: "👩‍🎓",
    details: {
      setting: "Malolos, Bulacan, 1889",
      language: "Tagalog",
      inspiration:
        "Ang katapangan ng 20 kabataang babae ng Malolos na sumuway sa mga prayle upang maghanap ng edukasyon.",
      legacy:
        "Ang liham ay ipinagdiriwang bilang isang palatandaang dokumento sa peminismong Pilipino at reporma sa edukasyon.",
    },
  },
];
