import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TeacherView from "./TeacherView";
import CanteenView from "./CanteenView";
import AddChild from "./AddChild";
import AddUser from "./AddUser";
import AdminTools from "./AdminTools";
import "../styles/App.css";

function App() {
  return (
    <div className="App" data-testid="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/canteen" component={CanteenView} />
        <Route path="/teachers" component={TeacherView} />
        <Route path="/Add-Child" component={AddChild} />
        <Route path="/admin-tools" component={AdminTools} />
        <Route path="/admin-tools/add-user" component={AddUser} />
        <Route path="/add-user" component={AddUser} />
      </Switch>
    </div>
  );
}

export default App;
