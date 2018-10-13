import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./App";
import HomePage from "./containers/HomePage/index";
import NotFound from "./containers/NotFound/index";
import AuthMiddleware from "./utils/AuthMiddleware";
import LoginPage from "./containers/LoginPage";



// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route component={AuthMiddleware}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
      </Route>
    </Route>
    <Route path="/login" component={LoginPage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

// export
export { router };
