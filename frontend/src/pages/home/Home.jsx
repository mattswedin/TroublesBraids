import React from "react";
import Banner from "./Banner"
import Categories from "./Brands";
import Banner2 from "./Banner2";
import TrendingProducts from "../shop/trendingProducts";
import DealsSection from "./DealsSection";

const Home = () => {
    return (
       <>
        <Banner />
        <Categories />
        <Banner2 />
        <TrendingProducts />
        <DealsSection />
       </>
        
    )
}

export default Home
