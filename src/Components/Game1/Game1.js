import React from "react";
import "./Game1.css";
import {show, hide} from "./helpersFunction";

const Game1 = () => {
    let a = Math.floor(Math.random() * 2);
    let b = Math.floor(Math.random() * 2);
    let c = Math.floor(Math.random() * 2);
    const win = (a === b) && (b === c);
    return (
        <div>
            <h1>Game 1</h1>
            <hr/>
            <p>{a} {b} {c}</p>
            <p className={win ? "win" : "lost"}>{win ? "Winner" : "Loser"}</p>
            {show(a, b, c)}
            {hide(a, b, c)}
        </div>
    )
};

export default Game1