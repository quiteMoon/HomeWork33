import React from "react";

function FunctionComponent(props) {
    const h2Style = {
        color: props.color,
        fontStyle: "italic",
        backgroundColor: "grey",
        paddingLeft: "20px"
    };

    return (
        <>
            <h1 style={{color: "orange"}}>FunctionComponent</h1>
            <h2 style={h2Style}>{props.title}</h2>
        </>
    );
}

export default FunctionComponent;
