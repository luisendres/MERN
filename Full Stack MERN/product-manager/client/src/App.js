import logo from './logo.svg';
import './App.css';

import { Link, Redirect, Route, Switch } from "react-router-dom";

import NotFound from "./views/NotFound";
import Products from "./views/Products";
import Product from "./views/Product";
import NewProduct from "./views/NewProduct";
import EditProduct from "./views/EditProduct";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products">
          <Products />
        </Route>

        <Route exact path="/products/:id">
          <Product />
        </Route>

        <Route exact path="products/new">
          <NewProduct />
        </Route>
        
        <Route exact path="products/:id/edit">
          <EditProduct />
        </Route>
          
        {/* 
          If none of the above routes match, use NotFound view.
          If there is a route with path="/" above this, it will catch unknown
          routes instead unless it has exact={true}
        */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
