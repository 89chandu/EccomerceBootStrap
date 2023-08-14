import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import hero from "../../Assets/heroImage.webp";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
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
						<button>HOME</button>
					</div>
					<div className="md:px-6 mx-6 md:text-3xl">
						<button>STORE</button>
					</div>
					<div className="md:px-6 mx-6 md:text-3xl">
						<button>ABOUT</button>
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

			<div className="  w-full mt-[58px] h-[150px]  md:h-[350px]">
				<img
					className=" w-full h-full object-cover "
					src={hero}
					alt="hero"
				/>
			</div>
		</React.Fragment>
	);
};

export default Header;