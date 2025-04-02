import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import danteh from "../../public/images/Miniature/danteh.png";
import { useParams } from "react-router-dom";
import { listProjects } from "../assets/projects";
import TitreH2 from "../titreH2";
import { motion } from 'framer-motion';

export const PageProjets = () => {
  const { id } = useParams(); // Récupérer l'id de l'URL
  const projectData = listProjects.find((p) => p.id === parseInt(id)); // Trouver le projet correspondant
  const containerRef = useRef(null);
  const containerImageRef = useRef(null);
  const containerParagpraheef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Remet le scroll en haut de la page à chaque changement de route

    if (containerRef.current) {
      const words = containerRef.current.querySelectorAll(".word");

      // Animation des mots
      gsap.fromTo(
        words,
        { y: 300, opacity: 0, },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.03,
          duration: 1.2,
          ease: "power2.out",
          delay:0.5,
        }
      );

      gsap
        .fromTo(
          containerImageRef.current,
          {scale:0.8, opacity: 1,filter: "blur(10px)" }, // Commence hors de l'écran
          {scale:1, opacity: 1,           filter: "blur(0px)",
            ease: "power2.out", duration: 2 }
        )
       const elements = containerParagpraheef.current.children; // Récupère tous les enfants
             gsap.fromTo(
               elements, // Passe un tableau d'éléments
               { y: 100, opacity: 0 },
               {
                 y: 0,
                 opacity: 1,
                 filter: "blur(0px)",
                 stagger: 0.2, // Délai entre chaque élément
                 duration: 1.2,
                 ease: "power4.out",
                 delay:1.1
               }
             );
    }
  }, []);
  return (
    <div className="mx-5 sm:mx-10 md:mx-20 font-urbanist pb-32  flex flex-col gap-[10vw] md:gap-32 pt-28">
          <motion.div
             animate={{ translateY: '100%', }}
             exit={{ translateY: 0 }}
             transition={{ duration: 0.6, ease:'easeIn' }}
             className='slide-inw'
              />
            <motion.div
               initial={{ translateY: 0,  }}
               animate={{ translateY: '100%', }}
               transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
               className='slide-in'
                />
      <div className="flex flex-col gap-0">
        <h1
          ref={containerRef}

          className="text-[13vw] h-[22vw] overflow-hidden font-instrument italic word bg-gradient-to-b from-[#777777] to-[#414141] bg-clip-text text-transparent  inline-block "
        >
          {projectData.name.split("").map((word, index) => (
            <div
              className="bg-gradient-to-b from-[#151515] to-[#414141] bg-clip-text text-transparent  word inline-block "
              id="index"
            >
              {word}
            </div>
          ))}
        </h1>
        {/* <h1 className="text-6xl font-urbanist font-semibold">{projectData.name} </h1> */}
        <img ref={containerImageRef} className="z-10 rounded-lg" src={projectData.listImage[0].img} alt="" />
      </div>

      <div ref={containerParagpraheef} className="flex flex-col gap-20 sm:items-center sm:justify-center w-full">
        <div className="lg:w-2/4 w-auto sm:w-2/3 flex flex-col itemce justify-center gap-5">
          <p className="text-l">{projectData.description}</p>
          
         
          <hr />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="text-[#00000066] font-medium uppercase ">Skills</h3>
            <div className="flex gap-4">
              {projectData.skill.map((item) => (
                <p>{item} </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {projectData.listImage.slice(1).map((image, imgIndex) => (
            <div key={imgIndex}>
              {image.grid && (
                <div className={`${image.gridName} grid gap-4`}>
                  {image.grid.map((item, index) => (
                    <img key={`grid-${imgIndex}-${index}`} src={item} alt="" />
                  ))}
                </div>
              )}

              {image.img && (
                <img
                  key={`img-${imgIndex}`}
                  className="w-full"
                  src={image.img}
                  alt={`Illustration ${imgIndex + 1}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
