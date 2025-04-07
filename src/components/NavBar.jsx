import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

export const NavBar = () => {
  const navbarRef = useRef(null);
  const location = useLocation(); // 📌 Capture la location pour détecter le changement de page

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      if (window.scrollY > lastScrollY) {
        // 🔽 Scroll vers le bas : Réduire width PUIS descendre
        gsap.to(navbar, {
          width: "80px",
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(navbar, {
              y: -80,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      } else {
        // 🔼 Scroll vers le haut : Remonter PUIS élargir
        gsap.to(navbar, {
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(navbar, {
              width: "auto",
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    gsap.timeline();
    gsap.fromTo(
      navbar, // Passe un tableau d'éléments
      { y: -100 },
      { y: 0, duration: 1, ease: "power3.out", delay: 1.3 }
    );
    gsap.fromTo(
      navbar, // Passe un tableau d'éléments
      { width: "80px" },
      { width: "auto", duration: 0.7, ease: "power2.out", delay: 1.77 }
    );
  }, [location]);
  return (
    <div className="z-50 justify-center items-center w-full fixed top-8 flex font-urbanist font-medium">
      <div
        ref={navbarRef}
        className="bg-[#111111]  overflow-hidden flex gap-6 items-center justify-center text-sm border-[#ffffff1a] border rounded-full px-1 py-1  text-[#ffffff9c] w-auto"
      >
        {/* Contenu du menu */}
        <ul className=" w-[200px] hidden sm:flex pl-4 gap-5 flex-none">
          <li>
            <Link to={"/projets/1"}>Exemple</Link>
          </li>
          {/* <li>
            <Link to={"/#projets"}>Projets</Link>
          </li> */}
          <li>
            <Link to={"/#princing"}>Princing</Link>
          </li>
          <li>
            <Link to={"/#faq"}>Faq</Link>
          </li>
        </ul>

        {/* Logo (toujours visible et centré) */}
        <Link
          to={"/"}
          className="px-2 items-center justify-center flex-shrink-0"
        >
          LOGO
        </Link>

        {/* Texte à droite */}
        <div className="w-[200px] hidden sm:flex justify-end text-end flex-none">
          <Button text={"Prendre rendez-vous"} secondary={true} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
