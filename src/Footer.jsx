import React from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation()

  

  return (
    <div className={`${location.pathname == "/" ? "bg-black text-white" : "text-black bg-white"} flex pb-40 lg:pb-20 relative inset-0 font-urbanist justify-center items-center`}>
     <div className="absolute w-2/4 blur-[100px] z-50 top-32 h-32 bg-[#ff84009e] "></div>
      <div className="absolute left-0 mx-10 md:mx-20 bottom-10 flex  flex-col lg:bottom-20 ">
        <div className="w-5 h-9 AB  bottom-8 left-0 bg-red-500"></div>
        <p>2025 © Dhool, tous droits réservés.</p>
      </div>
      <div className="flex px-[12vw] flex-wrap items-center justify-center text-center gap-3">
        <p>Contact</p>
        <p>Mentions légales</p>
        <p>Confidentalité</p>
        <p>CGV</p>
        <p>Jobs</p>
      </div>
    </div>
  );
};
