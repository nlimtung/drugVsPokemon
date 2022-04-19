import React from "react";
export { Component } from "react"

export default function DrugButton(props) {
    return(
        <div>
            <button onClick={(e) =>props.handleDrugButton(e)}
                style = {{ backgroundColor: props.wrongAnswerDrugButton === true ? "red":
                    props.wrongAnswerDrugButton=== false ? "green": "rgba(238, 246, 250, 0.776)"}}
            >
                <img src={require("../images/pill.png")}></img>
                <h2>Drug</h2>
            </button>
        </div>

    )
}