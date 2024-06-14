import React from "react";
import Heros from "../assets/logos/hero.webp";
import { Link } from "react-router-dom";
 function Hero() {
  return (
    <div
    id="hero"
    className="h-screen"
    >
             

      <div
        className="relative bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${Heros})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          {/* <img src="ruta/a/la/imagen.png" alt="Imagen del Hero" className="mx-auto mb-4 w-48 rounded-full" /> */}

          <h1 className="text-4xl text-slate-200 font-bold mb-4 lg:text-right sm:text-center">
            Sebastían J. Macharette
          </h1>
          <h2 className="text-2xl text-slate-200 font-bold mb-4 lg:text-right sm:text-center">
            Full Stack Developer (Especializado en FrontEnd)
          </h2>
          <h2 className="text-2xl text-slate-200 font-bold mb-4 lg:text-right sm:text-center">
            Diseñador UX/UI
          </h2>
           
          
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
