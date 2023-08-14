import React from "react";
import ImgCard from "./ImgCard";

const imgArr = [
	{
		img_id: 1,
		anime: "Naruto",
		description: "Almighty Push Wall Poster",
		price: 350,
	},
	{
		img_id: 2,
		description: "Roronoa Zoro Wall Poster",
		anime: "One Piece",
		price: 400,
	},
	{
		img_id: 3,
		anime: "Chainsaw Man",
		description: "Chainsaw Skull Wall Poster",
		price: 200,
	},
	{
		img_id: 4,
		anime: "Baki",
		description: "Yujiro Hanma Wall Poster",
		price: 150,
	},
	{
		img_id: 5,
		anime: "One Piece",
		description: "WhiteBeard Wall Poster",
		price: 500,
	},
	{
		img_id: 6,
		anime: "One Piece",
		description: "Luffy 5th Gear  Wall Poster",
		price: 249,
	},
];
const Main = () => {
	return (
		<div className="   grid  gap-7 justify-items-center    pt-10   md:grid-cols-3 px-2 max-w-[1300px] mx-auto">
			{imgArr.map((item) => {
				return (
					<ImgCard
						key={item.img_id}
						img_id={item.img_id}
						anime={item.anime}
						description={item.description}
						price={item.price}
					/>
				);
			})}
		</div>
	);
};

export default Main;