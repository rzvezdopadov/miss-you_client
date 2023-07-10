import "./App.css";
import relation from "../src/assets/img/relations.jpg";

function App() {
	return (
		<div
			style={{
				backgroundImage: `url("${relation}")`,
			}}
			className="App"
		></div>
	);
}

export default App;
