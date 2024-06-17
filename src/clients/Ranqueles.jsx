import React from "react";
import Logo from "../assets/clients/ranwhite.png";
function Ranqueles() {
  return (
    <div className="lg:mt-6 sm:mt-2 flex justify-center items-center">
  <div className="max-w-sm p-1 bg-purple-500 border-gray-200 rounded-lg shadow-xl">
    <div className="flex justify-center items-center">  
      <img className="  p-6 h-32 mt-4 rounded" src={Logo} alt="Default avatar"/>
    </div>
    <div  className="text-center">
      <h3 className="mb-2 mt-4 text-2xl font-semibold text-white tracking-tight">
        Hotel Ranqueles
      </h3>
      <h5 className="mb-2 text-xl font-semibold text-white tracking-tight">
        Villa Carlos Paz
      </h5>
    </div>
    <p className="mb-8 font-normal text-gray-200 dark:text-gray-400 text-center">
    Su enfoque profesional y su habilidad para superar desafíos son realmente impresionantes.  </p>
  </div>
</div>

  
  );
}

export default Ranqueles;
