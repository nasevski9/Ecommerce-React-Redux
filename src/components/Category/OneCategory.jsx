import {React, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/CartSlice.jsx";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OneCategory() {

    const dispatch = useDispatch();
    const { category } = useParams();

    const [products, setProducts] = useState([]);

    const fetchCategory = async (category) => {
        try {
            const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
            const response = await fetch(url);
            console.log('api resonse' + response);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        fetchCategory(category);
        console.log('category changedd:' + category)
    }, [category, dispatch])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))

        toast.success('Item added to cart!', {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: { backgroundColor: '#343a40', borderRadius: '50px 50px 50px 50px' },
            bodyClassName: 'text-light',
          });
    }

    return (
        <>
            <h1 className=" pt-5 text-center text-capitalize">{category}</h1>
            <div className="row mx-0 tab">
                    {products.map((item) => {
                        return(
                            <div key={item.id} className="custom-card col">
                                <img src={item.image} className="card-img card-img-top py-3" />
                                <div className="card-title">
                                    <h3 className="text-center">{item.title.slice(0,25)}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="text-center">
                                        {item.description.slice(0,100)}
                                    </p>
                                    <h3>${item.price}</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center p-2 mt-4">
                                    <button className="btn btn-dark" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </>
    )
}