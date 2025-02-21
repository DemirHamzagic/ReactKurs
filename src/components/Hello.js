export default function Hello() {
	const text = ["HAlo", "HAlo", "HAlo", "HAlo", "HAlo"];

	return (
		<div>
			<h1>Hellow</h1>
			<p>
				{text.map((el) => {
					return <p>{el}</p>;
				})}
			</p>
		</div>
	);
}
