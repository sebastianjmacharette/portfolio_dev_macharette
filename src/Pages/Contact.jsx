import React from "react";
import ContactForm from "./ContactForm";
import ContactDate from "./ContacDate";

function Contact() {
  return (
    <div id="contact" className="h-full mx-auto p-1 bg-slate-100">
      <div className="inline-flex lg:mt-0 mb-4 sm:mt-4 items-center justify-center w-full">
        <hr className="w-full h-1 border-2 bg-purple-700" />
        <span className="absolute px-3 font-medium text-purple-700 text-xl -translate-x-1/2 bg-white left-1/2">
          Contacto
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="text-white lg:px-4 lg:py-2 w-full lg:w-1/3 mt-10">
            <ContactForm />
          </div>
          <div className="text-white lg:px-4 lg:py-2 w-full lg:w-1/3 mt-4 lg:mt-0">
            <ContactDate />
            <p className="text-purple-700 text-center italic text-base mt-4 indent-10">
              Permíteme ayudarte a dar vida a tus proyectos digitales con
              creatividad, innovación y precisión técnica. Juntos, podemos hacer
              realidad cualquier idea que tengas en mente.
            </p>
          </div>
          <div className="text-white lg:px-4 lg:py-2 w-full lg:w-1/3 mt-4 lg:mt-0 flex justify-center">
            {/* Puedes añadir otro componente o contenido aquí */}
            <iframe
              className="mx-auto"
              width="338"
              height="602"
              src="https://www.youtube.com/embed/tCMg3dDg3y4"
              title="Full Stack Dev"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
