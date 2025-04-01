import React from "react";

export const Footer = () => {
  return (
    <div className="flex pb-40 lg:pb-20 relative inset-0 font-urbanist justify-center items-center">
      <div className="absolute bottom-10  lg:bottom-auto left-20 ">
        <div className="w-5 h-9 absolute bottom-8 bg-red-500"></div>
        <p>2025 © Dhool, tous droits réservés.</p>
      </div>
      <div className="flex gap-3">
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
      </div>
    </div>
  );
};
