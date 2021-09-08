import './App.css';
import Pokemon from './Pokemon';

import React, {useState} from "react";

function App() {
  const[btnPress, setBtnPress] = useState(false);


  const handleFetchClick = (e) => {
    setBtnPress(!btnPress);
  };
  
  return(
    <div className="App">
      <header className="App-header">
      <button onClick={handleFetchClick}>Fetch</button>
        { btnPress ? <Pokemon /> : ""}
      </header>
    </div>
  );
}

export default App;
