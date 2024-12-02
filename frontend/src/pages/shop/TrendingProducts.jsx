import React, { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../data/products.json"

const TrendingProducts = () => {
    const [visableProducts, setVisableProducts] = useState(4)
    const loadMoreProducts = () => {
        setVisableProducts((prevCount) => prevCount + 4)
    }

    return (
        <section className='section__container product__container'>
            <h2 className="section__header">STYLING & CARE</h2>
            <p className="section__subheader">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, reprehenderit assumenda ex fugiat vitae accusantium sint repellendus ab! Saepe, placeat. Veniam, nam. Mollitia explicabo architecto totam est exercitationem magnam? Voluptatibus.
            </p>
            {
                //product cards
            }
            <div className="mt-12">
            <ProductCards products={products.slice(0, visableProducts)}/>
            </div>
            {
                //load more products button
            }
            <div className="product__btn">
            {
                visableProducts < products.length && (
                    <button className='btn mt-11' onClick={loadMoreProducts} >Load More</button>
                )
            }
            </div>






        </section>
    )
}

export default TrendingProducts;