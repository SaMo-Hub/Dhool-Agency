import React from "react";
import lavendercake from "../public/images/lavender.png";
import TitreH2 from "./titreH2";
import { Link } from "react-router-dom";
import { listProjects } from "./assets/projects";

export default function VisionDevienLegende() {
  return (
    <div id="exemple" className=" mx-10 mt-20 md:mx-20 sm:mt-40 md:mt-80 font-urbanist">
      <TitreH2 text1={"Quand la vision devient"} text2={"une légende"} />
      <div className="mt-0 gap-20 flex flex-col   ">
        {listProjects.map((item,index) => (
          <div id={index} className="flex flex-col lg:items-center lg:flex-row justify-between gap-5 lg:gap-10 w-full ">
              <Link className="h-fit w-full " to={`/projets/${item.id}`}>
                <img className="opacity-20 grayscale hover:grayscale-0  full hover:opacity-80 transition-all duration-500" src={item.logo} alt="" />
              </Link>
              <div className="flex w-fit gap-2">
                {item.skill.map((item) => (
                  <div className="text-[#ffffff42] whitespace-nowrap w-fit rounded-lg bg-[#ffffff1b]  h-fit py-1  px-4">
                    <p className="flex-shrink-0">

                    {item}
                    </p>
                  </div>
                ))}
              </div>
            <div className="justify-between flex-col md:flex-row flex gap-10  md:items-end">
              <div key={item.id} className="flex flex-col gap-2 ">
                <h4 className="font-medium text-xl text-[#7d7d7d] ">
                  {item.name}
                </h4>
                {/* sm:w-[80%] md:w-[80%] */}
                <p className="leading-5 w-full  ">
                  {item.description}
                </p>
              </div>
             
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
