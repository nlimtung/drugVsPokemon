import React from "react";
export { Component } from "react"

export default function PokemonButton(props) {
    return(
        <div>
            <button onClick={(e) =>props.handlePokemonButton(e)}>
                <img src={require("../images/pokeball.png")}></img>
                <h2>Pokemon</h2>
            </button>
        </div>

    )
}