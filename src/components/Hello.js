import "../App.css";

import Board from "./Board";

export default function Hello() {
	const lista = [
		{
			ime: "nike",
			cena: "100",
			stanje: true,
		},
		{
			ime: "adidas",
			cena: "120",
			stanje: false,
		},
		{
			ime: "puma",
			cena: "80",
			stanje: true,
		},
	];
	return (
		<div>
			<h1>Welcome</h1>
			{lista.map((el, index) => {
				return <Board key={index} data={el} />;
			})}
		</div>
	);
}
