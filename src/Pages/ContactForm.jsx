import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar los estilos de Toastify


function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_og7yw3h", "template_wjff0nw", form.current, {
        publicKey: "WYFt7zNeN2mUseOO6",
      })
      .then(
        () => {
          toast.success("Mensaje enviado con éxito!", { autoClose: 2000 }); // Notificación de éxito
          form.current.reset(); // Limpiar el formulario después del envío
        },
        (error) => {
          toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.", { autoClose: 2000 }); // Notificación de error
        }
      );
  };

  return (
    <div className="  shadow-2xl rounded-2xl">
      <form
        className="  mx-auto p-10 bg-gray3400 shadow-2xl rounded-2xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
          >
            Correo Electronico
          </label>
          <input
            name="user_email"
            required
            type="email"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Nombre y apellido
          </label>
          <input
            name="user_name"
            required
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Mensaje
          </label>
          <textarea
          name="message" 
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Escribe tu consulta"
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          className="text-white bg-slate-700 border-gray-300 hover:scale-105 focus:outline-none hover:bg-slate-600 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Enviar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
