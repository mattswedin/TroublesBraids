import React from "react";
import dealsImg from "../../assets/header4.png"

const DealsSection = () => {
    return (
        <section className='section__container deals__container'>
            <div className="deals__image">
                <img src={dealsImg} alt="" />
            </div>

            <div className="deals__content">
                <h5>Get Up to 20% Discount</h5>
                <h4>DEALS THIS MONTH</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus officia explicabo alias repellendus sint. Dignissimos quia saepe est fugiat aliquam officiis, maxime repudiandae, nulla quisquam animi voluptate voluptatibus, accusantium at.
                </p>
            </div>
        </section>
    )
}

export default DealsSection;