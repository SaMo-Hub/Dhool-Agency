import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const Button = ({text}) => {
    const buttonRef = useRef(null);
    const buttonBG = useRef(null);

  useEffect(() => {
    const buttonBg = buttonBG.current;
    const button = buttonRef.current;
    console.log(button);
    
    // Animation hover GSAP avec effet élastique
    const hoverIn = () => {
      gsap.to(buttonBg, {
        scaleX: 1.1,
        scaleY: 1.5,
        duration: 0.05,
        ease: "bounce.in"
      });
    };

    const hoverOut = () => {
      gsap.to(buttonBg, {
        scale: 1,
        duration: 0.05,
        ease: "bounce.out", // Rebond plus marqué
      });
    };

    // Ajout des événements de hover
    button.addEventListener('mouseenter', hoverIn);
    button.addEventListener('mouseleave', hoverOut);

    // Nettoyage des événements lors du démontage du composant
    return () => {
      button.removeEventListener('mouseenter', hoverIn);
      button.removeEventListener('mouseleave', hoverOut);
    };
  }, []);
    return (
        <div ref={buttonRef} className='bg-[#ffffff18] font-urbanist  relative border-[#ffffff25] overflow-hidden group border-[1px] w-fit p-2 rounded-full '>
            <div className='bg-white overflow-visible relative px-5 py-2 rounded-full  font-semibold text-black w-fit '>
             <span  className='z-10 font-medium text-sm relative'>
                {text}
            </span>
            <div ref={buttonBG} className="ease-in-out duration-300 transition-all absolute z-0 w-full h-full inset-0 rounded-full scale-y-100 scale-100 group-hover:scale-110 group-hover:scale-y-[1.5] bg-[#fafafa] "></div>
            </div>
        </div>
    );
};

export default Button;