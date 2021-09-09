import React from "react";
import PokeCard from "./PokeCard";

const PokeGame = ({pokemon}) => {
    const pl1 = Math.floor(Math.random() * pokemon.length);
    const pl2 = Math.floor(Math.random() * pokemon.length);

    // if (pokemon[pl1].exp > pokemon[pl2].exp) {
    //     pokemon[pl1].active = "active"
    // } else {
    //     pokemon[pl2].active = "active"
    // }

    // console.log(pokemon[pl1], pokemon[pl2])
    return (
        <div>
            <h1>Pokemon game</h1>
            <div className="game2Card">
                <PokeCard item={pokemon[pl1]} isWinner={pokemon[pl1].exp > pokemon[pl2].exp}/>
                <PokeCard item={pokemon[pl2]} isWinner={pokemon[pl2].exp > pokemon[pl1].exp}/>
            </div>
        </div>
    )
};

export default PokeGame