import React, {useState} from "react";
import "./Game6.css"

const Game6 = () => {
    const obj = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six"
    }

    const [pl1, setPL1] = useState(1);
    const [pl2, setPL2] = useState(1);
    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleClick = () => {
        setPL1(Math.floor(Math.random() * 6) + 1);
        setPL2(Math.floor(Math.random() * 6) + 1);
        setLoading(false)
        setTimeout(() => {
            setLoading(true)
        }, 500)
        // pl1>pl2?setC1(c1 + 1) : setC2(c2 + 1)
    }
    // if (pl1 > pl2) {setC1(c1 + 1)}
    // if (pl2 > pl1) {setC2(c2 + 1)}
    // console.log(pl1, obj[pl1])

    return (
        <div className={"Game6"}>
            <h1>Game 6</h1>
            {/*<p>{c1} __ {c2}</p>*/}
            {/*<hr/>*/}
            {console.log("here", pl1, pl2)}
            <div className={"Game6Wraper"}>
                <div>
                    <i className={`fas fa-dice-${obj[pl1]}
                    ${loading ? "shaking" : ""}`}
                    />
                </div>
                <div>
                    <i className={`fas fa-dice-${obj[pl2]} 
                    ${loading ? "shaking" : ""}`}
                    />
                </div>
            </div>
            <button disabled={!loading}
                    onClick={handleClick}>
                {loading ? "Click me" : "Loading..."}
            </button>
        </div>
    )
};

export default Game6