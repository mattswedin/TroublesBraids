import React, { useEffect, useState } from "react";
import productData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";


const filters = {
    categories: ["All", "Cleansing + Conditioning", "Styling + Finishing", "Handmade + Curiousities"],
    brands: ["Trouble's Braids", "Hairstory", "Cult + King"]
}

const Shop = () => {
    const [products, setProducts] = useState(productData);
    const [filtersState, setFiltersState] = useState({
        category: 'All',
        brand: 'All'
    })

    function applyFilters() {
        let filteredProducts = productData;

        if(filtersState.category && filtersState.category != 'All') {
            filteredProducts = filteredProducts.filter(product => (
                product.category === filtersState.category
            ))
        }

        if(filtersState.brand && filtersState.brand != 'All') {
            filteredProducts = filteredProducts.filter(product => (
                product.brand === filtersState.brand
            ))
        }

        setProducts(filteredProducts);

    }

    useEffect(() => {
        applyFilters();
    }, [filtersState])

    //clear filters

    function clearFilters() {
        setFiltersState({
            category: 'All',
            brand: 'All'
        })
    }


    return (
        <>
        <section className="section__container bg-primary-light" >
             <h2 className="section__header">SHOP</h2>
            <p className="section__subheader">Verbiage about all the Shop</p>
        </section>

        <section className="section__container">
            <div className="flex flex-col md:flex-row md:gap-12 gap-8">
                {/* left side */}
                <ShopFiltering filters={filters} 
                filtersState={filtersState} 
                setFiltersState={setFiltersState} 
                clearFilters={clearFilters}/>

                {/* right side */}
                <div>
                    <h3 className="text-xl font-medium mb-4">Products Available: {products.length}</h3>
                    <ProductCards products={products}/>
                </div>
            </div>
        </section>
        </>

    )
}

export default Shop;