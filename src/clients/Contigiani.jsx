import React from "react";
import Logo from "../assets/clients/belen.jpg";
function Contigiani() {
  return (
    <div className="lg:mt-6 sm:mt-2 flex justify-center items-center">
  <div className="max-w-sm p-1 bg-purple-500 border-gray-200 rounded-lg shadow-xl">
    <div className="flex justify-center items-center">  
    <img className="w-36 h-36 rounded-full" src={Logo} alt="Rounded avatar"/>
    </div>
    <div className="text-center">
      <h3 className="mb-2 mt-4 text-2xl font-semibold text-white tracking-tight">
        Dra. Maria Belén Contigiani
      </h3>
      <h5 className="mb-2 text-xl font-semibold text-white tracking-tight">
        Medica Generalista
      </h5>
    </div>
    <p className="mb-3 font-normal text-gray-200 dark:text-gray-400 text-center">
    Realmente ha superado mis expectativas en términos de estética y funcionalidad. ¡Una experiencia de usuario excepcional!   </p>
  </div>
</div>

  
  );
}

export default Contigiani;
