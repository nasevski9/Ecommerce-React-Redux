import React from "react";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer>
            <div className="text-center bg-dark py-2">
                <span className="text-light"><FaRegCopyright /> Copyright & Developed by Andrej Nasevski 2023</span>
            </div>
            </footer>
        </>
    )
}