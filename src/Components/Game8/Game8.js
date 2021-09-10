import React, {useState} from "react";

const Game8 = () => {
    const options = [
        "angry",
        "anchor",
        "archive",
        "at",
        "archway",
        "baby",
        "bell",
        "bolt",
        "bone",
        "car",
        "city",
        "cloud",
        "couch"
    ];
    const mystyle = {
        fontSize: "30px",
        padding: "10px"
    };

    const [arr, setArr] = useState([]);
    const handleAddIcon = () => {
        const random = Math.floor(Math.random() * options.length);
        setArr([...arr, options[random]]);

    }
    console.log(arr)
    return (
        <div>
            {
                arr && arr.map((item, idx) => (
                        <i style={mystyle}
                           key={idx}
                           className={`fas fa-${item}`}
                        />
                    )
                )
            }
            <br/>
            <button onClick={handleAddIcon}>Add icon</button>
        </div>
    )
};

export default Game8