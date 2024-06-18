import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import One from "../assets/skills/1.png";
import Two from "../assets/skills/2.png";
import Tree from "../assets/skills/3.png";




function Skills() {
	const [open, setOpen] = useState(false);

    const images = [
        { src: One },
        { src: Two },
        { src: Tree }
        
    ];
    

	return (
        <div>
        {/* Botón para abrir la galería */}
        <button
              className="w-36 px-2.5 py-3 text-white font-bold rounded-xl bg-purple-600 hover:bg-purple-700 hover:scale-105"

        onClick={() => setOpen(true)}>Skills</button>

        {/* Galería de imágenes */}
        {open && (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Imagen ${index + 1}`}
                        style={{ width: "100px", margin: "5px" }}
                        onClick={() => setOpen(true)}
                    />
                ))}
            </div>
        )}

        {/* Lightbox para mostrar las imágenes en tamaño completo */}
        <Lightbox open={open} close={() => setOpen(false)} slides={images} />
    </div>
	);
}

export default Skills;
