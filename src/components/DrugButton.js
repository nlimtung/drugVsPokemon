import React from "react";
export { Component } from "react"

export default function DrugButton(props) {
    return(
        <div>
            <button onClick={(e) =>props.handleDrugButton(e)}>
                <img src={require("../images/pill.png")}></img>
                <h2>Drug</h2>
            </button>
        </div>

    )
}