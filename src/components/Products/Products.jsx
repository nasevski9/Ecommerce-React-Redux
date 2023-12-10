import { React, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../utils/CartSlice.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    if (error) {
        return (
            <div className="text-center">Error: {error.message}</div>
        )
    }

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


    return(
        <>
            <h1 className="text-center pt-5">All Products</h1>
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
                                    <h3 className="pt-4 fs-3 fw-bold">${item.price}</h3>
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