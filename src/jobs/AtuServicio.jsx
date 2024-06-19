import React, { useState } from "react";
import "../assets/Modales.css";
import Figma from "../assets/atuservicio/figma.png";
import Portada from "../assets/atuservicio/portada.png";
function AtuServicio() {
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar si el modal está abierto

  // Función para abrir el modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Contenido de la tarjeta */}
      <div className="max-w-sm bg-purple-400 border border-gray-200 rounded-lg shadow shadow-purple-500  ">
        <img className="rounded-t-lg" src={Portada} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
            A tu servicio <br /> SpringBoot/Thymeleaf
          </h5>

          <p className="mb-3 font-normal text-white text-center">
            Proyecto realizado en java Spring boot con Thymeleaf donde los
            usuarios pueden buscar servicios para sus hogares como plomeros,
            gasistas, albañiles. como asi tambien puedes registrarte para
            ofrecer tus servicios
          </p>
          {/* Botón para abrir el modal */}
          <button
            onClick={openModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none 
            "
          >
            Ver mas
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
        <div className="fixed inset-0 z-custom flex items-start justify-center overflow-auto bg-black bg-opacity-75 ">
          <div className="relative z-60 w-full max-w-2xl p-8 mx-auto bg-purple-700 rounded-lg shadow-lg   mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {/* Primer bloque de contenido */}
              <div className="mb-4 md:mb-0 md:pr-4">
                <h2 className="text-2xl text-center text-white lg:mt-10 font-bold mb-4">
                  A tu servicio
                </h2>
                <p className="text-justify text-white ">
                  Este proyecto es una plataforma web desarrollada en Java
                  utilizando el framework Spring Boot, junto con Thymeleaf para
                  la capa de presentación. La aplicación permite a los usuarios
                  buscar una variedad de servicios para sus hogares, incluyendo
                  plomería, gasfitería, albañilería, y más.
				  <br /> Características Principales:<br />
                  Búsqueda de Servicios: <br /> Los usuarios pueden buscar
                  servicios específicos para sus hogares utilizando un motor de
                  búsqueda integrado. Pueden filtrar los resultados por
                  ubicación, tipo de servicio, disponibilidad, y más. Registro
                  de Usuarios: Los usuarios tienen la opción de registrarse en
                  la plataforma para acceder a funciones adicionales. Pueden
                  crear perfiles personalizados, guardar servicios favoritos, y
                  recibir notificaciones sobre ofertas y promociones. <br />
                  Ofrecimiento de Servicios: Los proveedores de servicios
                  también pueden registrarse en la plataforma para ofrecer sus
                  habilidades y expertise. Pueden crear perfiles detallados que
                  incluyan información sobre su experiencia, certificaciones, y
                  áreas de especialización. <br /> Tecnologías Utilizadas: Java Spring
                  Boot: El framework de desarrollo de aplicaciones web en Java,
                  que proporciona un entorno robusto y escalable para construir
                  aplicaciones empresariales. Thymeleaf: Un motor de plantillas
                  para la creación de vistas web en Java que permite una
                  integración fluida con el código Java en el lado del servidor.
                  JWT (JSON Web Tokens): Utilizado para la autenticación y
                  autorización de usuarios, proporcionando una capa adicional de
                  seguridad para la plataforma. MySQL: Base de datos relacional
                  utilizada para almacenar la información de usuarios,
                  servicios, y otros datos relevantes para el funcionamiento de
                  la plataforma. Bootstrap: Framework de front-end para el
                  desarrollo rápido y responsivo de interfaces de usuario, que
                  garantiza una experiencia consistente en diferentes
                  dispositivos y tamaños de pantalla.
				   
                </p>
              </div>
              {/* Segundo bloque de contenido */}
              <div>
                {/* Video de YouTube */}
                <div className="mb-4">
                  {/* Inserta aquí el código para incrustar el video de YouTube */}
                  <iframe
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/rOX6NIsb-p4?si=n5yotWHhbkKHxxNa"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                {/* Imagen con enlace al PDF */}
                <div>
                  <a
                    href="\src\assets\pdf\atuservicio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Figma}
                      alt="Descripción de la imagen"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </a>
                  <p
                  className="text-justify text-white mt-1"
                  >Beneficios del Proyecto:
                  Facilita la búsqueda y contratación de servicios para el
                  hogar, ahorrando tiempo y esfuerzo a los usuarios. Proporciona
                  una plataforma para que los proveedores de servicios
                  promocionen sus habilidades y lleguen a una audiencia más
                  amplia. Mejora la eficiencia y la transparencia en el proceso
                  de contratación de servicios, gracias a la integración de
                  funciones de búsqueda avanzada y perfiles de usuario
                  detallados. Potencial de Expansión: Integración de sistemas de
                  pago para facilitar la transacción entre usuarios y
                  proveedores de servicios. Implementación de un sistema de
                  calificaciones y comentarios para ayudar a los usuarios a
                  tomar decisiones informadas sobre los servicios. Desarrollo de
                  una aplicación móvil complementaria para acceder a la
                  plataforma desde dispositivos móviles. Conclusión: La
                  Plataforma de Servicios para Hogares es una solución integral
                  para las necesidades de mantenimiento y reparación del hogar.
                  Con su enfoque en la accesibilidad, seguridad y calidad del
                  servicio, se posiciona como una herramienta indispensable para
                  propietarios de viviendas y profesionales del sector. ¡Únete a
                  nuestra comunidad hoy mismo y descubre una nueva forma de
                  gestionar tus necesidades domésticas!</p>
                </div>
              </div>
            </div>
            {/* Botón para cerrar el modal */}
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

export default AtuServicio;
