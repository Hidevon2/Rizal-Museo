export interface AudioTrack {
  id: string;
  title: string;
  description: string;
  duration: string;
  narrator?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year?: number;
}

export interface VideoDocumentary {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  duration: string;
  year?: number;
}

export const audioTracks: AudioTrack[] = [
  {
    id: "noli-audio-1",
    title: "Noli Me Tangere: Kabanata 1 - Ang Pagtitipon",
    description:
      "Isang audio narration ng pambungad na kabanata ng Noli Me Tangere, na nagtatakda ng tagpo sa hapunan ni Kapitan Tiago kung saan ipinakilala ang mga tauhan.",
    duration: "15:30",
    narrator: "Isinalaysay ng mga kilalang Pilipinong voice artist",
  },
  {
    id: "ultimo-adios-recitation",
    title: "Mi Ultimo Adios - Buong Pagbigkas",
    description:
      "Isang dramatikong pagbasa ng huling tula ni Jose Rizal, Mi Ultimo Adios, sa orihinal nitong Espanyol at sa salin sa Tagalog, Ang Huling Paalam.",
    duration: "8:45",
    narrator: "Dramatikong pagbasa ng mga theater performer",
  },
  {
    id: "rizal-letters",
    title: "Mga Liham mula sa Dapitan",
    description:
      "Mga piling sulat sa pagitan ni Jose Rizal at ng kanyang pamilya, kaibigan, at kapwa intelektwal sa panahon ng kanyang pagkakatapon sa Dapitan, na nagpapakita ng kanyang mga pananaw sa agham, lipunan, at pang-araw-araw na buhay.",
    duration: "22:00",
    narrator: "Historical reenactment kasama ang voice actors",
  },
  {
    id: "el-fili-audio",
    title: "El Filibusterismo: Mga Pangunahing Bahagi",
    description:
      "Mga pangunahing bahagi ng El Filibusterismo, na nakatuon sa mga temang rebolusyonaryo at mga plano ni Simoun para sa paghihiganti laban sa pamahalaang kolonyal.",
    duration: "18:20",
    narrator: "Akademikong pagbabasa na may pagsusuri",
  },
  {
    id: "rizal-poems",
    title: "Kumpletong Tula ni Jose Rizal",
    description:
      "Isang koleksyon ng mga tula ni Rizal, mula sa kanyang mga pinakaunang akda na isinulat bilang bata hanggang sa kanyang huling tula na isinulat noong bisperas ng kanyang pagbitay.",
    duration: "35:00",
    narrator: "Koleksyon ng maraming narrators",
  },
  {
    id: "rizal-music",
    title: "Kundiman ng Bayan - Musikal na Parangal",
    description:
      "Isang musikal na parangal na pinagsasama ang tradisyonal na kundiman at modernong komposisyon na inspirasyon ng buhay at mga akda ni Rizal. Nagtatampok ng Rizal hymn at iba pang makabayang awit.",
    duration: "12:10",
    narrator: "Ginawa ng Philippine Madrigal Singers",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Rizal Monument - Luneta Park",
    description:
      "Ang iconic na Rizal Monument sa Luneta Park sa Maynila, ang lugar ng kanyang pagbitay. Ang monumento ay nakatayo bilang simbolo ng nasyonalismong Pilipino at binabantayan ng seremonyal na mga sentinel 24/7.",
    imageUrl: "",
    year: 1913,
  },
  {
    id: "gal-2",
    title: "Rizal Shrine - Calamba",
    description:
      "Ang muling itinayong ancestral home ng pamilya Rizal sa Calamba, Laguna. Ang bahay ay isang museo na nagpapakita ng pamumuhay ng mayamang pamilyang Pilipino sa panahon ng kolonyal na Espanyol.",
    imageUrl: "",
    year: 1950,
  },
  {
    id: "gal-3",
    title: "Fort Santiago - Intramuros",
    description:
      "Ang selda kung saan nakulong si Rizal bago ang kanyang pagbitay sa Fort Santiago. Ang fort ay naglalaman na ngayon ng museo na nakatuon sa buhay at mga akda ni Rizal, kabilang ang memorabilia mula sa kanyang mga huling araw.",
    imageUrl: "",
    year: 1896,
  },
  {
    id: "gal-4",
    title: "Rizal sa Dapitan",
    description:
      "Ang Rizal Shrine sa Dapitan City, Zamboanga del Norte, kung saan nanirahan si Rizal sa kanyang apat na taong pagkakatapon. Kasama sa site ang kanyang muling itinayong bahay, klinika, at water system na kanyang idinisenyo.",
    imageUrl: "",
    year: 1892,
  },
  {
    id: "gal-5",
    title: "Orihinal na Manuskrito - Noli Me Tangere",
    description:
      "Isang pahina mula sa orihinal na manuskrito ng Noli Me Tangere, na sulat-kamay ni Rizal. Ang manuskrito ay itinatago sa National Library of the Philippines.",
    imageUrl: "",
    year: 1887,
  },
  {
    id: "gal-6",
    title: "Mga Larawan ng Pamilya ni Rizal",
    description:
      "Mga larawan ng pamilya ni Rizal: ang kanyang mga magulang na sina Francisco Rizal Mercado at Teodora Alonso, at kanyang mga kapatid, na pawang mga magagaling na indibidwal sa kani-kanilang larangan.",
    imageUrl: "",
    year: 1880,
  },
  {
    id: "gal-7",
    title: "Rizal sa Europa",
    description:
      "Mga larawan ni Rizal sa kanyang panahon sa Europa, kabilang ang mga imahe mula sa Madrid, Paris, Berlin, at iba pang mga lungsod kung saan siya nag-aral at sumulat ng kanyang mga tanyag na nobela.",
    imageUrl: "",
    year: 1885,
  },
  {
    id: "gal-8",
    title: "Josephine Bracken",
    description:
      "Mga larawan ni Josephine Bracken, ang common-law wife ni Rizal, na nasa tabi niya sa kanyang pagkakatapon sa Dapitan at dumalo sa kanyang pagbitay.",
    imageUrl: "",
    year: 1895,
  },
];

