import React, {useState} from "react";

const Button = () => {
    const [bool, setBool] = useState(false)
    return (
        <div>
            <h1>{bool ? "True" : "False"}</h1>
            <button onClick={() => setBool(!bool)}>Click me</button>
        </div>
    )
};

export default Button