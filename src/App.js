import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import { useState } from "react";
import ModalPopup from "./components/NPM Packages/ReactModal";
function App() {
	const [isCart, setIsCart] = useState(false);
	return (
		<div className="App">
			{isCart && <ModalPopup isCart setIsCart />}
			<Header isCart={isCart} setIsCart={setIsCart} />
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;