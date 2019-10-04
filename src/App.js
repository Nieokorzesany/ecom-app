import React from "react";
import "./App.css";
import HomepageComponent from "./HomepageComponent";
import { Switch, Route } from "react-router-dom";

function Hats() {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
