import React from "react";

const PokeCard = ({item, isWinner}) => {
    return (
        <div className="PokeCard" style={{background: isWinner && "green" }}>
            <img src={item.link} alt=""/>
            <h3>{item.name}</h3>
            <span>{item.type}</span>
            <small>{item.exp}</small>
            <p>{isWinner ? "Winner" : "Loser"}</p>
        </div>
    )
};

export default PokeCard