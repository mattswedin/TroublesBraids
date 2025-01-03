import React from "react";
import color from "../../data/color.json"

const ColorCards = () => {
    return (
        <div>
            {
                color.map((color, index) => (
                    <div key={index} >
                        <h4>{color.title}</h4>
                        <p>{color.sub}</p>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default ColorCards;