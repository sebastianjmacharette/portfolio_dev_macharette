import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import One from "../assets/donweb/Donweb1.png";
import Two from "../assets/donweb/Donweb2.png";
import Tree from "../assets/donweb/Donweb3.png";
import Four from "../assets/donweb/Donweb4.png";
import Five from "../assets/donweb/Donweb5.png";

function Donweb() {
	const [open, setOpen] = useState(false);

	const images = [
		{src: One},
		{src: Two},
		{src: Tree},
		{src: Four},
		{src: Five},
	];

	return (
		<div>
			<button onClick={() => setOpen(true)}>Donweb</button>
			<Lightbox open={open} close={() => setOpen(false)} slides={images} />
		</div>
	);
}

export default Donweb;
