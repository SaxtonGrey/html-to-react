import React, { Component } from "react";
import { data } from "./fma-data";
import "./CSS/reset.css";
import "./CSS/character-cards.css";

class FmaCharacters extends Component {
  render() {
    return (
      <section id="character-cards">
        {data.map((character, index) => (
          <div key={index} className="card">
            <div className="card-titles">
              <h3>{character.name}</h3>
              {character.nickName && <h4>{character.nickName}</h4>}
            </div>
            <img src={character.imageUrl} alt={character.name} />
            <p>{character.background}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default FmaCharacters;
