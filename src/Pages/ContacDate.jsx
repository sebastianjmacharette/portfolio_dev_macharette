import React from 'react';

function ContactDate() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/+543464573869?text=Hola%20Sebastian,%20me%20gustaría%20obtener%20más%20información%20sobre:",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleTelegramClick = () => {
    window.open(
      "https://t.me/@sebamacha",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleTelClick = () => {
    window.open(
      "tel:+543464573869",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleLinkedinClick = () => {
    window.open(
      "tel:+543464573869",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className=" ">
      <div className='mx-auto p-4'>
        <button
          onClick={handleWhatsAppClick}
          className="shadow-xl bg-gradient-to-r from-green-700 from-10% via-green-500 via-30% to-lime-500 to-90% hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4 "
        >
          WhatsApp
        </button>
      </div>
      <div className='mx-auto lg:p-4   '>
        <button
          onClick={handleTelegramClick}
          className="shadow-xl bg-gradient-to-r from-cyan-600 from-10% via-cyan-600 via-30% to-cyan-400 to-90% hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4 "
        >
          Telegram
        </button>
      </div>
      <div className='mx-auto lg:p-4   '>
        <button
          onClick={handleTelClick}
          className=" shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-indigo-700 via-30% to-indigo-900 to-90% hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4 "
        >
          Telefono
        </button>
      </div>
      <div className='mx-auto lg:p-4   '>
        <button
          onClick={handleLinkedinClick}
          className=" shadow-xl bg-gradient-to-r from-blue-400 from-10% via-blue-500 via-30% to-blue-800 to-90% hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4 "
        >
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default ContactDate;
