import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>{carta.name}</h1>
      <img src={carta.card_images?.[0]?.image_url} alt={carta.name} />
      <p>{carta.desc}</p>
      <p>ATK: {carta.atk}</p>
      <p>DEF: {carta.def}</p>
      <p>Type: {carta.type}</p>
      <p>Race: {carta.race}</p>
      <p>Level: {carta.level}</p>
      <p>Attribute: {carta.attribute}</p>
      <h2>Sets</h2>
      <ul>
        {carta.card_sets?.map((set) => (
          <li key={set.set_code}>
            {set.set_name} - {set.set_rarity}
          </li>
        ))}
      </ul>
      <h2>Prices</h2>
      <ul>
        {carta.card_prices?.map((price) => (
          <li key={price.ebay_price}>
            eBay: ${price.ebay_price} - TCGPlayer: ${price.tcgplayer_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Cartas };