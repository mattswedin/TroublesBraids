import React from "react";

const PromoBanner = () => {
    return (
        <section className="section__container banner__container">
            <div className="banner__card">
                <span><i className="ri-recycle-fill"></i></span>
                <h4>ALL HAIR RECYCLED</h4>
                <p>Recyled hair is A-OK for the planet's health!</p>
            </div>
            <div className="banner__card">
                <span><i className="ri-run-line"></i></span>
                <h4>TROUBLE'S BOY DELIVERY SERVICE</h4>
                <p>Free same day delivery on foot hand delivered by the amazing Trouble's Boy</p>
            </div>
            <div className="banner__card">
                <span><i className="ri-scissors-fill"></i></span>
                <h4>100% BEST HAIR GARENTEE</h4>
                <p>This will be 100% best haircut garuanteed</p>
            </div>
        </section>
    )
}

export default PromoBanner;