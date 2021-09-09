import './App.css';
import React from "react";
import Form from "./Components/Form";
import People from "./Components/People";
import Planet from "./Components/Planet";

import { Route, Switch } from "react-router-dom";
// import { BrowserRouter,Route, Switch } from "react-router-dom";

//see index.js for how <BrowserRouter> is used.

function App() {
  return (
    <div className="App">
      <header>
        {/* <nav class="Nav">
          <p>Search for:</p>
          <select name="" id="">
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <p>ID:</p>
          <input type="number" />
          <button>Search</button>
        </nav> */}
        <Form />
      <Switch>
        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/planets/:id">
          <Planet />
        </Route>
      </Switch>
      </header>
    </div>
  );
}

// export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <h1>Luke API-walker</h1>
//       <Form />
//       <Switch>
//         <Route path="/people/:id">
//           <People />
//         </Route>
//         <Route path="/planets/:id">
//           <Planet />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

export default App;
