import React from "react"
import { Button } from "react-bootstrap"

export default function StandardButton(props) {

    return(
        <Button href={props.href} variant="outline-primary" style={{alignItems: "center", verticalAlign: "center", justifyContent: "center", width: "100%"}}>
        {props.text}
        </Button>
    )
}