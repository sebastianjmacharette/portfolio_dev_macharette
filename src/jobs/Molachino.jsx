import React, {useState} from "react";
import '../assets/Modales.css';
import Figma from '../assets/molachino/figma_mola.png';
import Mola from '../assets/molachino/one.png';
function Molachino() {
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
				<img
					className="rounded-t-lg"
					src={Mola}
					alt=""
				/>

				<div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
        Pagina principal de Molachino Viajes
					</h5>

					<p className="mb-3 font-normal text-white text-center">
						pagina web sobre la empresa, donde los padres pueden acceder al
						folleto estudiantil de la temporada, como descargar las fichas
						medicas e ingresar al control parental
					</p>
					{/* Botón para abrir el modal */}
					<button
						onClick={openModal}
					  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none 
            ">
						Ver mas
						<svg
							className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10">
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
        <h2 className="text-2xl lg:mt-10 text-white text-center font-bold mb-4">Molachino Viajes</h2>
        <p className="text-justify text-white ">
        {/* Aquí puedes agregar todo el contenido que desees dentro del modal */}
          Descubre Molachino Viajes, tu destino seguro para explorar el mundo! Con una experiencia completa en nuestro sitio web, con servicios exclusivos diseñados para tu tranquilidad y diversión. Explora destinos emocionantes, opciones de alojamiento y actividades únicas. Para los padres de egresados, ofrecemos una sección especial donde conocerán nuestras medidas de seguridad. Accede al folleto de temporada y descarga la ficha médica. Nuestro innovador sistema de control parental garantiza la seguridad de tus hijos con acceso seguro y un video descriptivo. Proyecto Frontend realizado con React Vite, React Router DOM, Tailwind CSS y librerías como Flowbite, totalmente responsive. ¡Únete a nosotros en nuestra próxima aventura y descubre el mundo con confianza!
        </p>
        <a
          target="_blanck"
          className="font-bold text-justify text-white"
          href="https://molachinoviajes.com"
        >
          https://molachinoviajes.com
        </a>
      </div>
      {/* Segundo bloque de contenido */}
      <div>
        {/* Video de YouTube */}
        <div className="mb-4">
          {/* Inserta aquí el código para incrustar el video de YouTube */}
          <iframe
            className="mt-4"
            width="315"
            height="315"
            src="https://www.youtube.com/embed/zd66YwNzqIU?si=TG8LylS_byJYPmIh"
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
            href="src\assets\pdf\mola_principal.pdf"
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

export default Molachino;
