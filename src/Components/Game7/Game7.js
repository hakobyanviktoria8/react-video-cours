import React, {useState} from "react";

const Game7 = () => {
        const [num, setNum] = useState(0);

        const handleAdd1 = () => {
            return setNum(num + 1)
        }
        const handleAdd3 = () => {
            setNum((n) => {
                return n + 1
            });
            setNum((n) => {
                return n + 1
            });
            setNum((n) => {
                return n + 1
            });
        }
        // const handleAdd3 = () => {
        //     handleAdd1();
        //     handleAdd1();
        //     handleAdd1();
        // }
        return (
            <div>
                <p>{num}</p>
                <button onClick={handleAdd1}>+1</button>
                <button onClick={handleAdd3}>+3</button>
            </div>
        )
    }
;

export default Game7