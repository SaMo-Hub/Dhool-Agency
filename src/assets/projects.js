import TravLogo from "/public/images/Travelicious/Logo.png";
import Trav1 from "/public/images/Travelicious/1.png";
import Trav2 from "/public/images/Travelicious/2.png";
import Trav3 from "/public/images/Travelicious/3.png";
import Trav4 from "/public/images/Travelicious/4.png";

import ThumbLogo from "/public/images/Thumbcraft/Logo.png";
import Thumb1 from "/public/images/Thumbcraft/1.png";
import Thumb2 from "/public/images/Thumbcraft/2.png";
import Thumb3 from "/public/images/Thumbcraft/3.png";
import Thumb4 from "/public/images/Thumbcraft/4.png";

import header1 from "/public/images/header/1.png";
import header2 from "/public/images/header/2.png";
import header3 from "/public/images/header/3.png";
import header5 from "/public/images/header/5.png";
import header6 from "/public/images/header/6.png";
import header7 from "/public/images/header/7.png";
import header8 from "/public/images/header/8.png";

import MontgeronLogo from "/public/images/Montgeron/Logo.png";
import LavendLogo from "/public/images/LavenderCake/Logo.png";

export const listProjects = [
  {
    id: 1,
    name: "Thumbcraft",
    logo: TravLogo,
    listImage: [
      { img:Trav1 },
      { img: Trav2 },
      { grid:[Trav3,Trav4], gridName: "grid-cols-2" },
   
    ],
    description:
      "Kosmo, a Paris-based 3D & CGI studio specializing in FOOH marketing, needed a digital presence that matched its high-end expertise. This project redefined its visual identity with a bold and stylish art direction, elevating the studio’s brand value.",
    skill: ["Web design", "Branding"],
  },
  {
    id: 2,
    name: "Thumbcraft",
    logo:ThumbLogo,
    listImage: [
      { img:Thumb1 },
      { img: Thumb2 },
      { grid:[Thumb3,Thumb4], gridName: "grid-cols-2" },
   
    ],
    description:
      "Le projet consiste à concevoir une interface utilisateur intuitive et esthétique pour un créateur de miniatures YouTube. L'objectif est de permettre aux utilisateurs, qu'ils soient novices ou expérimentés, de créer facilement des miniatures accrocheuses et professionnelles pour leurs vidéos YouTube.      ",
    skill: ["UI / UX Design", "Branding"],
  },
  {
    id: 3,
    name: "Montgeron",
    logo:MontgeronLogo,
    listImage: [
      { img:Thumb1 },
      { img: Thumb2 },
      { grid:[Thumb3,Thumb4], gridName: "grid-cols-2" },
   
    ],
    description:
      "Le projet consiste à concevoir une interface utilisateur intuitive et esthétique pour un créateur de miniatures YouTube. L'objectif est de permettre aux utilisateurs, qu'ils soient novices ou expérimentés, de créer facilement des miniatures accrocheuses et professionnelles pour leurs vidéos YouTube.      ",
    skill: ["UI / UX Design", "Branding"],
  },
  {
    id: 4,
    name: "Lavender Cake",
    logo: LavendLogo,
    listImage: [
      { img:Thumb1 },
      { img: Thumb2 },
      { grid:[Thumb3,Thumb4], gridName: "grid-cols-2" },
   
    ],
    description:
      "Le projet consiste à concevoir une interface utilisateur intuitive et esthétique pour un créateur de miniatures YouTube. L'objectif est de permettre aux utilisateurs, qu'ils soient novices ou expérimentés, de créer facilement des miniatures accrocheuses et professionnelles pour leurs vidéos YouTube.      ",
    skill: ["UI / UX Design", "Branding"],
  },
];

export const listHeader = [
  header1,
  header2,
  header3,
  header5,
  header6,
  header7,
  header8,
]