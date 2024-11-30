import React, { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../data/products.json"

const TrendingProducts = () => {
    const [visableProducts, setVisableProducts] = useState(8)
    const loadMoreProducts = () => {
        setVisableProducts((prevCount) => prevCount + 4)
    }

    return (
        <section className='section__container product__container'>
            <h2 className="section__header">Trending Products</h2>
            <p className="section__subheader mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, reprehenderit assumenda ex fugiat vitae accusantium sint repellendus ab! Saepe, placeat. Veniam, nam. Mollitia explicabo architecto totam est exercitationem magnam? Voluptatibus.</p>
            <ProductCards products={products}/>
        </section>
    )
}

export default TrendingProducts;