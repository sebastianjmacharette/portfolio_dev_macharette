import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import One from "../assets/codigofacilito/CodigoFacilito1.png";
import Two from "../assets/codigofacilito/CodigoFacilito2.png";

function CodigoFacilito() {
	const [open, setOpen] = useState(false);

	const images = [{src: One}, {src: Two}];

	return (
		<div>
			<button onClick={() => setOpen(true)}>Codigo Facilito</button>
			<Lightbox open={open} close={() => setOpen(false)} slides={images} />
		</div>
	);
}

export default CodigoFacilito;
