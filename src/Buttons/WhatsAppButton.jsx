import React from 'react';

const WhatsAppButton = () => {
    const openWhatsApp = () => {
      const phoneNumber = "+543464573869";
      const message = "Hola Sebastian, me gustaría obtener más información sobre:";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      try {
        window.open(url, '_blank');
      } catch (error) {
        // Mostrar un mensaje de error al usuario o proporcionar un enlace alternativo
        console.error("Error al abrir WhatsApp:", error);
        alert("No se pudo abrir WhatsApp. Por favor, asegúrate de tenerlo instalado.");
      }
    };

    return (
        <div className="flex items-center space-x-4">
            <a
                className="text-white font-bold hover:bg-green-400 hover:scale-105 transition transform duration-200"
                onClick={openWhatsApp}
                href="#"
            >
                WhatsApp
            </a>
        </div>
    );
};

export default WhatsAppButton;
