import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TeacherView from "./TeacherView";
import CanteenView from "./CanteenView";
import "../styles/App.css";
import AddChild from "./AddChild";

function App() {
  return (
    <div className="App" data-testid="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/canteen" component={CanteenView} />
        <Route path="/teachers" component={TeacherView} />
        <Route path="/Add-Child" component={AddChild} />
      </Switch>
      
    </div>
  );
}

export default App;
