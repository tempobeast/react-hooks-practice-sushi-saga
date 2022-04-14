import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const [sushis, setSushis] = useState([])
const [plates, setPlates] = useState([])
const [wallet, setWallet] = useState(100)



useEffect(() => {
  fetch(API)
  .then((res) => res.json())
  .then((data) => setSushis(data))
}, [])

function handleAddPlate(sushiData) {
  setPlates([...plates, sushiData.alt])
  setWallet(wallet - sushiData.price)
}



  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatClick={handleAddPlate} wallet={wallet}/>
      <Table plates={plates} wallet={wallet}/>
    </div>
  );
}

export default App;
