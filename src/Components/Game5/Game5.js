import React, {useState} from "react";

const Game5 = () => {
    const [num, setNum] = useState(0)
    const handleClick = () => {
        setNum(Math.floor(Math.random() * 10 + 1));
    }
    return (
        <div>
            <h1>Naumber is {num}</h1>
            {num === 7 ? <p>You winner</p> : <button onClick={handleClick}>Click me</button>}
        </div>
    )
};

export default Game5