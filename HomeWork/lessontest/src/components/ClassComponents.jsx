import React from "react";

class ClassComponent extends React.Component {
    render() {
        

        return (
            <>
                <h1>ClassComponent</h1>
                <h2>Id: {this.props.id}</h2>
                <h2>Name: {this.props.name}</h2>
            </>
        );
    }
}

export default ClassComponent;
