import React from "react";
import cutAndStylings from "../../data/cutAndStylings.json"

const CutAndStyleCards = () => {
    return (
        <div>
            {
                cutAndStylings.map((cut, index) => (
                    <div key={index} >
                        <h4>{cut.title}</h4>
                        <h6>{cut.time}</h6>
                        <p>{cut.sub}</p>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default CutAndStyleCards;