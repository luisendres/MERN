import React from "react";

class PersonCard extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;