import React from "react";
import Logo from "../assets/clients/giachetta.png";
function Giachetta() {
  return (
    <div className="lg:mt-6 sm:mt-2 flex justify-center items-center">
  <div className="max-w-sm p-1 bg-slate-600 border-gray-200 rounded-lg shadow">
    <div className="flex justify-center items-center">  
      <img className="w-32 h-32 mt-4 rounded" src={Logo} alt="Default avatar"/>
    </div>
    <div  className="text-center">
      <h3 className="mb-2 mt-4 text-2xl font-semibold text-white tracking-tight">
        Transporte Giachetta
      </h3>
      <h5 className="mb-2 text-xl font-semibold text-white tracking-tight">
        Transporte de cargas en General
      </h5>
    </div>
    <p className="mb-3 font-normal text-gray-200 dark:text-gray-400 text-center">
    Su atención al detalle es impresionante, y su trabajo refleja un nivel de cuidado y dedicación que rara vez se encuentra.    </p>
  </div>
</div>

  
  );
}

export default Giachetta;
