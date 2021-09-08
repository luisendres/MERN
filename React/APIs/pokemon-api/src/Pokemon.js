import React, {useState, useEffect} from "react";

import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(resp =>{
                setPokemon(resp.data.results)
            })
    }, []);

    return (
        <div>
            {pokemon && pokemon.map((item, index) => <p key={index}>{item.name}</p>)}
        </div>
    );
}
export default Pokemon;