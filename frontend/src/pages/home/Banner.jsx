import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../../assets/salon_interior.jpeg'

const Banner = () => {
    return (
         <div className='section__container header__container'>

            <div className='header__content z-30'>
                <h4>Chic Cuts, Bold Colors, Zero Waste.</h4>
                <h1>PLANET-FRIENDLY GLAM.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="btn"><Link to='/team'>Book Appointment</Link></button>
            </div>

            <div className="header__image">
                {/* <img className="header__foreground__image" src={bannerImg} alt="" /> */}
            </div>

         </div>
    )
        
}

export default Banner