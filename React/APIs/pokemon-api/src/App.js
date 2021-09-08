import './App.css';
// import Pokemon from './Pokemon';

import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(null);
  // const [error, setError] = useState(null);

  const handleFetchClick = (e) => {
    //call api
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((resp) => {
      // if (!resp.ok) {
      //   throw new Error(resp.statusText);
      // }
      return resp.json();
    })
    .then(respData => {
      console.log(".then triggerd")
      setPokemon(respData.results);
    })
    // .catch((err) => {
    //   setError(err);
    // });
  };
  
  return(
    <div className="App">
      <header className="App-header">
      <button onClick={handleFetchClick}>Fetch</button>

      {pokemon && pokemon.map((item, index) => <p key={index}>{item.name}</p>)}
      </header>
    </div>
  );
}

export default App;
