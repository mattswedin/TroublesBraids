import React from "react";
import {Link, useParams} from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams();
    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header captilize">Single Product Page</h2>
                <div className='section__subheader space-x-2'>
                    <span className="hover:text-primary"><Link to="/">home</Link></span>
                    <i className="ri-arrow-right-s-fill"></i>
                    <span className="hover:text-primary"><Link to="/shop">shop</Link></span>
                    <i className="ri-arrow-right-s-fill"></i>
                    <span className="hover:text-primary">product name</span>
                </div>
            </section>

            <section className='section__container mt-8'>
                <div className="flex flex-col items-center md:flex-row gap-8">
                    {/*product image*/}
                    <div className='md:w-1/2 w-full'>
                        <img src="https://hairstory.com/cdn/shop/files/PS_Hair-Balm-4oz.jpg?v=1728401354&width=1920" className="rounded-md w-full h-auto"/>
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <h3 className='text-2Xl font-semibold mb-4'>Product Name</h3>
                        <p className='text-xl text-primary mb-4'>$70</p>
                        <p className="text-gray-400 mb-4">This is a product description</p>

                        {/* additional product info*/}
                        <div>
                            <p><strong>Category: </strong>Cleansing</p>
                        </div>

                        <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct;