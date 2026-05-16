export interface Quote {
  id: number;
  text: string;
  source?: string;
  year?: number;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "Ang hindi magmahal sa kanyang wika ay higit pa sa hayop at malansang isda.",
    source: "Sa Aking mga Kababata",
    year: 1869,
  },
  {
    id: 2,
    text: "Ang kabataan ay ang pag-asa ng bayan.",
    source: "El Filibusterismo",
    year: 1891,
  },
  {
    id: 3,
    text: "Walang mas dakilang kapangyarihan kaysa sa kapangyarihan ng katotohanan.",
    source: "Liham sa kanyang pamilya",
    year: 1890,
  },
  {
    id: 4,
    text: "Ang hindi marunong lumingon sa pinanggalingan ay hindi makararating sa paroroonan.",
    source: "El Filibusterismo",
    year: 1891,
  },
  {
    id: 5,
    text: "Isang beses lamang mamamatay ang tao, at kung hindi itoiging mabuti, mawawala ang pagkakataon at hindi na muling babalik.",
    source: "Liham sa kanyang pamilya",
    year: 1892,
  },
  {
    id: 6,
    text: "Ang kabataan ang pag-asa ng ating bayan.",
    source: "El Filibusterismo",
    year: 1891,
  },
  {
    id: 7,
    text: "Namatay akong hindi nakikita ang liwanag ng araw sa aking minamahal na bayan. Kayo, na makakakita nito, tanggapin ninyo ito — at huwag kalimutan ang mga nahulog sa gabi.",
    source: "Mi Ultimo Adios",
    year: 1896,
  },
  {
    id: 8,
    text: "Kung walang kalayaan, walang liwanag.",
    source: "Noli Me Tangere",
    year: 1887,
  },
  {
    id: 9,
    text: "Ang kaalaman ay pamana ng sangkatauhan, ngunit ang matapang lamang ang nagmamana nito.",
    source: "Liham kay Blumentritt",
    year: 1888,
  },
  {
    id: 10,
    text: "Mas matalas ang panulat kaysa espada.",
    source: "Noli Me Tangere",
    year: 1887,
  },
  {
    id: 11,
    text: "Upang mahulaan ang kinabukasan ng isang bayan, kailangang malaman ang kanilang nakaraan.",
    source: "Ang Pilipinas Pagkaraan ng Sandaang Taon",
    year: 1889,
  },
  {
    id: 12,
    text: "Hindi ako nagsusulat para sa kasalukuyang henerasyon. Nagsusulat ako para sa ibang panahon. Kung ako'y mababasa ngayon, susunugin nila ang aking mga aklat.",
    source: "Noli Me Tangere",
    year: 1887,
  },
];
