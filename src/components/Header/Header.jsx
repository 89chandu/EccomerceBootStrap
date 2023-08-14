import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import hero from "../../Assets/heroImage.webp";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Hero from "../../Assets/Animations/Hero.gif";
import { Link } from "react-router-dom";
const Header = ({ isCart, setIsCart }) => {
	const { state } = useContext(CartContext);

	const CartClickHandler = (e) => {
		e.preventDefault();
		setIsCart(true);
	};
	return (
		<React.Fragment>
			<div className="">
				<div className="z-20 bg-black text-white flex  py-4 fixed top-0 w-full md:justify-center  ">
					<div className=" md:px-6  mx-6 md:text-3xl">
						<Link to ="/Home">HOME</Link>
					</div>
					<div className="md:px-6 mx-6 md:text-3xl animate-bounce">
						<Link className="border-b-2 pb-1" to="/">STORE</Link>
					</div>
					<div className="md:px-6 mx-6 md:text-3xl">
						
						<Link to="/About">ABOUT</Link>
					</div>

					<div className="fixed right-4 px-2 top-0  ">
						<button onClick={CartClickHandler}>
							<CiShoppingCart className="text-6xl " />
						</button>
					</div>
					<div
						className="fixed right-11 cursor-pointer hover:animate-bounce "
						onClick={CartClickHandler}>
						<span>{state.TotalCartItems}</span>
					</div>
				</div>
			</div>

			<div className="hidden sm:block w-full mt-[58px] h-[150px]  md:h-[350px] border ">
				<img
					className=" w-full h-full object-cover "
					src={hero}
					alt="hero"
				/>
			</div>
			<div className="sm:hidden">
				<img className="ml-[70px]" src={Hero} alt="hero" />
			</div>
		</React.Fragment>
	);
};

export default Header;