import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Egg1 from "../assets/egg/egg1.png";
import Egg2 from "../assets/egg/egg2.png";
import Egg3 from "../assets/egg/egg3.png";
import Egg4 from "../assets/egg/egg4.png";
import Egg5 from "../assets/egg/egg5.png";
import Egg6 from "../assets/egg/egg6.png";

function Egg() {
	const [open, setOpen] = useState(false);

	const images = [
		{src: Egg1},
		{src: Egg2},
		{src: Egg3},
		{src: Egg4},
		{src: Egg5},
		{src: Egg6},
	];

	return (
		<div>
			<button
			className="w-24 px-2.5 py-3 text-white font-bold rounded-xl bg-purple-600 hover:bg-purple-700 hover:scale-105"
			onClick={() => setOpen(true)}>Ver</button>
			<Lightbox open={open} close={() => setOpen(false)} slides={images} />
		</div>
	);
}

export default Egg;
