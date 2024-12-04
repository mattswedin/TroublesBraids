import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md navbar">
            <nav className='max-w-screen-2x1 mx-auto px-4 flex justify-between items-baseline'>
                <ul className='nav__links'>
                    <li className="link"><Link to="/">Home</Link></li>
                    <li className="link"><Link to="/team">Team</Link></li>
                    <li className="link"><Link to="/services">Services</Link></li>
                    <li className="link"><Link to="/shop">Shop</Link></li>
                    <li className="link"><Link to="/about">About</Link></li>
                    <li className="link"><Link to="/policies">Policies</Link></li>
                </ul>

                {/* logo */}
                <div className="nav__logo">
                    <Link to="/">TROUBLE'S BRAIDS</Link>
                </div>

                 {/* nav icons */}
                 <div className="nav__icons relative">
                    <span>
                        <Link to="/search">
                            <i className="ri-search-eye-line"></i>
                        </Link>
                    </span>
                    <span>
                        <button className="hover:text-primary">
                           <i className="ri-shopping-bag-fill"></i>
                           <sup className="text-xs inline-block px-1 text-white rounded-full bg-primary text-center">0</sup>
                        </button>
                    </span>
                    <span>
                        <Link to="login">
                            <i className="ri-user-fill"></i>
                        </Link>
                    </span>
                 </div>
            </nav>
        </header>
    )
}

export default Navbar;