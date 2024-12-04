import React from "react";
import Banner from "./Banner"
import Categories from "./Brands";
import Banner2 from "./Banner2";
import TrendingProducts from "../shop/trendingProducts";
import DealsSection from "./DealsSection";
import PromoBanner from "./PromoBanner";

const Home = () => {
    return (
       <div className="bg-white">
        <Banner />
        <Categories />
        <Banner2 />
        <TrendingProducts />
        {/* <DealsSection />
        <PromoBanner /> */}
       </div>
        
    )
}

export default Home
