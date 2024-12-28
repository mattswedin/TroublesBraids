import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [message, setMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        const data = {
            firstName,
            lastName,
            email,
            password
        }
    }
    return (
        <section className="h-screen flkex items-center justify-center">
            <div className="max-w-sm border shadow bg-white mx-auto p-8">
                <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
                <form onSubmit={handleRegister} className="space-y-5 max-w-sm mx-auto pt-8">
                    <input type="text" name="firstName" id='firstName'
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder="First Name" required 
                    className="w-full bg-gray-100 focus:outline-none px-5 py-3"/>
                    <input type="text" name="lastName" id='lastName'
                    onChange={(e) => setLastName(e.target.value)} 
                    placeholder="Last Name" required 
                    className="w-full bg-gray-100 focus:outline-none px-5 py-3"/>
                    <input type="email" name="email" id='email'
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email Address" required 
                    className="w-full bg-gray-100 focus:outline-none px-5 py-3"/>
                    <input type="password" name="password" id='password'
                    onChange={(e) => setPassword(e.target.value)}  
                    placeholder="Password" required 
                    className="w-full bg-gray-100 focus:outline-none px-5 py-3"/>
                    <input type="password" name="confirmPassword" id='confirmPassword'
                    onChange={(e) => setConfirmPassword(e.target.value)}  
                    placeholder="Confirm Password" required 
                    className="w-full bg-gray-100 focus:outline-none px-5 py-3"/>
                    {
                        message && <p className="text-red-500">{message}</p>
                    }
                    <button type='submit'
                    className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md"
                    >Login</button>
                </form>

                <p>Already have an account? Please<Link to='/login' className="text-red-700 px-1 underline" >login</Link>.</p>
            </div>
        </section>
    )
}

export default Register;