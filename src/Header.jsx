import React, { useEffect } from "react";
import { gsap } from "gsap";
import danteh from "../public/images/Miniature/danteh.png";
import Button from "./components/Button";

function Header() {
  useEffect(() => {
    const imagesContainer = document.querySelector(".images-container");
    
    // Dupliquer les images dans le conteneur pour un défilement continu
    const totalWidth = imagesContainer.scrollWidth; // Largeur totale du conteneur
    const duplicateImages = imagesContainer.cloneNode(true);
    imagesContainer.appendChild(duplicateImages); // Ajouter les images dupliquées pour garantir un défilement fluide

    // Animation pour faire défiler les images à l'infini et sans coupure
    gsap.to(imagesContainer, {
      xPercent: -100, // Déplace le conteneur d'images à -100% sur l'axe X
      repeat: -1, // Répète l'animation à l'infini
      duration: 10, // Durée du défilement complet d'une boucle
      ease: "linear", // Défilement fluide et constant
    });
  }, []);

  return (
    <div className="pt-44 font-urbanist">
      <div>
        <div className="flex gap-10 flex-col justify-center items-center">
          <h1 className="text-center lg:w-[40%] mx-20 text-8xl font-medium font-urbanist">
            On crée vos{" "}
            <span className="bg-gradient-to-b from-[#777777] swap to-[#414141] bg-clip-text text-transparent font-instrument italic ">
              <br />
              contenus vidéo
            </span>
          </h1>
          <p className="w-[30%] text-lg text-center">
            Branding, landing pages et sites marketing sur-mesure dans des
            offres packagées, démarrez en moins de 5 minutes.
          </p>
          <Button text={"Découvrir nos offres"} />
        </div>
        <div className="h-[450px] masked-text mt-40 overflow-x-hidden flex">
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
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-y-10 font-medium gap-x-5 mx-20 mt-20 justify-center items-center">
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
    </div>
  );
}

export default Header;
