import React from "react";
import { Link } from "react-router-dom";

const cards = [
    {
        id: 1,
        title: 'Cleansing',
        url: '/categories/cleansing'
    },
    {
        id: 2,
        title: 'Conditoning',
        url: '/categories/conditioning'
    },
    {
        id: 3,
        title: 'Styling',
        url: '/categories/styling'
    }
]

const Banner2 = () => {
    return (
       <section className="section__container hero__container">

        {
            cards.map((card) => (
                <div key={card.id} className="hero__card">
                    <Link to={card.url}>
                    <h1>{card.title}</h1>
                    </Link>
                </div>
            ))
        }
       </section>
    )
}

export default Banner2