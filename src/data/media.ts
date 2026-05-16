export interface MediaItem {
  id: string;
  title: string;
  type: "movie" | "tv" | "theater" | "comic" | "social" | "educational";
  description: string;
  year?: number;
  imageUrl: string;
  embedUrl?: string;
  highlights: string[];
}

export const mediaItems: MediaItem[] = [
  {
    id: "jose-rizal-1998",
    title: "Jose Rizal (1998 Film)",
    type: "movie",
    description:
      "Isang palatandaang pelikulang biyograpikal na idinirek ni Marilou Diaz-Abaya, pinagbibidahan ni Cesar Montano bilang Jose Rizal. Pinagsasama ng pelikula ang buhay ni Rizal sa mga eksena mula sa kanyang mga nobelang Noli Me Tangere at El Filibusterismo. Ito ay naging kritikal at komersyal na tagumpay, nanalo ng maraming parangal kabilang ang 17 nominasyon sa Gawad Urian.",
    year: 1998,
    imageUrl: "",
    highlights: [
      "Isa sa mga pinakakilalang pelikulang Pilipino sa lahat ng panahon",
      "Nanalo ng 17 Gawad Urian Awards",
      "Pinagbidahan ni Cesar Montano bilang Jose Rizal",
      "Nagtatampok ng muling pagsasadula ng Noli Me Tangere at El Filibusterismo",
      "Opisyal na entry sa 71st Academy Awards",
    ],
  },
  {
    id: "bayaning-third-world",
    title: "Bayaning Third World (2000)",
    type: "movie",
    description:
      "Isang postmodernong pelikula na idinirek ni Mike de Leon na may metà na pagdulog sa kuwento ni Rizal. Ipinapakita ng pelikula ang isang kathang-isip na dokumentaryo na nag-iimbestiga sa 'tunay na kuwento' ni Rizal, partikular ang kontrobersiya ng retraksyon. Sinusuri nito kung paano itinatayo at ikinokomersyal ang pagiging bayani ni Rizal sa lipunang Pilipino.",
    year: 2000,
    imageUrl: "",
    highlights: [
      "Makabagong meta-narrative approach sa pagkukuwento ng kasaysayan",
      "Tinuklas ang kontrobersiya ng umano'y retraksyon ni Rizal",
      "Idinirek ng kilalang filmmaker na si Mike de Leon",
      "Nanalo ng Best Picture sa 2000 Gawad Urian Awards",
      "Isang nakapag-iisip na pag-dekonstruk ng pagsamba sa bayani",
    ],
  },
  {
    id: "rizal-sa-dapitan",
    title: "Rizal sa Dapitan (1997)",
    type: "movie",
    description:
      "Isang pelikulang idinirek ni Tikoy Aguiluz na nakatuon sa apat na taong pagkatapon ni Rizal sa Dapitan. Pinagbibidahan ni Albert Martinez bilang Rizal, tinuklas ng pelikula ang kanyang buhay bilang magsasaka, doktor, guro, at mangingibig habang siya'y nakadestiyero. Nag-aalok ito ng mas intimong paglalarawan kay Rizal malayo sa politikal na spotlight.",
    year: 1997,
    imageUrl: "",
    highlights: [
      "Nakatuon sa mga taon ng pagkatapon ni Rizal sa Dapitan",
      "Intimong paglalarawan ng personal na buhay ni Rizal",
      "Idinirek ng kilalang filmmaker na si Tikoy Aguiluz",
      "Itinatampok ang romansa ni Rizal kay Josephine Bracken",
      "Ipinapakita ang kanyang gawaing komunidad sa Dapitan",
    ],
  },
  {
    id: "el-filibusterismo-musical",
    title: "El Filibusterismo (Musical Play)",
    type: "theater",
    description:
      "Isang stage musical adaptation ng ikalawang nobela ni Rizal ng Tanghalang Pilipino. Binibigyang buhay ng produksyon ang mga tauhan at tema ng El Filibusterismo sa pamamagitan ng awit, sayaw, at dramatikong pagtatanghal, na ginagawang accessible ang akda ni Rizal sa kontemporaryong audience.",
    year: 2020,
    imageUrl: "",
    highlights: [
      "Produksyon ng Tanghalang Pilipino",
      "Nagtatampok ng orihinal na musical score",
      "Modernong adaptasyon ng klasikal na panitikan",
      "Itinanghal sa Cultural Center of the Philippines",
      "Nakatanggap ng kritikal na pagbubunyi para sa artistikong direksyon",
    ],
  },
  {
    id: "noli-tv-series",
    title: "Noli Me Tangere (Serye sa TV)",
    type: "tv",
    description:
      "Isang adaptasyon sa telebisyon ng Noli Me Tangere ni Jose Rizal na ginawa para sa Philippine television. Dinala ng serye ang mga klasikong tauhan ni Rizal sa bagong henerasyon ng manonood, na isinadula ang mga kawalan ng katarungan at mga kwento ng pag-ibig na nagbibigay-kahulugan sa nobela.",
    year: 1993,
    imageUrl: "",
    highlights: [
      "Nagdala ng Noli Me Tangere sa pangunahing madlang telebisyon",
      "Nagtatampok ng ensemble cast ng mga artistang Pilipino",
      "Nakatulong sa pagpapasikat ng nobela ni Rizal sa nakababatang henerasyon",
      "Ipinakita sa pangunahing network ng telebisyon sa Pilipinas",
    ],
  },
  {
    id: "rizal-comics",
    title: "Jose Rizal: Ang Graphic Novel",
    type: "comic",
    description:
      "Isang graphic novel na adaptasyon ng buhay at mga akda ni Rizal, gamit ang sequential art upang ikwento ang kwento ng pambansang bayani. Ginagawang accessible ng visual na format ang kwento ni Rizal sa mga nakababatang mambabasa at mahilig sa komiks, na pinagsasama ang katumpakang pangkasaysayan at nakakaakit na sining.",
    year: 2011,
    imageUrl: "",
    highlights: [
      "Visually engaging format para sa nakababatang audience",
      "Sumasaklaw sa buong buhay ni Rizal",
      "Mga artistang Pilipino ang gumawa at sumulat",
      "Ginagamit sa mga paaralan bilang pandagdag na babasahin",
      "Bahagi ng serye ng graphic novel ng mga bayaning Pilipino",
    ],
  },
  {
    id: "rizal-tiktok",
    title: "Rizal sa Social Media",
    type: "social",
    description:
      "Sa mga nakaraang taon, natagpuan ni Jose Rizal ang bagong audience sa mga social media platform tulad ng TikTok, Instagram, at YouTube. Gumagawa ang mga content creator ng short-form na nilalaman tungkol sa buhay ni Rizal, mga quotable lines mula sa kanyang mga nobela, at mga pagsusuring pangkasaysayan na umaabot sa milyong kabataang Pilipino. Ang mga hashtag tulad ng #RizalTikTok at #KnowYourHero ay regular na nagte-trend.",
    imageUrl: "",
    highlights: [
      "Ang nilalaman tungkol kay Rizal ay umaabot sa milyong kabataang Pilipino",
      "Ang mga TikTok trend tulad ng 'Rizal Challenge' ay nagtataguyod ng kamalayang pangkasaysayan",
      "Ang mga Instagram infographic ay ginagawang accessible ang mga akda ni Rizal",
      "Ang mga YouTube documentary ay tinutuklas ang buhay ni Rizal nang malalim",
      "Nakatulong sa pag-demystify kay Rizal para sa Gen Z audience",
    ],
  },
  {
    id: "rizal-deped",
    title: "Rizal sa Edukasyong K-12",
    type: "educational",
    description:
      "Ang buhay at mga akda ni Jose Rizal ay sapilitang bahagi ng Philippine K-12 curriculum. Ang Rizal Law (RA 1425) ay nag-aatas sa lahat ng paaralan na ituro ang mga nobela ni Rizal. Nagpapaunlad ang mga institusyong pang-edukasyon ng interactive learning modules, digital resources, at experiential learning activities upang maengganyo ang mga estudyante sa pamana ni Rizal.",
    imageUrl: "",
    highlights: [
      "Sapilitan sa ilalim ng Republic Act 1425 (Rizal Law)",
      "Integrated sa maraming antas ng baitang",
      "Mga digital learning module na binuo ng DepEd",
      "Mga school museum at Rizal shrine na ginagamit para sa field trips",
      "Taunang pagdiriwang ng Rizal Day sa lahat ng paaralan",
    ],
  },
  {
    id: "rizal-manga",
    title: "Rizal: Ang Manga Adaptation",
    type: "comic",
    description:
      "Isang Japanese-style na manga adaptation ng buhay ni Jose Rizal, na ginawa ng mga artistang Pilipino. Ang manga format ay napatunayang epektibo sa pag-engganyo sa mga batang mambabasa, pinagsasama ang sikat na visual style ng Japanese comics at kasaysayan at kabayanihang Pilipino.",
    year: 2014,
    imageUrl: "",
    highlights: [
      "Japanese manga art style na inilapat sa kasaysayan ng Pilipinas",
      "Sikat sa mga teenager na mambabasa",
      "Isinalin sa maraming diyalektong Pilipino",
      "Ipinamahagi sa mga pampublikong paaralan sa buong bansa",
      "Tapat na sumusunod sa mga pangyayaring pangkasaysayan ng buhay ni Rizal",
    ],
  },
  {
    id: "rizal-documentary",
    title: "Rizal: Ang Dokumentaryo",
    type: "educational",
    description:
      "Isang komprehensibong seryeng dokumentaryo na ginawa ng GMA Network at iba pang production companies na tumutuklas sa buhay ni Rizal sa pamamagitan ng expert interviews, location shooting sa mga historical sites, at dramatic reenactments. Sumasaklaw ang mga dokumentaryo sa parehong kilala at hindi gaanong kilalang aspeto ng kwento ni Rizal.",
    year: 2012,
    imageUrl: "",
    highlights: [
      "Nagtatampok ng historical experts at Rizal scholars",
      "Location shooting sa Pilipinas, Europa, at Asya",
      "Malawakang saklaw ng paglalakbay at pagkatapon ni Rizal",
      "Digitally restored archival materials",
      "Companion educational materials para sa mga paaralan",
    ],
  },
];
