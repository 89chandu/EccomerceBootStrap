import React from "react";
import Modal from "react-modal";
// import { Modal } from "react-bootstrap";
import Cart from "../Cart/Cart";
const ModalPopup = ({ isCart, setIsCart }) => {
	const customStyles = {
		content: {
			position: "fixed",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			backgroundColor: "rgba(255, 255, 255, 0)",
		},
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(255, 255, 255, 0.95)",
		},
	};
	Modal.setAppElement("#root");
	return (
		<Modal
			isOpen={isCart}
			onRequestClose={() => setIsCart(false)}
			style={customStyles}>
			<div className=" max-w-[500px] mx-auto  my-auto  border h-full w-full bg-gray-400 md:bg-transparent md:max-h-[800px]">
				<Cart />
			</div>
		</Modal>
	);
};

export default ModalPopup;