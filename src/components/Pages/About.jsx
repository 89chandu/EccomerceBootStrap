import React from "react";
import hero from "../../Assets/heroImage.webp";
import Sanji from "../../Assets/Animations/Sanji.gif";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<React.Fragment>
			<div className="z-20 bg-black text-white flex  py-4 fixed top-0 w-full justify-evenly  ">
				<div className=" md:px-6  mx-6 md:text-3xl">
					<Link to="/Home">HOME</Link>
				</div>
				<div className="md:px-6 mx-6 md:text-3xl ">
					<Link to="/">STORE</Link>
				</div>
				<div className="md:px-6 mx-6 md:text-3xl animate-bounce">
					<Link className="border-b-2 pb-1" to="/About">
						ABOUT
					</Link>
				</div>
			</div>

			<div className="hidden sm:block w-full mt-[60px] h-[150px]  md:h-[350px] border ">
        <h1>About Us</h1>
        <p>

        </p>
      </div>
      
			<div
				style={{
					backgroundImage: `url(${Sanji})`,
					backgroundRepeat: `no-repeat`,
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}
				className=" h-screen sm:hidden bg-[rgb(45,64,81)] border border-white ">
				<div className="  h-full w-full flex flex-col justify-evenly items-center p-3">
					<h1 className="text-white font-bold font-serif text-4xl mt-2">
						About Us
					</h1>
					<p className="text-white text-3xl px-9 text-center p-4 font-thin  ">
						Welcome to Store , where anime dreams come to
						life! Immerse yourself in a captivating world of
						anime wonder with our exquisite collection of
						posters. Each piece is a masterpiece, capturing
						the essence of legendary series like "Naruto,"
						"One Piece," and "Baki." Experience the
						adrenaline-fueled battles, epic journeys, and
						intense martial arts with our thoughtfully
						curated posters.
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;