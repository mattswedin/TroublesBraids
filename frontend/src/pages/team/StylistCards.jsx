import React from "react";
import stylists from '../../data/stylists.json'
import stylist1 from '../../assets/kitty.jpg'
import stylist2 from '../../assets/jessCress.jpg'
import stylist3 from '../../assets/jessKnight.jpg'

const StylistCards = () => {
    const stylistImages = [
        {
            id: 0,
            img: stylist1
        },
        {
            id: 1,
            img: stylist2
        },
        {
            id: 2,
            img: stylist3
        }

    ]
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {
            stylists.map((stylist, index) => (
                <div key={index} className="stylist__card">
                    <div className="stylist__header__image">
                        <img src={stylistImages[index].img} alt={stylist.name} />
                    </div>
                    <h1>{stylist.name}</h1>
                    <h4>{stylist.subtitle}</h4>
                    <p>{stylist.summary}</p>
                    <a href={stylist.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn"><button>Book Now</button></a>
                </div>
            ))
        }
        </div>
    )
}

export default StylistCards;