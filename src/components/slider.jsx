import React from 'react';
import img from "../../public/images/lavender.png";

export const Slider = () => {
  return (
    <div className="bg-[#f7f8fd] text-[#131722] font-sans px-[50px] py-[100px]">
      <h1 className="text-center mb-10 text-2xl font-semibold">
        Financial Company
      </h1>

      <div className="overflow-hidden select-none border-y border-current text-sm py-2 flex gap-[20px]">
        {/* Premier groupe d'images */}
        <div className="list-none flex-shrink-0 min-w-full flex justify-between items-center gap-[20px] animate-scroll">
          {[...Array(6)].map((_, index) => (
          <img src={img} alt={`lavender-${index}`} className="m" />
            
          ))}
        </div>

        {/* Deuxième groupe d'images (duplicata pour animation en boucle) */}
        <ul className="list-none flex-shrink-0 min-w-full flex justify-between items-center gap-[20px] animate-scroll">
          {[...Array(6)].map((_, index) => (
            <li key={`second-${index}`} className="flex-shrink-0">
              <img src={img} alt={`lavender-${index}`} className="max-w-full" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
