import React from "react";
import Perfil from "../assets/logos/perfil.webp";
import Logo from "../assets/logos/logo.png";

function About() {
  return (
    <div id="about" className="min-h-screen flex flex-wrap bg-gray-200 relative">
      <div className="flex flex-col items-center justify-center lg:w-1/2 w-full sm:mt-4 pt-1 pb-1">
        {/* Contenido del primer div superior */}

        <img className="h-64" src={Perfil} alt="Perfil" />
        <a target="_blank" href="https://www.tiantech.com.ar">
          <p className="text-xl italic text-zinc-400">
            Co-fundador de Tiantech+
          </p>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/2 w-full p-4 pt-0 pb-1">
        {/* Contenido del segundo div superior */}
        <p className="text-2xl text-center lg:leading-loose sm:leading-normal text-zinc-600">
          ¡Hola! <span className="font-semi-bold italic" >Soy Sebastián Macharette, Programador Full Stack </span>con una fuerte
          especialización en Frontend y Diseño UI/UX. Me apasiona transformar tus
          ideas y sueños digitales en soluciones concretas y funcionales.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/2 w-full p-4 pt-1 pb-0 lg:-mt-8">
        {/* Contenido del primer div inferior */}
        <p className="text-2xl text-center lg:leading-relaxed sm:leading-normal text-zinc-600">
          <span className="font-bold italic" >Mi misión </span>es llevar tus visiones al siguiente nivel, utilizando las
          últimas tecnologías y las mejores prácticas de la industria. Desde la
          conceptualización hasta la implementación, trabajo estrechamente
          contigo para asegurar que cada detalle se alinee con tu visión y
          objetivos.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-1/2 w-full p-4 pt-1 pb-0 lg:absolute lg:top-0 lg:right-0 lg:mt-80">
        {/* Contenido del segundo div inferior */}
        <img className="h-40 lg:mr-4" src={Logo} alt="Logo" />
        <p className="text-xl text-center lg:text-left italic text-zinc-400">
          Permíteme ayudarte a dar vida a tus proyectos digitales con
          creatividad, innovación y precisión técnica. Juntos, podemos hacer
          realidad cualquier idea que tengas en mente.
        </p>
      </div>
    </div>
  );
}

export default About;
