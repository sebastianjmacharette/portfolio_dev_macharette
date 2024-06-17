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
		<button
		className="w-24 px-2.5 py-3 text-white font-bold rounded-xl bg-purple-600 hover:bg-purple-700 hover:scale-105"
		onClick={() => setOpen(true)}>Ver</button>
		<Lightbox open={open} close={() => setOpen(false)} slides={images} />
	</div>
	);
}

export default Donweb;
