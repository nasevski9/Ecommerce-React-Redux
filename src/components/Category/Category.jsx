import React from "react";
import { Link  } from "react-router-dom";

export default function Category() {

    const categories = ["Men's Clothing", "Women's Clothing", "Electronics", "Jewelry"];

    const categoryMapping = {
        "Men's Clothing": "men's%20clothing",
        "Women's Clothing": "women's%20clothing",
        "Electronics": 'electronics',
        "Jewelry": 'jewelery',
      };

    return (
        <>
            <h1 className="text-center pt-5">Browse Categories</h1>
            <div className="d-flex justify-content-center p-5">
            {categories.map((item) => {
                return (
                   <div key={item} className="custom-card"><Link to={`/category/${categoryMapping[item]}`} className="text-dark">{item}</Link></div>
                )
            })}
            </div>
        </>
    )
}