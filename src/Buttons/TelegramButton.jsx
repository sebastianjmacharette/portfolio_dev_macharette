import React from 'react';

const TelegramButton = () => {
    const openTelegram = () => {
        const username = "tu_usuario"; // Reemplaza con tu nombre de usuario de Telegram
        const message = "Hola Sebastian, me gustaría obtener más información sobre:";  
        const url = `https://t.me/${username}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex items-center space-x-4">
                        <span className="text-white italic text-lg">O sino me envias un Telegram</span>

            <button
                className="bg-blue-500 rounded-lg px-4 py-2 text-white font-bold hover:bg-blue-400 hover:scale-105 transition transform duration-200"
                onClick={openTelegram}
            >
                Telegram
            </button>
         </div>
    );
};

export default TelegramButton;
