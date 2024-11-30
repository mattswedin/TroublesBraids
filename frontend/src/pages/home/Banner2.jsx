import React from "react";

const cards = [
    {
        id: 1,
        image: '',
        title: 'image'
    },
    {
        id: 2,
        image: '',
        title: 'image'
    },
    {
        id: 3,
        image: '',
        title: 'image'
    }
]

const Banner2 = () => {
    return (
       <section className="section__container hero__container">
        {
            cards.map((card) => (
                <div key={card.id} className="hero__card">
                    {/* <img src="{card.image}"/> */}
                    <h1>{card.title}</h1>
                </div>
            ))
        }
       </section>
    )
}

export default Banner2