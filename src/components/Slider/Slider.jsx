import React from "react";
import { Carousel } from 'react-bootstrap'; 

import men from '../images/men.png';
import women from '../images/women.jpg';
import jewelry from '../images/jewelry.jpg';
import electronics from '../images/electronics.jpeg';

export default function Slider() {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="w-100 d-block" style={{ height: "100vh", objectFit: "cover" }} src={men} alt="Men's Clothes"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100 d-block" style={{ height: "100vh", objectFit: "cover" }} src={electronics} alt="Electronics"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100 d-block" style={{ height: "100vh", objectFit: "cover" }} src={women} alt="Women's Clothes"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100 d-block" style={{ height: "100vh", objectFit: "cover" }} src={jewelry} alt="Jewelry"></img>
                </Carousel.Item>
            </Carousel>
        </>
    )
}