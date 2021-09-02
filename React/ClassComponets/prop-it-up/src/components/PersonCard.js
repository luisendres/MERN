import React from "react";

// class PersonCard extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             age: this.props.age
//         };
//     }
//     changeAge = () => {
//         this.setState({ age: this.state.age + 1});
//     };
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {this.props.hairColor}</p>
//                 <button onClick={this.changeAge}> Birthday Button for {this.props.firstName} {this.props.lastName}</button>
//             </div>
//         );
//     }
// }

//changed the PersonCard class into a fuctional component
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}

export default PersonCard;