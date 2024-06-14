import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import One from "../assets/todocode/codo1.png";
import Two from "../assets/todocode/codo2.png";

function TodoCode() {
	const [open, setOpen] = useState(false);

	const images = [{src: One}, {src: Two}];

	return (
		<div>
			<button onClick={() => setOpen(true)}>Todo Code</button>
			<Lightbox open={open} close={() => setOpen(false)} slides={images} />
		</div>
	);
}

export default TodoCode;
