import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Cartas.css";

function Cartas() {
  const [carta, setCarta] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCarta = async () => {
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
      );
      const data = await response.json();
      setCarta(data.data[0]);
    };
    fetchCarta();
  }, [id]);

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img
          className="card-image"
          src={carta.card_images?.[0]?.image_url}
          alt={carta.name}
        />
      </div>
      <div className="card-info-container card-elevated">
      <h1 style={{backgroundColor: "black", color: "white"}}>{carta.name}</h1>
      <p className="card-descrip" style={{backgroundColor: "black", color: "white"}}>{carta.desc}</p>
      <div className="card-attribute-container">
          <p className="card-atak" style={{backgroundColor: "black", color: "white"}}>ATK: {carta.atk}</p>
          <p className="card-def" style={{backgroundColor: "black", color: "white"}}>DEF: {carta.def}</p>
          <p className="card-Type" style={{backgroundColor: "black", color: "white"}}>Type: {carta.type}</p>
          <p className="card-race" style={{backgroundColor: "black", color: "white"}}>Race: {carta.race}</p>
          <p className="card-level" style={{backgroundColor: "black", color: "white"}}>Level: {carta.level}</p>
          <p className="card-attribute" style={{backgroundColor: "black", color: "white"}}> Attribute: {carta.attribute}</p>
        </div>
        <div className="card">
          <h2>Sets</h2>
          <ul className="list-Sets">
            {carta.card_sets?.map((set) => (
              <li key={set.set_code}>
                {set.set_name} - {set.set_rarity}
              </li>
            ))}
          </ul>
          </div>
          <div className="card2">
            <h2>Prices</h2>
            <ul className="card-prices">
            {carta.card_prices?.map((price) => (
              <li key={price.ebay_price}>
                eBay: ${price.ebay_price} - TCGPlayer: ${price.tcgplayer_price}
              </li>
            ))}
          </ul>
          </div>
          
      </div>
    </div>
  );
}

export { Cartas };
