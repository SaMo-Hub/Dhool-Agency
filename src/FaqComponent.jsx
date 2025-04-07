import React, { useState } from "react";

export default function FaqComponent({ title, paragraphe }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#ffffff10] transition-all overflow-hidden relative w-full  font-urbanist font-medium rounded-xl border-[#ffffff19] border p-5 ">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer  flex gap-12 items-center justify-between"
      >
        <h4 className="text-[rgba(255,252,252,0.66)]">{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path
            d="M0.466705 0.376146C0.0762024 0.766672 0.0762024 1.39984 0.466705 1.79037L3.29514 4.61879C3.50436 4.82799 3.78317 4.92513 4.05704 4.9102C4.34964 4.9437 4.65408 4.84824 4.87851 4.62383L7.70694 1.7954C8.0975 1.40488 8.0975 0.771711 7.70694 0.381186C7.31644 -0.00934029 6.68326 -0.00934029 6.29276 0.381186L4.08939 2.58456L1.88095 0.376146C1.49039 -0.0143795 0.857269 -0.0143795 0.466705 0.376146Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>
      </div>

      <p
        dangerouslySetInnerHTML={{ __html: paragraphe }}
        className={`text-[#fffcfc42] mt-6 ${open ? "relative" : "absolute"}`}
      ></p>
    </div>
  );
}
