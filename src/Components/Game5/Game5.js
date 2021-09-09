import React, {useState} from "react";

const Game5 = () => {
    const [num, setNum] = useState(0)
    const [show, setShow] = useState(true)
    const handleClick = () => {
        setNum(Math.floor(Math.random() * 10 + 1));
        setShow(num !== 7)
    }
    return (
        <div>
            <h1>Naumber is {num}</h1>
            {show ?
                <button onClick={handleClick}>Click me</button>
                :
                <p>You winner</p>
            }
        </div>
    )
};

export default Game5