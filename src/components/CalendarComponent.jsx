
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function CalendarComponent() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"45-min-meeting-zoom"});
		cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal className=" w-auto " namespace="45-min-meeting-zoom"
	  calLink="dhool-agency-yqjwt6/45-min-meeting-zoom"
	  style={{height:"100%",}}
	  config={{"layout":"month_view","theme":"dark"}}
    
	  
	/>;
  };