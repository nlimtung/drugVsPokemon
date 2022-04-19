import React from "react";
export { Component } from "react"

export default function Scores(props) {
    return(
        <div>
            <h3>round: {props.round}</h3>
            <h3>Score: {props.score} / {props.round}</h3>
        </div>

    )
}