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
      "https://www.linkedin.com/in/sebastianmacharette",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/sebastianmacharette",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/sebastianmacharette01",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleXClick = () => {
    window.open(
      "https://x.com/SMacharette",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGitHubClick = () => {
    window.open(
      "https://github.com/sebastianjmacharette",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <div className="flex justify-center lg:justify-end w-full">
        <button
          onClick={handleWhatsAppClick}
          className="shadow-xl bg-gradient-to-r from-green-700 via-green-500 to-lime-500 hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          WhatsApp
        </button>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={handleTelegramClick}
          className="shadow-xl bg-gradient-to-r from-cyan-600 via-cyan-600 to-cyan-400 hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          Telegram
        </button>
      </div>
      <div className="flex justify-center lg:justify-start w-full">
        <button
          onClick={handleTelClick}
          className="shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-indigo-700 via-30% to-indigo-900 to-90% hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          Telefono
        </button>
      </div>
      <div className="flex justify-center lg:justify-end w-full">
        <button
          onClick={handleLinkedinClick}
          className="shadow-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800 hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          Linkedin
        </button>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={handleInstagramClick}
          className="shadow-xl bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 to-purple-500 hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          Instagram
        </button>
      </div>
      <div className="flex justify-center lg:justify-start w-full">
        <button
          onClick={handleFacebookClick}
          className="shadow-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          Facebook
        </button>
      </div>
      <div className="flex justify-center lg:justify-end w-full">
        <button
          onClick={handleXClick}
          className="shadow-xl bg-black hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          X
        </button>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={handleGitHubClick}
          className="shadow-xl bg-black hover:scale-105 w-52 rounded-2xl text-white font-bold py-2 px-4"
        >
          Github
        </button>
      </div>
    </div>
  );
}

export default ContactDate;
