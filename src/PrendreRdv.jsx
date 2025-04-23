import React, { useEffect } from "react";
import TitreH2 from "./titreH2";
import Cal, { getCalApi } from "@calcom/embed-react";
import Button from "./components/Button";

export const PrendreRdv = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "45-min-meeting-zoom" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="mt-40 mx-10 md:mx-20">

      <TitreH2 text1={"Prenons un moment ensemble,"} text2={"pour parlez de votre projet"} />
      
      <Cal className="" namespace="45-min-meeting-zoom"
	  calLink="dhool-agency-yqjwt6/45-min-meeting-zoom"
	  style={{height:"100%",}}
	  config={{"layout":"month_view","theme":"dark"}}
    
	  
	/>
            <div className="flex flex-col   gap-2 justify-center items-center ">
            <h3 className=" font- text-[#7D7D7D] font-urbanist text-lg ">
            Préférer parler parler par mail ?
              </h3>
              <Button mail={true} secondary={true} text={"Envoyer un mail"} />
            </div>
             
        

            
    </div>
  );
};
