// files
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

// components
import FirebaseData from "./components/FirebaseData";
import Admin from "./components/Admin";
import LiftKiezen from "./components/LiftKiezen";
import LiftPagina from "./components/LiftPagina";
import Hogeschool from "./components/Hogeschool";
import Fitness from "./components/Fitness";
import Bieb from "./components/Bieb";

const App = () => {
  return (
    <Router>
      <section>
        <Route exact path="/">
          <FirebaseData />
        </Route>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/liftkiezen">
            <LiftKiezen />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/liftpagina">
            <LiftPagina />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/hogeschool">
            <Hogeschool />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/fitness">
            <Fitness />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/bieb">
            <Bieb />
          </Route>
        </Switch>
      </section>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
