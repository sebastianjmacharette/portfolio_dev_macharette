import React, { useState } from "react";
import "../assets/Modales.css";
import Portada from "../assets/wix/portada.png";

function Wix() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="max-w-sm bg-purple-400 border border-gray-200 rounded-lg shadow shadow-purple-500  ">
      <img className="rounded-t-lg" src={Portada} alt="" />

        <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
        Wix Canva
          </h5>

          <p className="mb-3 font-normal text-white text-center">
            Conociendo y aprendiendo la utilización Wix y Canva para la
            realización de proyectos, con el fin de investigar, conocer sus
            limitaciones y funciones.
          </p>

          <button
            onClick={openModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
            text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none 
           "
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
          <div className="relative z-60 w-full max-w-2xl p-8 mx-auto bg-purple-700 rounded-lg shadow-lg   mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4 mb-4 md:mb-0 md:pr-4">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/qCjASkxtbsY?si=exAeJJI8BtHTVOGq"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/qw9_A83znuU?si=hz_bmAVHNAFSGmsa"
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
                  src="https://www.youtube.com/embed/2FwYS9uFb_U?si=9mG4GTn6YuDEHu4e"
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
                className="bg-white px-4 py-2.5 rounded-lg text-purple-700 hover:bg-purple-400 hover:text-white"
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

export default Wix;
