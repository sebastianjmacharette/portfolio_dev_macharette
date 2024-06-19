import React from "react";
import Perfil from "../assets/logos/perfil.webp";
import Logo from "../assets/logos/logo.png";

function About() {
  return (
    <div id="about" className="min-h-screen flex flex-wrap bg-slate-100 relative">
      <div className="inline-flex lg:mt-0 sm:mt-4 items-center justify-center w-full">
        <hr className="w-full h-1 border-2 bg-purple-700" />
        <span className="absolute px-3 font-medium text-purple-700 text-xl -translate-x-1/2 bg-white left-1/2">
          Sobre mi
        </span>
      </div>
      <div className="flex flex-col items-center sm:mt-10 lg:mt-0 justify-center lg:w-1/2 w-full pt-1 pb-1">
        {/* Contenido del primer div superior */}
        <img className="h-64 p-4 rounded-3xl " src={Perfil} alt="Perfil" />
        <a target="_blank" href="https://www.tiantech.com.ar">
          <p className="text-xl italic text-purple-600 font-semibold">
            Co-fundador de Tiantech+
          </p>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/2 w-full p-4 pt-0 pb-1">
        {/* Contenido del segundo div superior */}
        <p className="text-2xl text-center lg:leading-loose sm:leading-normal text-purple-600">
          ¡Hola!{" "}
          <span className="font-semi-bold italic">
            Soy Sebastián Macharette, Programador Full Stack{" "}
          </span>
          con una fuerte especialización en Frontend y Diseño UI/UX. Me apasiona
          transformar tus ideas y sueños digitales en soluciones concretas y
          funcionales.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/2 w-full p-4 pt-1 pb-0">
        {/* Contenido del primer div inferior */}
        <p className="text-2xl text-center lg:leading-relaxed sm:leading-normal text-zinc-600">
          <span className="font-bold italic text-purple-600">Mi misión </span>es
          llevar tus visiones al siguiente nivel, utilizando las últimas
          tecnologías y las mejores prácticas de la industria. Desde la
          conceptualización hasta la implementación, trabajo estrechamente
          contigo para asegurar que cada detalle se alinee con tu visión y
          objetivos.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-1/2 w-full p-4 pt-1 pb-0  lg:mt-0 lg:flex lg:items-start">
        {/* Contenido del segundo div inferior */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gep4ZEmpFvo?si=Kg6ANKB29KLLRxDZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
