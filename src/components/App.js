import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ProductNew from "../pages/ProductNew";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/product/new" component={ProductNew} />
      <Route exact path="/logout" component={Logout} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
