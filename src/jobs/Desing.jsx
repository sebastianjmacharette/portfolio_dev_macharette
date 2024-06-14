import React, { useState } from "react";
import "../assets/Modales.css";
import Figma from "../assets/desing/timetamer.png";
import Mola from "../assets/desing/portada.png";

function Desing() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Contenido de la tarjeta */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={Mola} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Diseño UI/UX
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Trabajos y prácticas de Diseño UI/UX, prototipos funcionales, Benchmarking, Planteamiento y Research, Focus Group, Point Of View, Storytelling y Storyboard y más.
          </p>

          <button
            onClick={openModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-slate-700 focus:ring-4 focus:outline-none"
          >
            Ver más
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-custom flex items-start justify-center overflow-auto bg-black bg-opacity-75">
          <div className="relative z-60 w-full max-w-2xl p-8 mx-auto bg-gray-600 rounded-lg shadow-lg dark:bg-gray-800 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Primer bloque de contenido */}
              <div className="flex flex-col space-y-4 mb-4 md:mb-0 md:pr-4">
                <h2 className="text-xl text-center text-white font-semibold">TimeTamer</h2>
                {/* Imagen con enlace al PDF */}
                <div>
                  <a
                    href="\src\assets\pdf\timetamer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Figma}
                      alt="Descripción de la imagen"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </a>
                </div>
              </div>
              {/* Segundo bloque de contenido */}
              <div className="flex flex-col space-y-4">
                <div className="mb-4">
                  {/* Insertar segundo bloque de contenido */}
                </div>
              </div>
            </div>
            {/* Botón para cerrar el modal */}
            <div className="flex justify-end items-start mt-4">
              <button
                onClick={closeModal}
                className="bg-slate-800 px-4 py-2.5 rounded-lg text-white hover:bg-white hover:text-slate-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Desing;
