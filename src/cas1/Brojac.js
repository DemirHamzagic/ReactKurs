import React, { useState } from "react";
const Brojac = () => {
	const [brojac, setBrojac] = useState(0);
	const [godina, setGodina] = useState("");

	function povecaj() {
		setBrojac(brojac + 1);
	}
	function umanji() {
		setBrojac(brojac - 1);
	}

	function addGodina() {
		if (brojac != 0) setGodina(`Br godina: ${brojac}`);
	}
	function clearGodina() {
		setGodina("");
	}
	return (
		<div className="glavniDiv">
			<div className="brojacDiv">
				<button className="plusButton" onClick={povecaj}>
					+
				</button>
				<h1>Godine: {brojac}</h1>
				<button className="minusButton" onClick={umanji}>
					-
				</button>
			</div>
			<div>
				<button onClick={addGodina} className="formButtons" type="button">
					Submit
				</button>
				<div>{godina}</div>
				<button onClick={clearGodina} className="formButtons" type="button">
					Clear
				</button>
			</div>
		</div>
	);
};
export default Brojac;
