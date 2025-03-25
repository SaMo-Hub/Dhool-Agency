import React, { forwardRef } from "react";
import { Fenetre } from "./Fenetre";

const GoogleMeet = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="border-[#ffffff28] border bg-[#080808] text-xs overflow-hidden relative font-urbanist font-light  text-white rounded-xl w-fit"
    >
      <div className="absolute h-full w-full bgr"></div>
      <div className="absolute h-full w-full shadows"></div>
        <Fenetre/>

      {/* Contenu des écrans */}
      <div className="bg-[#0e0e0e] font-normal text-[#9F9F9F] bg-gradient-to-b from-[#171717] to-[#0F0F0F] w-fit flex gap-3 p-3">
        <div>
          <div className="w-[450px] rounded-lg flex items-center justify-center h-[460px] bg-[#ffffff09]">
            <div className="w-[78px] text-4xl flex items-center justify-center h-[78px] rounded-full bg-[#ffffff09]">
              S
            </div>
          </div>
          <p className="mt-3 pl-2">Sacha Moricet | Dhool Agency</p>
        </div>
        <div>
          <div className="w-[450px] rounded-lg flex items-center justify-center h-[460px] bg-[#ffffff09]">
            <div className="w-[78px] text-4xl flex items-center justify-center h-[78px] rounded-full bg-[#ffffff09]">
              C
            </div>
          </div>
          <p className="mt-3 mb-6">Client | Ecole</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-[200px] p-4 pl-5">
        <p className="font-semibold text-[#CECECE]">9:10 | On-Boarding</p>
        <div className="flex gap-2">
          <div className="rounded-full w-8 h-8 bg-white"></div>
          <div className="rounded-full flex w-fit h-8 bg-[#ffffff33]">
            <div className="w-8 rounded-full flex items-center justify-center">
              ^
            </div>
            <div className="w-8 h-8 rounded-full bg-[#ffffff33]"></div>
          </div>
          <div className="rounded-full flex w-fit h-8 bg-[#ffffff33]">
            <div className="w-8 rounded-full flex items-center justify-center">
              ^
            </div>
            <div className="w-8 h-8 rounded-full bg-[#ffffff33]"></div>
          </div>
          <div className="w-12 h-8 rounded-full bg-[#e60101]"></div>
        </div>
      </div>
    </div>
  );
});

export default GoogleMeet;
