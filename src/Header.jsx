import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import danteh from "../public/images/Miniature/danteh.png";
import Button from "./components/Button";
import { motion } from 'framer-motion';
import { ModalCalendar } from "./components/ModalCalendar";

function Header() {
  const containerRef = useRef(null);
  const containerImageRef = useRef(null);
  const containerParagpraheef = useRef(null);
  const buttonref = useRef(null);
  
  useEffect(() => {
    if (containerRef.current && containerImageRef.current) {
      const words = containerRef.current.querySelectorAll(".word");
  
      // Animation des mots
      gsap.fromTo(
        words,
        { y: 100, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.04,
          duration: 1.5,
          ease: "power3.out",
          delay:1
        }
      );
   
      const elements = containerParagpraheef.current.children; // Récupère tous les enfants
      gsap.fromTo(
        elements, // Passe un tableau d'éléments
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.2, // Délai entre chaque élément
          duration: 1.5,
          ease: "power3.out",
          delay:1
        }
      );
      // Animation de l'image avec un timeline
      gsap.timeline()
        .fromTo(containerImageRef.current, 
          { opacity: 0 }, // Commence hors de l'écran
          { opacity: 1, ease: "power3.in", duration: 0.8 }
        )
        .fromTo(containerImageRef.current,
          {y: -500},
          {
            y:0,
          filter: "blur(0px)",
          stagger: 0.04,
          duration: 1.5,
          ease: "power3.out",
         delay: 0.2,
        });
    }
  }, []);
  
  

  return (
    <motion.div id="main" className="pt-44 font-urbanist"
   
    >
      <motion.div
     animate={{ translateY: '100%', }}
     exit={{ translateY: 0 }}
     transition={{ duration: 0.6, ease:'easeIn' }}
     className='slide-out'
      />
    <motion.div
       initial={{ translateY: 0,  }}
       animate={{ translateY: '100%', }}
       transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
       className='slide-inw'
        />
      <motion.div
       animate={{ filter: "blur(0px)",}}
       exit={{ filter: "blur(10px)",}}
       transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
       >
        <ModalCalendar/>
        <div className="flex gap-10 flex-col justify-center items-center">
          <h1 ref={containerRef} className="text-center md:w-[60%] w-[70%] text-5xl mx-20 md:text-6xl lg:text-7xl font-medium font-urbanist">
          {"Devenez irrésistible sur votre marché et signez vos".split(" ").map((word, index) => (
              <div className="word inline-block mr-2" id="index">
                {word}
              </div>
           ))}
            
           {"clients de rêves".split(" ").map((word, index) => (
        <span
          key={index}
          className="word bg-gradient-to-b from-[#777777] to-[#414141] bg-clip-text text-transparent font-instrument italic pr-2 inline-block mr-2 pb-1"
        >
          {word}
        </span>
      ))}
          </h1>
      <div ref={containerParagpraheef} className="flex flex-col gap-10 items-center justify-center">

          <p  className="lg:w-[50%]   w-3/4  text-lg text-center">
            Branding, landing pages et sites marketing sur-mesure dans des
            offres packagées, démarrez en moins de 5 minutes.
          </p>
          <Button ref={buttonref} text={"Découvrir nos offres"} />
      </div>
        </div>

        <div ref={containerImageRef} className="h-[40vw] masked-text mt-40 overflow-x-hidden flex">
          <div className="images-container flex gap-5">
            {/* Image 1 */}
            <img className="h-full min-w-max" src={danteh} alt="Image 1" />
            {/* Image 2 */}
            <img className="h-full min-w-max" src={danteh} alt="Image 2" />
            {/* Image 3 */}
            <img className="h-full min-w-max" src={danteh} alt="Image 3" />
            {/* Image 4 */}
            <img className="h-full min-w-max" src={danteh} alt="Image 4" />
            {/* Dupliquer les images pour garantir un défilement continu */}
            <img className="h-full min-w-max" src={danteh} alt="Image 5" />
            <img className="h-full min-w-max" src={danteh} alt="Image 6" />
            <img className="h-full min-w-max" src={danteh} alt="Image 7" />
            <img className="h-full min-w-max" src={danteh} alt="Image 8" />
          </div>
        </div>
      </motion.div>
      <div className="flex md:flex-row sm:w-[60%] md:w-auto flex-col gap-y-10 font-medium gap-x-5 mx-10 md:mx-20  mt-20 justify-center items-center">
        <div>
          <div className="flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-xl">
              Des designs fait pour convertir votre traffic
            </h3>
          </div>
          <p className="text-[#626262]">
            Nous maximisons votre potentiel digital avec des designs qui ne font
            pas que séduire. Ils convertissent.
          </p>
        </div>

        <div>
          <div className="flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-xl">Des designs fait pour convertir votre traffic</h3>
          </div>
          <p className="text-[#626262]">
            Nous maximisons votre potentiel digital avec des designs qui ne font
            pas que séduire. Ils convertissent.
          </p>
        </div>

        <div>
          <div className="flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-xl">Des designs fait pour convertir votre traffic</h3>
          </div>
          <p className="text-[#626262]">
            Nous maximisons votre potentiel digital avec des designs qui ne font
            pas que séduire. Ils convertissent.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
