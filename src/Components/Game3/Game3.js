import React from "react";
import PokeCard from "./PokeCard";
import "./Game3.css";
import PokeGame from "./PokeGame";

const Game3 = () => {
    const pokemon = [
        {id: 1, name: "Charmander", type: "fire", exp: 62, link:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1f72ba0-a2b3-4808-a2f9-4691377a83be/ddk3hzz-d93d39c0-2ac2-4709-a52a-3d7ef8dddf83.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxZjcyYmEwLWEyYjMtNDgwOC1hMmY5LTQ2OTEzNzdhODNiZVwvZGRrM2h6ei1kOTNkMzljMC0yYWMyLTQ3MDktYTUyYS0zZDdlZjhkZGRmODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UIJY7k5xntrM51DmlgleC88D7HzeSZyBlwjnSzhCo6w"},
        {id: 2, name: "Squirtle", type: "water", exp: 63, link : "https://www.freeiconspng.com/uploads/pokemon-png-19.png"},
        {id: 3, name: "Metapod", type: "bug", exp: 72, link: "https://www.freepnglogos.com/uploads/pokemon-png/pokemon-png-image-famous-anime-character-png-only-39.png"}
    ]

    return (
        <div>
            <h2>Game 3</h2>
            <div className={"Game3Wraper"}>
                {
                    pokemon.map(item => (
                        <PokeCard item={item} key={item.id}/>
                    ))
                }
            </div>
            <hr/>
            <PokeGame pokemon={pokemon}/>

        </div>
    )
};

export default Game3