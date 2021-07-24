import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TeacherView from "./TeacherView";
import CanteenView from "./CanteenView";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/canteen" component={CanteenView} />
        <Route path="/teachers" component={TeacherView} />
      </Switch>
    </div>
  );
}

export default App;
