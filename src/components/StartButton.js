import React from "react";
export { Component } from "react"

export default function StartButton(props) {
    return(
        <div>
            <button className="start-button" onClick={(e) =>props.handleButton(e)}>
              <img src={require("../images/start.png")}></img>
            </button>
        </div>

    )
}