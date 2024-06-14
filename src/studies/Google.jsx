import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import One from "../assets/google/Google1.png";
import Two from "../assets/google/Google2.png";
import Tree from "../assets/google/Google3.png";
import Four from "../assets/google/Google4.png";
import Five from "../assets/google/Google5.png";

function Google() {
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
			<button onClick={() => setOpen(true)}>Google</button>
			<Lightbox open={open} close={() => setOpen(false)} slides={images} />
		</div>
	);
}

export default Google;
