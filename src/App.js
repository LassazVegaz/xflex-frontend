import React from "react";
import { NotificationContainer } from "react-notifications";
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

			<NotificationContainer />
		</>
	);
}

export default App;
