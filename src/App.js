import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<Features />
				<Articles />
			</Main>
			<Footer />
		</div>
	);
}

export default App;
