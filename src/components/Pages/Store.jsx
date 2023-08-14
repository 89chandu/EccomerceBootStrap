import Header from "../Header/Header";
import Main from "../Main/Main";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { useState } from "react";
import ModalPopup from "../NPM Packages/ReactModal";
import { CartContextProvider } from "../Context/CartContext";

const Store = () => {
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
};

export default Store;