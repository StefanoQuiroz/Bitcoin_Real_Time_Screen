import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import StockChart from './components/StockChart';


function App() {
  let webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/dogeusdt@trade`);
  const [price, setPrice] = useState("");
  webSocket.onmessage = (event) => {
    const stock = JSON.parse(event.data);
    const priceFloat = parseFloat(stock.p).toFixed(4);
    setPrice(priceFloat);
  }

  //console.log(price);
  

  return (
    <div className="App">
      <h1 style={{display: "flex", justifyContent: "center", marginTop: "5rem"}}> DogeCoin : {price}</h1>
    </div>
  );
}

export default App;
