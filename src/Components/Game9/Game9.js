import React, {useState} from "react";
import "./Game9.css";
import Sircle from "./Sircle";

const Game9 = ({maxSircle, maxRange}) => {
    let [arr, setArr] = useState(Array.from({length: maxSircle}));

    const handleClick = (x) => {
        setArr(arr.map(x => x = Math.floor(Math.random() * maxRange + 1)));
    };

    return (
        <div className={"Game9"}>
            {/*{console.log("Clicked", arr)}*/}
            <div className="Game9Wraper">
                {arr.map((item, idx) => {
                    return <Sircle key={idx} item={item}/>
                })}
            </div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
};

export default Game9