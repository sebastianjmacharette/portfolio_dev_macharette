import React, {useState} from "react";
import "../assets/Modales.css";
import Figma from "../assets/sistMedico/screenshots.png";
import Portada from "../assets/sistMedico/portada.png";
function MedicOne() {
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
			<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<img className="rounded-t-lg" src={Portada} alt="" />

				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Sistema Medico <br /> Java Swing
					</h5>

					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Sistema medico realizado en Java Swing para sistema operativos windows, autoinstalable con base de datos SliLite, de interfaz intuitiva y facil de entender
					</p>
					{/* Botón para abrir el modal */}
					<button
						onClick={openModal}
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-slate-800 rounded-lg hover:bg-slate-700 focus:ring-4 focus:outline-none 
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
					<div className="relative z-60 w-full max-w-2xl p-8 mx-auto bg-gray-600 rounded-lg shadow-lg dark:bg-gray-800 mt-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
							{/* Primer bloque de contenido */}
							<div className="mb-4 md:mb-0 md:pr-4">
								<h2 className="text-2xl text-white text-center lg:mt-10 font-bold mb-4">
									Sistema medico autoinstalable para windows
								</h2>
								<p className="text-justify text-white ">
									El Sistema Médico es una solución integral diseñada para la
									gestión eficiente de pacientes, especialmente dirigida a
									médicos en inicio de su práctica. Desarrollado en Java con una
									interfaz gráfica en Java Swing, este sistema ofrece una
									experiencia intuitiva y fácil de usar. Utilizando una base de
									datos SQLite, garantiza un almacenamiento seguro y confiable
									de la información médica. Este proyecto ha sido compilado en
									un archivo ejecutable (.exe) y luego convertido en un archivo
									autoejecutable para facilitar su implementación. Esta
									característica permite que los médicos accedan rápidamente al
									sistema sin la necesidad de configuraciones complejas. Una de
									las principales funcionalidades del Sistema Médico es la
									capacidad de gestionar consultas médicas de manera
									cronológica. Los médicos pueden registrar y acceder fácilmente
									al historial médico de sus pacientes, lo que facilita un
									seguimiento preciso y efectivo de su evolución de salud.
									Además de su eficacia en la gestión de consultas, este sistema
									se destaca por ser una opción económica y práctica para
									médicos que están comenzando su carrera. 
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
										src="https://www.youtube.com/embed/Y1KhVB1JanU?si=_C8KeftO3Kpqxrqq"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerpolicy="strict-origin-when-cross-origin"
										allowfullscreen></iframe>
								</div>
								{/* Imagen con enlace al PDF */}
								<div>
									<a
										href="\src\assets\pdf\SistemaMedicoJavaSwing.pdf"
										target="_blank"
										rel="noopener noreferrer">
										<img
											src={Figma}
											alt="Descripción de la imagen"
											className="w-full rounded-lg shadow-lg"
										/>
									</a>
								</div>
								<p
								className="text-justify text-white mt-1"
								>Su interfaz intuitiva
									reduce la curva de aprendizaje, permitiendo a los usuarios
									familiarizarse rápidamente con todas las funciones
									disponibles. En resumen, el Sistema Médico ofrece una solución
									completa y accesible para la gestión de pacientes, brindando a
									los médicos una herramienta confiable y eficiente para su
									práctica clínica diaria.</p>
							</div>
						</div>
						{/* Botón para cerrar el modal */}
						<div className="flex justify-end items-start mt-4">
							<button
								onClick={closeModal}
								className="bg-slate-800 px-4 py-2.5 rounded-lg text-white hover:bg-white hover:text-slate-800">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default MedicOne;
