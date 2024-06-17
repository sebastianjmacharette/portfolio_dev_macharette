import React from "react";
import Logo from "../assets/clients/molachino.png";
function Molachino() {
  return (
    <div className="lg:mt-6 sm:mt-2 flex justify-center items-center">
      <div className="max-w-sm p-1 bg-purple-500 border-gray-200 rounded-lg shadow-xl">
        <div className="flex justify-center items-center">
          <img className=" px-4 h-20 mt-16  " src={Logo} alt="Default avatar" />
        </div>
        <div   className="text-center">
          <h3 className="mb-2 mt-4 text-2xl font-semibold text-white tracking-tight">
            Molachino Viajes
          </h3>
          <h5 className="mb-2 text-xl font-semibold text-white tracking-tight">
            Empresa de Viajes y Tusrismo
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-200 dark:text-gray-400 text-center">
          Su habilidad para convertir nuestras ideas en una realidad funcional y
          estéticamente agradable fue verdaderamente impresionante.{" "}
        </p>
      </div>
    </div>
  );
}

export default Molachino;
