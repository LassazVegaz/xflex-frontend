import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPages from "./pages/Pages";
import { ScreenLoader } from "./components/ScreenLoader/ScreenLoader";

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<MainPages />
				<Footer />
			</div>

			<ScreenLoader />
		</>
	);
}

export default App;
