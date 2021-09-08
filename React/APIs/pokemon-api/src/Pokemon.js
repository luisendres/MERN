import React, {useState, useEffect} from "react";

const Pokemon = (props) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log("Hello")
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response =>{
                return(response.json())
            })
            .then(response =>{
                setState ({ 
                    pokemon: response.results
                })
            })
    }, []);

    return (
        <div>
            {state.pokemon ? state.pokemon.map((item, index) => {
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    );
}
export default Pokemon;