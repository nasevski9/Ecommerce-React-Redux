import React from "react";
import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { login, logout } from "../utils/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from '../images/logo.png';

export default function Navbar() {

    const user = useSelector((state) => state.user.user);
    const { authUser } = user;
    const dispatch = useDispatch();

    return (
        <>
            <header id="top" className="bg-dark">
                <div className="nav-img">
                    <img src={logo} alt="Logo"></img>
                </div>
                <ul className="nav">
                   
                    {authUser && (
                        <>
                            <li className="nav-item">
                                <Link to='/'><FaHome /> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products'><BsBoxes /> Products </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart'><FaShoppingCart /> Cart </Link>
                            </li>
                        </>
                    )}
                    {authUser ? 
                        <li className="nav-item">
                            <Link to='/' onClick={() => dispatch(logout())}><FaUser /> Log Out </Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to='/' onClick={() => dispatch(login())}><FaUser /> Log In </Link>
                        </li>
                    }
                </ul>
            </header>
        </>
    )
}