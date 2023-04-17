import React, {useState} from "react";

const Game12 = () => {
    const [clas, setClas] = useState("");
    const myStyle ={
        fontSize:"150px",
        color:"pink",
        margin:"50px"
    }
    return (
        <div>
            <h1>Game12</h1>
            <div>
                <i onMouseEnter={() => setClas("-wink")}
                   onMouseLeave={() => setClas("")}
                   className={`fas fa-smile${clas}`}
                   style={myStyle}
                />
            </div>
        </div>
    )
};

export default Game12