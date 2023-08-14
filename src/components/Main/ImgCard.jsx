import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";
import img6 from "../../Assets/img6.png";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const ImgCard = (props) => {
	const imgMap = {
		1: img1,
		2: img2,
		3: img3,
		4: img4,
		5: img5,
		6: img6,
	};
	const { Dispatch } = useContext(CartContext);
	let imgSrc = imgMap[props.img_id];

	const ADD2CartHandler = (e) => {
		Dispatch({ type: "INC_CART_COUNT" });
		Dispatch({
			type: "ADD_2_CART",
			obj: props,
		});
	};
	return (
		<div className=" flex flex-col justify-between border border-gray-300 max-w-[400px] max-h-[450px] shadow-lg ">
			<div className="flex justify-between   pb-3 ">
				<div className="bg-red-700 text-white px-2">
					SALE
				</div>
				<div className="text-2xl text-blue-700">
					<AiOutlineHeart />
				</div>
			</div>

			<div className="h-56 px-4  hover:scale-105 duration-300">
				<img
					src={imgSrc}
					alt=""
					className="w-full h-full object-  "
				/>
			</div>
			<div className="px-4 py-1 flex flex-col justify-center items-center ">
				<p className="font-medium">{props.anime}</p>
				<p>{props.description}</p>
				<p className="text-gray-500">
					On sale from {props.price}
				</p>
				<button
					onClick={ADD2CartHandler}
					className="border bg-red-700 text-white p-1 rounded-md hover:bg-red-900 ">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ImgCard;