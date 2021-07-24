import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import teacherView from "./teacherView";
import canteenView from "./canteenView";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/canteen" component={canteenView} />
        <Route exact path="/teachers" component={teacherView} />
      </Switch>
      <teacherView />
    </div>
  );
}

export default App;
