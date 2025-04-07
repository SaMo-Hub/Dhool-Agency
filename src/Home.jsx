import React from "react";
// import Test from './test';
import Header from "./Header";
import Logiciel from "./Logiciel";
import VisionDevienLegende from "./VisionDevienLegende";
import Princing from "./Princing";
import FAQ from "./FAQ";
import { Footer } from "./Footer";
import { motion } from 'framer-motion';
import Methode from "./Methode/Methode"
const Home = () => {
  return (
    <div className="items-center text-white bg-black ">
       
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 1) 100%)",
        }}
        className="fixed pointer-events-none bg-slate-500 z-50  h-screen w-screen "
      />

      <Header />
      <Methode />

      {/* <Logiciel /> */}
      <VisionDevienLegende/>
      <Princing />
      <FAQ />

    </div>
  );
};

export default Home;
