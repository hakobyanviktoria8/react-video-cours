import React, {useState} from "react";

const Game4 = (props) => {
    const [num, setNum] = useState(0);

    // const setNumFunc=(max)=>{setTimeout(() => {
    //     setNum(Math.floor(Math.random() * max));
    //     console.log("Done", num)
    //
    // }, 2000)}

    // setNumFunc(props.max);
    return (
        <div>
            <h1>Game 4</h1>
            <p>{num}</p>
        </div>
    )
};

export default Game4