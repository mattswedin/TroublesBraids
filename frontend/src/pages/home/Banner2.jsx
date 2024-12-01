import React from "react";
import img1 from '../../assets/header1.png'
import img2 from '../../assets/header5.png'
import img3 from '../../assets/header2.png'

const cards = [
    {
        id: 1,
        image: img1,
        title: 'Color'
    },
    {
        id: 2,
        image: img2,
        title: 'Long Cut'
    },
    {
        id: 3,
        image: img3,
        title: 'Short Cut'
    }
]

const Banner2 = () => {
    return (
       <section className="section__container hero__container">
        {
            cards.map((card) => (
                <div key={card.id} className="hero__card">
                    <img src={card.image}/>
                    <h1>{card.title}</h1>
                </div>
            ))
        }
       </section>
    )
}

export default Banner2