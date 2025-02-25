import React, { useState } from "react";

const Submit = () => {
	const [inputValue, setInputValue] = useState("");
	const [cards, setCards] = useState([]);

	function valueChange(el) {
		setInputValue(el.target.value);
	}

	function addCard() {
		if (inputValue !== "") {
			setCards([...cards, inputValue]);
			setInputValue("");
		}
	}

	function clearCard() {
		setCards([]);
	}
	return (
		<div id="d" className="inputDiv">
			<input className="formButtons" placeholder="Unesite vase ime" value={inputValue} onChange={valueChange}></input>
			{cards.map((card) => {
				return <div>{card}</div>;
			})}
			<button onClick={addCard} className="formButtons" type="button">
				Submit
			</button>
			<button onClick={clearCard} className="formButtons" type="button">
				Clear
			</button>
		</div>
	);
};

export default Submit;
