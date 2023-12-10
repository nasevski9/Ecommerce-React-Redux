import React, { useState } from "react";
import { Link  } from "react-router-dom";
import {login} from '../utils/AuthSlice';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    
    const initialState = {
        email: "",
        password: ""
    }
    const [values, setValues] = useState(initialState)


    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    const handleLogin = () => {
        dispatch(login(values));

        toast.success('Successfully Logged In!', {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            style: { backgroundColor: '#343a40', borderRadius: '50px 50px 50px 50px' },
            bodyClassName: 'text-light',
          });
    }

    const dispatch = useDispatch();

    return (
        <>
        <div className="login-container row mx-0">
            <div className="card login-card col-lg-12 col-md-6 col-sm-2">
                <div className="card-title">
                    <h1 className="text-center">Sign In</h1>
                </div>
                <div className="card-body">
                    <label className="col-lg-12 mb-1 fs-5">
                        Enter your email
                    </label>
                     <input className="my-2 col-lg-12 bg-light text-dark fs-5 p-1 border border-dark rounded" type="email" placeholder="john.doe@email.com" name="email" value={values.email} onChange={handleChange} title="Please fill out this field" required/>
                    <br />
                    <label className="col-lg-12 mb-1 fs-5">
                        Enter your password
                    </label>
                     <input className="my-2 col-lg-12 bg-light text-dark fs-5 p-1 border border-dark rounded" type="password" placeholder="********" name="password" value={values.password} onChange={handleChange} title="Please fill out this field"  required/>
                    <br />
                </div>
                <div className="">
                    <button className="btn btn-primary mx-2" onClick={handleLogin}><Link to='/'>Log In</Link></button>
                    <button className="btn btn-secondary mx-2"><Link to='/signup'>Create an account</Link></button>
                </div>
            </div>
            </div>
        </>
    )
}