import './App.css';
import { Link, Redirect, Route, Switch } from "react-router-dom";

import NotFound from "./views/NotFound";
import Players from "./views/Players";
import NewPlayer from './views/NewPlayer';
import GameOne from './views/GameOne';
import GameTwo from './views/GameTwo';
import GameThree from './views/GameThree';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <div className="navbar-nav justify-content-between">
        <Link
            to="/"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            Manage Players
          </Link>

          <Link
            to="/players/status/game1"
            className="btn btn-sm btn-outline-info mx-1"
          >
            Manage Players Status
          </Link>
        </div>
      </nav>
      <Switch>
        <Redirect exact from="/" to="/players/list" />

        <Route exact path="/players/list">
          <Players />
        </Route>

        <Route exact path="/players/addplayer">
          <NewPlayer />
        </Route>

        <Route exact path="/players/status/game1">
          <GameOne />
        </Route>

        <Route exact path="/players/status/game2">
          <GameTwo />
        </Route>

        <Route exact path="/players/status/game3">
          <GameThree />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
