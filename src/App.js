import Brojac from "./cas1/Brojac.js";
import "./cas1/Brojac.css";
import "./App.css";
import Submit from "./cas1/Submit.js";

function App() {
	return (
		<div className="parentDiv">
			<div className="formDiv">
				<Submit />
				<div className="ageDiv">
					<div>
						<Brojac />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
