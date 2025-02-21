const Board = ({ data }) => {
	return (
		<div>
			<p>Brend proizvoda: {data.ime}</p>
			<p>Cena proizvoda: {data.cena}</p>
			<p>Raspolozivost: {data.stanje}</p>
		</div>
	);
};

export default Board;
