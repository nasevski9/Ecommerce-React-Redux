import React from "react";
import Slider from "../Slider/Slider";
import LatestProducts from "../Products/LatestProducts.jsx";
import Category from "../Category/Category.jsx";

export default function Home() {
    return (
        <>
            <Slider />
                <Category />
            <LatestProducts />
        </>
    )
}