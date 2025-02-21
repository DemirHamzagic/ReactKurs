import "./App.css";
import Hello from "./components/Hello";
import Loog from "./components/Loog";
import Slika from "./components/download.jpg";

function App() {
	return (
		<div>
			<Hello />
			<img src={Slika} />
			<Loog />
		</div>
	);
}

export default App;
