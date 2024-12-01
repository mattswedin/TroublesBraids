import React from "react";

const Footer = () => {
    return (
        <>
        <footer className="section__container footer__container navbar">
            <div className='footer__col'>
                <h4>CONTACT INFO</h4>
                <p>
                    <span><i className="ri-earth-fill"></i></span>
                    35 Meadow Ave, Brooklyn NY
                </p>
                <p>
                    <span><i className="ri-mail-line"></i></span>
                    troublesbraidsbk@gmail.com
                </p>
                <p>
                    <span><i className="ri-phone-fill"></i></span>
                    555-555-5555
                </p>
            </div>
            <div className='footer__col'>
                <h4>COMPANY</h4>
                <a href="/">Home</a>
                <a href="/">Team</a>
                <a href="/">About</a>
                <a href="/">Work With Us</a>
                <a href="/">Policies</a>
            </div>
            <div>
                (INSTAGRAM FLOW TBT)
            </div>
        </footer>
        <div className="footer__bar">
            Copyright 2025 by Trouble's Braids. All rights reserved.

        </div>
        </>
    )
}

export default Footer;