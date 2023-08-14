import React from "react";
import SingleCartItem from "./SingleCartItem";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Lottie from "lottie-react";
import emptyCart from "../../Assets/Animations/emptyCart.json";
const Cart = (props) => {
	const { state } = useContext(CartContext);
	let Items = state.cartItems.map((item) => {
		return (
			<SingleCartItem
				key={item.img_id}
				img_id={item.img_id}
				anime={item.anime}
				price={item.price}
				quantity={item.quantity}
			/>
		);
	});
	if (Items.length > 0) {
		return (
			<div className="">
				{Items}

				<div className="flex bg-white justify-between mt-5 border border-black p-2  ">
					<div className="text-center ">
						<button className="text-xl">{state.TotalCartAmount}</button>
						<p>view price details</p>
					</div>
					<div
						onClick={() => props.setIsCart(false)}
						className="bg-yellow-400 rounded-md px-1 justify-center items-center flex hover:bg-yellow-600 ">
						<button>Close Cart</button>
					</div>
					<div className="bg-yellow-400 rounded-md px-1 justify-center items-center flex cursor-not-allowed ">
						<button className="cursor-not-allowed ">Place Order</button>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className=" h-[300px] w-[200px] md:h-[600px] md:w-[400px] ">
				<Lottie className="" animationData={emptyCart} loop={true} />
				<div >
					<p className="text-center font-mono text-xl text-gray-700  p-4">It feels so light...</p>
				</div>
			</div>
		);
	}
};

export default Cart;