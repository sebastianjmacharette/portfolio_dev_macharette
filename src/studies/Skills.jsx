import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import One from "../assets/skills/Image1.png";
import Two from "../assets/skills/Image2.png";
import Tree from "../assets/skills/Image3.png";
import Four from "../assets/skills/Image4.png";
import Five from "../assets/skills/Image5.png";
import Six from "../assets/skills/Image6.png";
import Seven from "../assets/skills/Image7.png";
import Eight from "../assets/skills/Image8.png";
import Nine from "../assets/skills/Image9.png";
import Ten from "../assets/skills/Image10.png";
import Eleven from "../assets/skills/Image11.png";
import Twelve from "../assets/skills/Image12.png";
import Thirteen from "../assets/skills/Image13.png";
import Fourteen from "../assets/skills/Image14.png";
import Fifteen from "../assets/skills/Image15.png";
import Sixteen from "../assets/skills/Image16.png";
import Seventeen from "../assets/skills/Image17.png";
import Eighteen from "../assets/skills/Image18.png";
import Nineteen from "../assets/skills/Image19.png";
import Twenty from "../assets/skills/Image20.png";
import TwentyOne from "../assets/skills/Image21.png";
import TwentyTwo from "../assets/skills/Image22.png";
import TwentyThree from "../assets/skills/Image23.png";
import TwentyFour from "../assets/skills/Image24.png";
import TwentyFive from "../assets/skills/Image25.png";
import TwentySix from "../assets/skills/Image26.png";
import TwentySeven from "../assets/skills/Image27.png";
import TwentyEight from "../assets/skills/Image28.png";
import TwentyNine from "../assets/skills/Image29.png";
import Thirty from "../assets/skills/Image30.png";
import ThirtyOne from "../assets/skills/Image31.png";
import ThirtyTwo from "../assets/skills/Image32.png";
import ThirtyThree from "../assets/skills/Image33.png";
import ThirtyFour from "../assets/skills/Image34.png";
import ThirtyFive from "../assets/skills/Image35.png";



function Skills() {
	const [open, setOpen] = useState(false);

    const images = [
        { src: One },
        { src: Two },
        { src: Tree },
        { src: Four },
        { src: Five },
        { src: Six },
        { src: Seven },
        { src: Eight },
        { src: Nine },
        { src: Ten },
        { src: Eleven },
        { src: Twelve },
        { src: Thirteen },
        { src: Fourteen },
        { src: Fifteen },
        { src: Sixteen },
        { src: Seventeen },
        { src: Eighteen },
        { src: Nineteen },
        { src: Twenty },
        { src: TwentyOne },
        { src: TwentyTwo },
        { src: TwentyThree },
        { src: TwentyFour },
        { src: TwentyFive },
        { src: TwentySix },
        { src: TwentySeven },
        { src: TwentyEight },
        { src: TwentyNine },
        { src: Thirty },
        { src: ThirtyOne },
        { src: ThirtyTwo },
        { src: ThirtyThree },
        { src: ThirtyFour },
        { src: ThirtyFive }
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
