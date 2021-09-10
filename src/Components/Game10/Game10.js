import React, {useState} from "react";

const Game10 = () => {
    const [numberClick, setNumberClick] = useState(0)
    const [zero, setZero] = useState(0)
    const [one, setOne] = useState(0)
    const [coin, setCoin] = useState(0)
    const myStyle = {
        width: "100px",
        height: "100px",
        background: "grey",
        fontSize: "30px",
        textAlign: "center",
        color: "white",
        lineHeight: "100px",
        borderRadius: "50%",
        margin: "10px"
    }
    const handleClick = () => {
        setCoin(Math.floor(Math.random() * 2));
        setNumberClick(numberClick + 1);
        setZero(zero + (coin === 0 ? 1 : 0))
        setOne(one + (coin === 1 ? 1 : 0))
    }

    console.log(coin);
    return (
        <div>
            <h1>Game 10</h1>
            <p style={myStyle}>{coin}</p>
            <button onClick={handleClick}>Click me</button>
            <p>You clicked {numberClick} time: <b>0</b> = {zero} | <b>1</b> = {one}</p>
        </div>
    )
};

export default Game10