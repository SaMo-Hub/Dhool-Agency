import React, { useState, forwardRef } from "react";
import NotionComponenet from "./NotionComponenet";
import { Fenetre } from "./Fenetre";

const Notion = forwardRef((props, ref) => {
  const [isHovering, setIsHovering] = useState(false);

  const listAvancement = [
    { text: "Onboarding", pourcent: 100 },
    { text: "Onboarding", pourcent: 100 },
    { text: "Onboarding", pourcent: 80 },
    { text: "Onboarding", pourcent: 20 },
    { text: "Onboarding", pourcent: 100 },
    { text: "Onboarding", pourcent: 80 },
    { text: "Onboarding", pourcent: 60 },
    { text: "Onboarding", pourcent: 100 },
    { text: "Onboarding", pourcent: 90 },
    { text: "Onboarding", pourcent: 20 },
  ];

  return (
    <div
      ref={ref}
      className="border-[#ffffff28] border bg-[#080808] relative overflow-hidden font-urbanist text-xs  text-white rounded-xl w-[2000px]"
    >
      <div className="absolute h-full w-full bgr"></div>
      <div className="absolute h-full w-full shadows"></div>

                   <Fenetre/>
      

      {/* Contenu principal */}
      <div className="bg-[#0e0e0e] overflow-hidden p-12 text-[#ffffff] bg-gradient-to-b from-[#171717] to-[#0F0F0F] w-fit gap-3">
        <div className="h-20 w-20 rounded-xl flex items-center justify-center bg-violet-500">
          Logo
        </div>
        <h2 className="mt-3 font-medium text-xl">Lavender Cake - Formule Take Off</h2>

        {/* Avancement du projet */}
        <div className="flex items-center mt-8 gap-3">
          <div className="w-5 h-5  bg-white"></div>
          <p className="text-sm">Avancement du projet</p>
        </div>

        <div className="grid gap-3 h-40 mt-4 grid-cols-4 w-full">
          {listAvancement.map((item, index) => (
            <NotionComponenet key={index} index={index + 1} text={item.text} pourcent={item.pourcent} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Notion;
