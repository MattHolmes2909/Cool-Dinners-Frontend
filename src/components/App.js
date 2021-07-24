import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <canteenView />
        </Route>
        <Route exact path="/childView">
          <childView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
