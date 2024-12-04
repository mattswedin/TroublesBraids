import React from "react";

const cards = [
    {
        id: 1,
        title: 'Cleansing'
    },
    {
        id: 2,
        title: 'Conditoning'
    },
    {
        id: 3,
        title: 'Styling'
    }
]

const Banner2 = () => {
    return (
       <section className="section__container hero__container">

        {
            cards.map((card) => (
                <div key={card.id} className="hero__card">
                    <h1>{card.title}</h1>
                </div>
            ))
        }
       </section>
    )
}

export default Banner2