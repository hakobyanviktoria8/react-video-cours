import React from "react";
import {choice, remove} from "./helpers";

const Game2 = () => {
    const arr = [1, 2, 34, 5, 6, 7, 8, 90, 23, 12, 3, 45, 4, 45, 467, 4, 3534543, 5435, 54, 3];
    const choiceItem = choice(arr);
    let newArr = remove(arr, choiceItem);
    return (
        <div>
            <h2>Game2</h2>
            <p>Find random number in array and delete it</p>
            {arr.map((x, idx) => (
                    x === choiceItem ?
                        <b key={idx}>{x}, </b> :
                        <i key={idx}>{x}, </i>
                )
            )}
            <p>Choice Item is {choiceItem}</p>
            <hr/>
            {remove(arr,choiceItem)};
            {newArr.map((x, idx) => (
                    x === choiceItem ?
                        <b key={idx}>{x}</b> :
                        <i key={idx}>{x},</i>
                )
            )}
        </div>
    )
};

export default Game2