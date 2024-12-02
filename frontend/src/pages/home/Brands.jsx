import React from "react";
import hairstory from "../../assets/hairstory_logo.png";
import greenCircle from "../../assets/green_circle_salon_logo.png";
import cultKing from "../../assets/cult+king_logo.png";
import wella from "../../assets/wella_logo.png";
import { Link } from "react-router-dom";

const Brands = () => {

    const brands = [
        {
            id: 1,
            name: 'Hairstory',
            image: hairstory,
            url: 'https://hairstory.com/discount/KARABESPALKO?rfsn=7447450.9a0216%20%28https%3A%2F%2Fhairstory.com%2Fdiscount%2FKARABESPALKO%3Frfsn%3D7447450.9a0216%29'
        },
        {
            id: 2,
            name: 'greencircle salons',
            image: greenCircle,
            url: 'https://info.greencirclesalons.com/hubfs/WelcomeKit-Postcards2019-digital.pdf?_hsenc=p2ANqtz-9NxmBtQ80D1mfFF3cC0EEoDwTpcr0Z-cOUmV4zT-iAmsURqEAFHBugXYXLfj19fdXKXs7MGDvrAj_WHx3kW53EuuBqqe-sq9azwC2X1ybx-h8IWfc&_hsmi=204879731&utm_content=204879731&utm_medium=email&utm_source=hs_automation'
        },
        {
            id: 3,
            name: 'cult + king',
            image: cultKing,
            url: 'https://cultandking.com/'
        },
        {
            id: 4,
            name: 'Wella Professionals',
            image: wella,
            url: 'https://www.wella.com/professional/en-US/home'
        }
    ]

    return (
        <>
        <div className='product__grid' >
            {
                brands.map((brand) => (
                   <Link key={brand.id} to={brand.url} target="_blank" rel="noopener noreferrer" className="brand__card">
                    <img src={brand.image} alt={brand.name} />
                    {/* <h4>{brand.name}</h4> */}
                   </Link>
                ))
            }
        </div>
        </>
    )
};

export default Brands;