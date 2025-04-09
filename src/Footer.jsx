import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation()

  

  return (
    <div className={`${location.pathname == "/" ? "bg-black text-[#fefefe70]" : "text-black bg-white"} flex pb-40 lg:pb-20 relative inset-0 font-urbanist justify-center items-center`}>
      <div className="absolute left-0 mx-10 md:mx-20 bottom-10 flex  flex-col lg:bottom-20 ">
        <div className="w-5 h-9 AB  bottom-8 left-0 bg-red-500"></div>
        <p>2025 © Dhool, tous droits réservés.</p>
      </div>
      
      <div className="flex px-[12vw] flex-wrap items-center justify-center text-center gap-3">
        <p className="hover:underline hover:text-white">Contact</p>
        <Link className="hover:underline hover:text-white" to={"https://suave-expert-19c.notion.site/Mentions-l-gales-du-site-DHOOL-AGENCY-1>cedd6cf7e7d808ba3bbed2c7605830e?pvs=4"}>Mentions légales</Link>
        <Link className="hover:underline hover:text-white" to={"https://suave-expert-19c.notion.site/Politique-de-confidentialit-du-site-DHOOL-AGENCY-1cfdd6cf7e7d8025ab14f3328e921be4?pvs=4"}>Confidentalité</Link>
        <Link className="hover:underline hover:text-white" to={"https://suave-expert-19c.notion.site/Conditions-g-n-rales-de-vente-du-site-DHOOL-AGENCY-1cfdd6cf7e7d80618ebdef093ffafcf2?pvs=4"}>CGV</Link>
      </div>
    </div>
  );
};
