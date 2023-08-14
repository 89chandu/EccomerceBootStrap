import React from "react";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";
import img6 from "../../Assets/img6.png";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { BsFillLightningChargeFill } from "react-icons/bs";
const imgMap = {
	1: img1,
	2: img2,
	3: img3,
	4: img4,
	5: img5,
	6: img6,
};

const SingleCartItem = ({
	img_id,
	anime,
	price,
	quantity,
	description,
}) => {
	const { Dispatch } = useContext(CartContext);
	const CartItemRemoveHandler = () => {
		Dispatch({ type: "REMOVE_FROM_CART", img_id: +img_id });
	};
	let imgSrc = imgMap[img_id];
	return (
		<div className="bg-white   grid  grid-rows-1 border-b-2 border-gray-400 py-2">
			<div className="p-1 flex justify-around">
				<div className="h-[100px] w-[70px] sm:h-[150px] sm:w-[110px]">
					<img
						src={imgSrc}
						alt=""
						className="w-full h-full object-cover  "
					/>
				</div>
				<div className="text-center text-lg">
					<p className="text-2xl font-medium">{anime}</p>
					<p>{description}</p>
					<span className="line-through text-gray-500 px-1 ">
						{price + 273}
					</span>
					<span>{price}</span>
				{quantity>1&&	<p className="flex justify-center items-center ">
						<div>{price}</div>
						<div>
							<AiOutlineClose />
						</div>
						<div>{quantity}</div>
						<div>=</div>
						<div>{price * quantity}</div>
					</p>}
					<p className="text-xs text-green-800 sm:text-lg">
						4 offers applied. {img_id + 7} offers available
					</p>
				</div>
			</div>

			<div className="mb-2  sm:px-2">
				<div className="flex justify-between">
					<button
						onClick={CartItemRemoveHandler}
						className="border border-gray-500  flex p-2 text-xl justify-center items-center hover:bg-gray-300 duration-700 hover:scale-95">
						<span className="px-2 ">
							<BsTrash />
						</span>
						<span>Remove</span>
					</button>

					<div className=" border border-gray-500 flex p-2 text-xl justify-center items-center hover:bg-gray-300 duration-700 hover:scale-95">
						<span>Quant:</span>
						<span className="px-2 ">{quantity}</span>
					</div>

					<button className=" border border-gray-500 flex p-2 text-xl justify-start items-center hover:bg-gray-300 duration-700 hover:scale-95">
						<span className="px-2 text-yellow-400">
							<BsFillLightningChargeFill />
						</span>
						<span>Buy </span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleCartItem;