import React, { useState } from "react";
import "../assets/Modales.css";
import Portada from "../assets/wordpress/portada.png";

function Wordpress() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={Portada} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wordpress <br />
            Practicas
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Explorando WordPress para conocer sus funciones y limitaciones, para justificar con conocimiento de la causa por qué el desarrollo web a medida o personalizado es mejor y mucho más profesional, seguro y escalable.
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

      {modalOpen && (
        <div className="fixed inset-0 z-custom flex items-start justify-center overflow-auto bg-black bg-opacity-75">
          <div className="relative z-60 w-full max-w-2xl p-8 mx-auto bg-gray-600 rounded-lg shadow-lg dark:bg-gray-800 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4 mb-4 md:mb-0 md:pr-4">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/TLPler4HNO0?si=6Ns6pM1rjgmwrCXO"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/Rmy1fjV7tA8?si=tNE1kgzl1Uk4JOqq"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/B_dxb06tFY4?si=0J-6xIVcrGDtYK68"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col space-y-4">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/0TPuGcIiw6E?si=EftekLY_4dGhg0BJ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/rOFRIJ2hqgg?si=sfBm6yt3wCNMUnpj"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/4rWaMEdOIVo?si=DzF2m4dOitQCLpfg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
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

export default Wordpress;
