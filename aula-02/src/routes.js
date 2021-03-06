import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../src/Pages/Main";
import Biography from '../src/Pages/Biography'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = '/' component={Main} />
      <Route path = '/biography/:id' component={Biography} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
