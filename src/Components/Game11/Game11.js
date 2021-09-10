import React from "react";
import "./Game11.css";
import Box from "./Box";

const Game11 = () => {
    const arr = Array.from({length: 30});

    return (
        <div>
            <h1>Game 11</h1>
            <div className={"BoxWraper"}>
                {arr.map((x,id) => <Box key={id}/>)}
            </div>
        </div>
    )
};

export default Game11