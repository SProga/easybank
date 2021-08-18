import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<Hero />
				<Features />
			</Main>
		</div>
	);
}

export default App;
