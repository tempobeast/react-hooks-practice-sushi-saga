import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatClick, wallet }) {

  const [pageSlice, setPageSlice] = useState(4)
  
  const sushiPage = sushis.slice(pageSlice - 4, pageSlice)

  const displaySushis = sushiPage.map((sushiData) => 
  <Sushi 
  onEatClick={onEatClick} 
  key={sushiData.id} 
  sushiData={sushiData}
  wallet={wallet}
  />)

  function handleMoreClick(e) {
    setPageSlice(pageSlice + 4)
  }

  return (
    <div className="belt">
      {displaySushis}
      <MoreButton onMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
