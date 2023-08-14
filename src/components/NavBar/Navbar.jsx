import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Navbar = () => {
	return (
		<div className="fixed top-[45%] left-0 ">
            <ul className="hidden md:block">
            <li className="flex w-[160px] bg-blue-700 h-[60px] px-3 justify-between items-center  rounded-lg ml-[-90px]   hover:ml-[-5px] duration-300 ">
					<span className=" mr-4 text-white">Facebook</span>
					<a
						className="text-5xl text-white"
						href="https://www.facebook.com/profile.php?id=100040061619797&mibextid=9R9pXO">
						<AiFillFacebook />
					</a>
				</li>
				<li className="flex w-[160px] bg-pink-700 px-3 justify-between items-center  rounded-lg ml-[-90px]   hover:ml-[-5px] duration-300 ">
					<span className=" mr-4  text-white ">
						Instagram
					</span>
					<a
						className="text-5xl  text-white "
						href="https://instagram.com/lyfesahil?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
						<AiOutlineInstagram />
					</a>
				</li>

				<li className="flex w-[160px] bg-blue-900 h-[60px] px-3 justify-between items-center  rounded-lg ml-[-90px]   hover:ml-[-5px] duration-300 ">
					<span className=" mr-4 text-white">LinkedIn</span>
					<a
						className="text-5xl text-white"
						href="https://www.linkedin.com/in/sahil-kumar-324b3b217/">
						<BsLinkedin />
					</a>
				</li>
				
			</ul>
		</div>
	);
};

export default Navbar;