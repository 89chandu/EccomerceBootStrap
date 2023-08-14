import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";
const ImgCard = (props) => {

	const { Dispatch } = useContext(CartContext);
	const ADD2CartHandler = (e) => {
		// Dispatch({ type: "INC_CART_COUNT" });
		// Dispatch({
		// 	type: "ADD_2_CART",
		// 	obj: props,
		// });
	};
	return (
		<div className=" flex flex-col justify-between border border-gray-300 max-w-[400px] max-h-[450px] shadow-lg ">
			<div className="flex justify-between    ">
				<div className="bg-red-700 text-white px-2">
					SALE
				</div>
				<div className="text-2xl text-blue-700">
					<AiOutlineHeart />
				</div>
			</div>
			<div className="h-56 px-4  hover:scale-105 duration-300 ">
				 <img
					src={props.img_id}
					alt=""
					className="w-full h-full  "
				/> 
			</div>
			<div className="px-4 pb-1 flex flex-col justify-center items-center ">
				<p className="font-medium">{props.anime}</p>
				<p>{props.description}</p>
				<p className="text-gray-500">
					On sale from {props.price}
				</p>
				 <NavLink to={`/${props.id}`}
					onClick={ADD2CartHandler}
					className="border bg-red-700 text-white p-1 rounded-md hover:bg-red-900 ">
					View Product
				</NavLink> 
			</div>
		</div>
	);
};

export default ImgCard;