import React, { useState } from "react";

function Sushi({ sushiData, onEatClick, wallet }) {

const {name, img_url, price} = sushiData;
const [eaten, setEaten] = useState(false)

  function handleEatClick(e) {
    if (wallet >= price) {
    setEaten(!eaten)
    onEatClick(sushiData)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {eaten? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
