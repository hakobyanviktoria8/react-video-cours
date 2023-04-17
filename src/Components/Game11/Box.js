import React, {useState} from "react";

const Box = () => {
    const [color, setColor] = useState(`rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`)

    console.log(color);
    const handleClick = (e) => {
        e.target.style.background = setColor(`rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`)
        console.log("Here color ", e.target.style.background, color)
    }

    return (
        <div onMouseEnter={handleClick} className={"Box"} style={{"background": color}}/>
    )
};

export default Box