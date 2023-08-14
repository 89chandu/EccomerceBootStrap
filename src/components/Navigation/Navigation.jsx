import React from 'react'
import { NavLink } from "react-router-dom";
import '../../index.css'
const Navigation = (props) => {


    return (
        <ul className="z-20 bg-black text-white flex  py-4 fixed top-0 w-full justify-evenly  ">
            <li className=" md:px-6  mx-6 md:text-3xl" >
                <NavLink to="/ContactUs" >
                    CONTACT US
                </NavLink>
            </li>
            <li className="md:px-6 mx-6 md:text-3xl ">
                <NavLink to="/">STORE</NavLink>
            </li>
            <li className="md:px-6 mx-6 md:text-3xl ">
                <NavLink to="/About">ABOUT</NavLink>
            </li>
        </ul>
    )


}

export default Navigation