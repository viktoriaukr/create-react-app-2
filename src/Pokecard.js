import React from "react";
import './Pokecard.css'

const Pokecard = (props) => (
  <div className="Pokecard">
    <h2 className="Pokecard-name">{props.name}</h2>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      alt={props.name}
    />
    <p>Type: {props.type}</p>
    <p>EXP: {props.base_experience}</p>
  </div>
);

export default Pokecard;