export const videoDocumentaries: VideoDocumentary[] = [
  {
    id: "vid-1",
    title: "Jose Rizal: Ang Pambansang Bayani",
    description:
      "Isang komprehensibong dokumentaryo na sumasaklaw sa buhay, mga akda, at pamana ni Jose Rizal, mula sa kanyang pagkabata sa Calamba hanggang sa kanyang pagbitay sa Bagumbayan.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "45:00",
    year: 2015,
  },
  {
    id: "vid-2",
    title: "Ang Kontrobersiya ng Retraksyon ni Rizal",
    description:
      "Isang investigative documentary na tumutuklas sa kontrobersiyang pumapalibot sa umano'y retraksyon ni Rizal sa kanyang mga pagpuna laban sa Simbahang Katoliko bago siya patayin.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "28:30",
    year: 2018,
  },
  {
    id: "vid-3",
    title: "Sa mga Yapak ni Rizal",
    description:
      "Isang travel documentary na sumusunod sa mga yapak ni Rizal sa buong Europa, bumibisita sa mga lugar kung saan siya nag-aral, sumulat, at nanirahan sa kanyang mga taon sa ibang bansa.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "52:15",
    year: 2020,
  },
  {
    id: "vid-4",
    title: "Dapitan ni Rizal: Isang Nakatagong Paraiso",
    description:
      "Isang dokumentaryo na tumutuklas sa buhay ni Rizal sa Dapitan, na nagpapakita ng kanyang mga kontribusyon sa komunidad bilang doktor, magsasaka, guro, at inhinyero.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "36:40",
    year: 2019,
  },
  {
    id: "vid-5",
    title: "Noli hanggang Fili: Ang mga Nobelang Nagbago sa Isang Bansa",
    description:
      "Isang malalim na pagsusuri ng dalawang nobela ni Rizal at kung paano nito pinasigla ang Rebolusyong Pilipino at patuloy na hinuhubog ang pagkakakilanlang Pilipino.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "41:20",
    year: 2021,
  },
  {
    id: "vid-6",
    title: "Mga Babae sa Buhay ni Rizal",
    description:
      "Isang dokumentaryo na tumutuklas sa mga makabuluhang babae na nakaimpluwensya sa buhay at gawain ni Rizal, mula sa kanyang inang si Teodora hanggang sa kanyang maraming minahal at muses.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "33:15",
    year: 2022,
  },
];
