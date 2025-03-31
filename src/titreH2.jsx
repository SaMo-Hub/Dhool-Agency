import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TitreH2({ textRefs, text1, text2 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const words = containerRef.current.querySelectorAll(".word");
      
      gsap.fromTo(
        words,
        { y: 35, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.04,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <h2 ref={containerRef} className="font-medium min-w- font-urbanist text-4xl md:text-5xl">
      {text1.split(" ").map((word, index) => (
        <span key={index} className="word inline-block mr-2">
          {word}
        </span>
      ))}
      <br />
      {text2.split(" ").map((word, index) => (
        <span
          key={index}
          className="word bg-gradient-to-b from-[#777777] to-[#414141] bg-clip-text text-transparent font-instrument italic pr-2 inline-block mr-2 pb-1"
        >
          {word}
        </span>
      ))}
    </h2>
  );
}
