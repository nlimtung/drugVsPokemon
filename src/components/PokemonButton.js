import React from "react";
export { Component } from "react"

export default function PokemonButton(props) {
    return(
        <div>
            <button onClick={(e) =>props.handlePokemonButton(e)}
                style = {{ backgroundColor: props.wrongAnswerPokemonButton === true ? "red":
                props.wrongAnswerPokemonButton === false? "green": 
                "rgba(238, 246, 250, 0.776)"}}
            >
                <img src={require("../images/pokeball.png")}></img>
                <h2>Pokemon</h2>
            </button>
        </div>

    )
}