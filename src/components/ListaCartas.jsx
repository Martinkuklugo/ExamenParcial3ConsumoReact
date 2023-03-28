import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import TituloList from "./tituloList";
import "./ListaCartasCss.css";

function ListaCartas() {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => response.json())
      .then((data) => setCartas(data.data));
  }, []);

  return (
    <div>
      <TituloList />
      <div className="blur-container">
       <div className="lista-cartas-container">
        <ListGroup>
          {cartas.map((carta) => (
            <ListGroup.Item key={carta.id}>
              <Link to={`/cartas/${carta.id}`}>{carta.name}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div> 
      </div>
      
    </div>
  );
}

export default ListaCartas;
