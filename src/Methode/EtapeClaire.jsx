import React, { useState } from "react";
import NotionComponenet from "./NotionComponenet";
import  { forwardRef } from "react";
import { Fenetre } from "./Fenetre";

const EtapeClaire = forwardRef((props, ref) => {
    const [isHovering, setIstHovering] = useState(false)
  

  return (
    <div  ref={ref} className="border-[#ffffff1a]  border bg-[#080808] relative  text-xs  font-urbanist font-regular overflow-hidden text-white  rounded-xl w-[800px] ">
     <div className="absolute h-full w-full  bgr "></div>
      {/* <div className="absolute h-full w-full  bgr "></div> */}
      <div className="absolute h-full w-full  shadows "></div>
             <Fenetre/>
     

      <div className="overflow-hidden h-[280px]  p-12 text-[#ffffff] bg-gradient-to-b from-[#171717] to-[#0F0F0F] w-full   gap-3 ">
        <div>
          <div className="flex w-full items-baseline justify-between">
            <h2 className="w-full text-xl">02-Branding</h2>

            <div className="flex w-full  items-center gap-3">
              <p>70%</p>
              <div className="w-full h-1 bg-[#A1A1A1] rounded-full">
                <div className={`w-[70%] h-1 bg-white rounded-full`} />
              </div>
            </div>
          </div>

          <div className="mt-6 px-2 text-sm gap-3 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex">
                <p>1- Worshop Brand Vision (1H)</p>
              </div>
              <div className="bg-[#ffffff0f] rounded-full px-3 py-1 flex items-center gap-2 ">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p>Terminé</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex">
                <p>1- Worshop Brand Vision (1H)</p>
              </div>
              <div className="bg-[#ffffff0f] rounded-full px-3 py-1 flex items-center gap-2 ">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p>Terminé</p>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-30 mt-6 scale-[0.85]">
          <div className="flex w-full items-baseline justify-between">
            <h2 className="w-full text-xl">02-Branding</h2>

            <div className="flex w-full  items-center gap-3">
              <p>70%</p>
              <div className="w-full h-1 bg-[#A1A1A1] rounded-full">
                <div className={`w-[70%] h-1 bg-white rounded-full`} />
              </div>
            </div>
          </div>

          <div className="mt-6 px-2 text-sm gap-3 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex">
                <p>1- Worshop Brand Vision (1H)</p>
              </div>
              <div className="bg-[#ffffff0f] rounded-full px-3 py-1 flex items-center gap-2 ">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p>Terminé</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex">
                <p>1- Worshop Brand Vision (1H)</p>
              </div>
              <div className="bg-[#ffffff0f] rounded-full px-3 py-1 flex items-center gap-2 ">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p>Terminé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EtapeClaire;
