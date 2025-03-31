import React from "react";
import danteh from "../../public/images/Miniature/danteh.png";

export const PageProjets = () => {
  return (
    <div className="px-20 font-urbanist bg-white text-black  flex flex-col gap-32 pt-20">
      <h1 className="text-7xl font-instrument italic">name </h1>
      <img src={danteh} alt="" />

      <div className="flex flex-col gap-20 items-center justify-center w-full">
      <div className="w-2/4 flex flex-col itemce justify-center gap-5">
        <p className="text-2xl">Kosmo, a Paris-based 3D & CGI studio specializing in FOOH marketing, needed a digital presence that matched its high-end expertise. This project redefined its visual identity with a bold and stylish art direction, elevating the studio’s brand value.
        </p>
        <hr />
        <div className="flex items-center justify-between">
          <h3 className="text-[#00000066] font-medium ">TYPE</h3>
          <p>Client Work</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
        <h3 className="text-[#00000066] font-medium uppercase ">Skills</h3>
          <div className="flex gap-4">
            <p>Client Work</p>
            <p>Client Work</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
      <img src={danteh} alt="" />
      <img src={danteh} alt="" />

      </div>
    </div>
    </div>

  );
};
