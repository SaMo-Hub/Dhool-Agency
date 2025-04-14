import React, { useEffect } from "react";
import TitreH2 from "./titreH2";
import Cal, { getCalApi } from "@calcom/embed-react";

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
    <div className="mx-10 md:mx-20">
      <TitreH2 text1={"ggg"} text2={"fvdfg"} />
      
      <Cal className="  " namespace="45-min-meeting-zoom"
	  calLink="dhool-agency-yqjwt6/45-min-meeting-zoom"
	  style={{height:"100%",}}
	  config={{"layout":"month_view","theme":"dark"}}
    
	  
	/>
    </div>
  );
};
