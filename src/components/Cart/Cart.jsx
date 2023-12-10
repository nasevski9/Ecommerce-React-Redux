import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../utils/CartSlice';

export default function Cart() {

    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return (
        <>
            <h1 className="text-center pt-5">Cart Items:</h1>
            <div className="row mx-0 tab">
            {cartItems.map((product) => {
                return (
                    <div key={product.id} className="custom-card col">
                    <img src={product.image} className="card-img card-img-top py-3" />
                    <div className="card-title">
                        {product.title}
                    </div>
                    <div className="card-body">
                        {product.description.slice(0,10)}
                        <div className="pt-4 fs-3 fw-bold">
                            ${product.price}
                        </div>
                        <div className="d-flex justify-content-center align-items-center pt-4">
                            <button className="btn btn-danger p-2" onClick={() => dispatch(removeFromCart({id: product.id}))}>Remove</button>
                        </div>
                    </div>
                </div>   
                )
            })}
            </div>
        </>
    )
}