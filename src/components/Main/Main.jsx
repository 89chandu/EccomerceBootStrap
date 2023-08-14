import React, { useEffect, useState } from "react";
import ImgCard from "./ImgCard";
import axios from "axios";
import Loading from "../UI/Loading";


const Main = () => {

	const [imgArr, setImgArr] = useState([]);

	useEffect(() => {
		const getfromDB = async () => {
			try {
				let response = await axios.get('https://ecommerce-backend-xe7w.onrender.com/store/getProduct')
				setImgArr(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		getfromDB();

	}, [])

	if (imgArr.length === 0)
	return <Loading/>
	return (
		<div className="   grid  gap-7 justify-items-center    pt-10   md:grid-cols-3 px-2 max-w-[1300px] mx-auto">
			{imgArr.map((item) => {
				return (
					<ImgCard
						key={item._id}
						id={item._id}
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

