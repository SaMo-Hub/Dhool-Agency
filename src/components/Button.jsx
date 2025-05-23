import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { getCalApi } from "@calcom/embed-react";

const Button = ({ text, secondary, calendar, style, mail }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "45-min-meeting-zoom" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const buttonRef = useRef(null);
  const buttonBG = useRef(null);

  useEffect(() => {
    if (!secondary && buttonRef.current && buttonBG.current) {
      const buttonBg = buttonBG.current;
      const button = buttonRef.current;

      const hoverIn = () => {
        gsap.to(buttonBg, {
          scaleX: 1.1,
          scaleY: 1.5,
          duration: 0.05,
          ease: "bounce.in",
        });
      };

      const hoverOut = () => {
        gsap.to(buttonBg, {
          scale: 1,
          duration: 0.05,
          ease: "bounce.out",
        });
      };

      button.addEventListener("mouseenter", hoverIn);
      button.addEventListener("mouseleave", hoverOut);

      return () => {
        button.removeEventListener("mouseenter", hoverIn);
        button.removeEventListener("mouseleave", hoverOut);
      };
    }
  }, [secondary]); // Ajout de la dépendance `secondary`

  const calProps = calendar
    ? {
        "data-cal-link": "dhool-agency-yqjwt6/45-min-meeting-zoom",
        "data-cal-namespace": "45-min-meeting-zoom",
        "data-cal-config": JSON.stringify({
          layout: "month_view",
          theme: "dark",
        }),
      }
    : {};
  if (secondary) {
    return (
      <button
        {...calProps}
        className={`${style} border border-[#ffffff19] w-fit px-5 py-2 text-white bg-[#ffffff18] transition-all hover:bg-[#ffffff28] rounded-full  font-urbanist text-sm relative`}
      >
        <a href="mailto:dhool.contact@gmail.com">{text}</a>
      </button>
    );
  }

  return (
    <button
      {...calProps}
      ref={buttonRef}
      className={`${style}bg-[#ffffff18] font-urbanist relative border-[#ffffff25] overflow-hidden group border-[1px] w-fit p-2 rounded-full`}
    >
      <div className="bg-white overflow-visible relative px-5 py-2 rounded-full font-semibold text-black w-fit">
        <span className="z-10 font-medium text-sm relative">{text}</span>
        <div
          ref={buttonBG}
          className="ease-in-out duration-300 transition-all absolute z-0 w-full h-full inset-0 rounded-full scale-y-100 scale-100 group-hover:scale-110 group-hover:scale-y-[1.5] bg-[#fafafa]"
        ></div>
      </div>
    </button>
  );
};

export default Button;
