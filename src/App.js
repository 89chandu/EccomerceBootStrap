import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import { useState } from "react";
import ModalPopup from "./components/NPM Packages/ReactModal";
import { CartContextProvider } from "./components/Context/CartContext";
function App() {
	const [isCart, setIsCart] = useState(false);
	return (
		<CartContextProvider className="App">
			{isCart && (
				<ModalPopup isCart={isCart} setIsCart={setIsCart} />
			)}
			<Header isCart={isCart} setIsCart={setIsCart} />
			<Navbar />
			<Main />
			<Footer />
		</CartContextProvider>
	);
}

export default App;