import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import One from "../assets/codo/Codo1.png";

function CodoACodo() {
	const [open, setOpen] = useState(false);

	const images = [{src: One}];

	return (
		<div>
			<button onClick={() => setOpen(true)}>Codo a Codo</button>
			<Lightbox open={open} close={() => setOpen(false)} slides={images} />
		</div>
	);
}

export default CodoACodo;
