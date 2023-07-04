import React from "react"
import { Button } from "react-bootstrap"

export default function StandardButton(props) {

    return(
        <Button variant="outline-primary" style={{height: 50, alignItems: "center", justifyContent: "center", width: "100%"}}>
        {props.text}
        </Button>
    )
}