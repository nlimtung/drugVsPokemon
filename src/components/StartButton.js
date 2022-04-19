import React from "react";
export { Component } from "react"

export default function StartButton(props) {
    return(
        <div>
            <button onClick={(e) =>props.handleButton(e)}>
                Start 
            </button>
        </div>

    )
}