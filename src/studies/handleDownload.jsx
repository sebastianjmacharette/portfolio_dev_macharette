import React from 'react';

const DownloadCV = () => {
  const handleDownload = () => {
    // URL relativa al archivo CV en la carpeta assets
    const cvUrl = '/assets/pdf/macharette_cv.pdf';

    // Crear un elemento <a> temporal para iniciar la descarga
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.download = 'CV.pdf'; // Nombre que se utilizará para guardar el archivo
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <button
      className="w-38 px-2.5 py-3 text-white font-bold rounded-xl bg-purple-600 hover:bg-purple-700 hover:scale-105"
      onClick={handleDownload}>Descargar CV</button>
    </div>
  );
};

export default DownloadCV;
