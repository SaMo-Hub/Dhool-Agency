import TravLogo from "/public/images/Travelicious/Logo.png";
import Travlogoexplication from "/public/images/Travelicious/logoexplication.png";
import Travmockuplogo from "/public/images/Travelicious/iphonelogo.png";
import Travlogovariante from "/public/images/Travelicious/logovariante.png";
import Travui1 from "/public/images/Travelicious/ui1.png";
import Travui2 from "/public/images/Travelicious/ui2.png";
import Travallframe from "/public/images/Travelicious/allframe.png";


import ThumbLogo from "/public/images/Thumbcraft/Logo.png";
import Thumb1 from "/public/images/Thumbcraft/1.png";
import Thumb2 from "/public/images/Thumbcraft/2.png";
import Thumb3 from "/public/images/Thumbcraft/3.png";
import Thumb4 from "/public/images/Thumbcraft/4.png";
import Thumbwebsite from "/public/images/Thumbcraft/fullwebsite.png";
import Thumbdesktop from "/public/images/Thumbcraft/desktop.png";
import Thumbphone from "/public/images/Thumbcraft/phone.png";
import Thumbsectionvideo from "/public/images/Thumbcraft/sectionvideo.png";
import Thumballframe from "/public/images/Thumbcraft/allframe.png";

import header1 from "/public/images/header/1.png";
import header2 from "/public/images/header/2.png";
import header3 from "/public/images/header/3.png";
import header5 from "/public/images/header/5.png";
import header6 from "/public/images/header/6.png";
import header7 from "/public/images/header/7.png";
import header8 from "/public/images/header/8.png";

import MontgeronLogo from "/public/images/Montgeron/Logo.png";
import LavendLogo from "/public/images/LavenderCake/Logo.png";
import LavendLogo2 from "/public/images/LavenderCake/logo2.png";

import KhanLogo from "/public/images/Khan/logo.png";
import KhanLogo2 from "/public/images/Khan/logo2.png";
import Khansection from "/public/images/Khan/sectionvideo.png";
import KhansFullwebsite1 from "/public/images/Khan/fullwebsite1.png";
import KhansFullwebsite2 from "/public/images/Khan/fullwebsite2.png";
import Khanallframe from "/public/images/Khan/allframe.png";
import Khanlogovariation from "/public/images/Khan/logovariation.png";

import ClefLogo from "/public/images/Clef-des-orges/Logo.png";
import Clef1 from "/public/images/Clef-des-orges/1.png";
import Clef2 from "/public/images/Clef-des-orges/2.png";
import Clef3 from "/public/images/Clef-des-orges/3.png";
import Clef4 from "/public/images/Clef-des-orges/4.png";
import ClefLclef from "/public/images/Clef-des-orges/clef.png";
import Cleflogobanner from "/public/images/Clef-des-orges/logobanner.png";
import Clefbanner from "/public/images/Clef-des-orges/banner.png";



export const listProjects = [
 
  {
    id: 2,
    name: "Thumbcraft",
    logo:ThumbLogo,
    listImage: [
      { img:Thumb1 },
      { img: Thumbsectionvideo },
      { img: Thumbwebsite },
      { img: Thumbdesktop },
      { img: Thumbphone },
      { img: Thumballframe },
    ],
    description:
      "Le projet consiste à concevoir une interface utilisateur intuitive et esthétique pour un créateur de miniatures YouTube. L'objectif est de permettre aux utilisateurs, qu'ils soient novices ou expérimentés, de créer facilement des miniatures accrocheuses et professionnelles pour leurs vidéos YouTube.      ",
    skill: ["UI / UX Design", "Branding"],
  },
  {
    id: 5,
    name: "Khan Construction",
    logo: KhanLogo,
    listImage: [
      { img:KhanLogo },
      { img: Khansection },
      { img: Khanlogovariation },
      { img: KhansFullwebsite1 },
      { img: KhansFullwebsite2 },
      { img: Khanallframe },
   
    ],
    description:
      "Le projet consiste à concevoir une interface utilisateur intuitive et esthétique pour un créateur de miniatures YouTube. L'objectif est de permettre aux utilisateurs, qu'ils soient novices ou expérimentés, de créer facilement des miniatures accrocheuses et professionnelles pour leurs vidéos YouTube.      ",
    skill: ["Web design",],
  },
  // {
  //   id: 3,
  //   name: "Montgeron",
  //   logo:MontgeronLogo,
  //   listImage: [
  //     { img:Thumb1 },
  //     { img: Thumb2 },
  //     { grid:[Thumb3,Thumb4], gridName: "grid-cols-2" },
   
  //   ],
  //   description:
  //     "Le projet consiste à concevoir une interface utilisateur intuitive et esthétique pour un créateur de miniatures YouTube. L'objectif est de permettre aux utilisateurs, qu'ils soient novices ou expérimentés, de créer facilement des miniatures accrocheuses et professionnelles pour leurs vidéos YouTube.      ",
  //   skill: ["UI / UX Design", "Branding"],
  // },
  // {
  //   id: 4,
  //   name: "Lavender Cake",
  //   logo: LavendLogo2,
  //   listImage: [
  //     { img:Thumb1 },
  //     { img: Thumbsectionvideo },
  //     { img: Thumbwebsite },
  //     { img: Thumbdesktop },
  //     { img: Thumbphone },
  //     { img: Thumballframe },
     
   
  //   ],
  //   description:
  //     "Le projet consiste à concevoir une interface utilisateur intuitive et esthétique pour un créateur de miniatures YouTube. L'objectif est de permettre aux utilisateurs, qu'ils soient novices ou expérimentés, de créer facilement des miniatures accrocheuses et professionnelles pour leurs vidéos YouTube.      ",
  //   skill: ["UI / UX Design", "Branding"],
  // },
 
  {
    id: 1,
    name: "Travelicious",
    logo: TravLogo,
    listImage: [
      { img:TravLogo },
      { img: Travlogoexplication },
      { img: Travmockuplogo },
      { img: Travlogovariante },
      { img: Travui1 },
      { img: Travui2 },
      { img: Travallframe },
    ],
    description:
      "Kosmo, a Paris-based 3D & CGI studio specializing in FOOH marketing, needed a digital presence that matched its high-end expertise. This project redefined its visual identity with a bold and stylish art direction, elevating the studio’s brand value.",
    skill: ["UI / UX Design", "Logo"],
  },
  {
    id: 6,
    name: "Clef des orges",
    logo: ClefLogo,
    listImage: [
      { img:Cleflogobanner },
      { img:Clefbanner },
      { img:Clef2 },
      { img:Clef3 },
      { img:Clef4 },
      { img:Clef1 },
   

    ],
    description:
      "Kosmo, a Paris-based 3D & CGI studio specializing in FOOH marketing, needed a digital presence that matched its high-end expertise. This project redefined its visual identity with a bold and stylish art direction, elevating the studio’s brand value.",
    skill: ["UI / UX Design", "Logo"],
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