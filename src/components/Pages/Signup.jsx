import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../utils/AuthSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleRegister = () => {
        const newUser = { name, email, password };
        sessionStorage.setItem('authUser', JSON.stringify(newUser));
        console.log('Registration Data: ', newUser);
        dispatch(login(newUser));

        toast.success('Successfully Registered & Logged In!', {
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

    return (
        <>
        <div className="login-container">
            <div className="card login-card">
                <div className="card-title">
                    <h1 className="text-center">Create an account</h1>
                </div>
                <div className="card-body">
                    <label className="col-lg-12 mb-1 fs-5" placeholder="John Doe">
                        Enter your full name
                    </label>
                     <input className="my-2 col-lg-12 bg-light text-dark fs-5 p-1 border border-dark rounded" type="text" placeholder="John Doe" name="name" value={name} onChange={(e) => setName(e.target.value)} title="Please fill out this field" required/>
                    <br />
                    <label className="col-lg-12 mb-1 fs-5">
                        Enter your email
                    </label>
                     <input className="my-2 col-lg-12 bg-light text-dark fs-5 p-1 border border-dark rounded" type="email" placeholder="john.doe@email.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} title="Please fill out this field" required/>
                    <br />
                    <label className="col-lg-12 mb-1 fs-5">
                        Enter your password
                    </label>
                     <input className="my-2 col-lg-12 bg-light text-dark fs-5 p-1 border border-dark rounded" type="password" placeholder="********" name="password" value={password} onChange={(e) => setPassword(e.target.value)} title="Please fill out this field" required/>
                    <br />
                </div>
                <div className="p-2">
                    <button className="btn btn-primary mx-2" onClick={() => handleRegister()}><Link to='/'>Register</Link></button>
                </div>
            </div>
            </div>
        </>
    )
}