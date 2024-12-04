import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../data/products.json"
import ProductCards from "../shop/ProductCards";

const CategoryPage = () => {

    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {

        const filtered = products.filter((product) => 
            product.category.toLowerCase() === categoryName.toLowerCase()
        );

        setFilteredProducts(filtered);

    }, [categoryName])

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    
    function capitalize(str) {
        return str.toUpperCase();
    }

    return (
        <>
        <section className="section__container bg-primary-light" >
            <h2 className="section__header">{capitalize(categoryName)}</h2>
            <p className="section__subheader">Verbiage about all products regardless of category?</p>
        </section>


        <div className="section__container">
            <ProductCards products={filteredProducts}/>
        </div>
        </>
    )

}

export default CategoryPage;